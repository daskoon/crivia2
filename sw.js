// Crelly Trivia PWA Service Worker
// Version 2.0 - Complete offline functionality

const CACHE_NAME = 'crelly-trivia-v2.0';
const OFFLINE_URL = 'offline.html';

// Resources to cache for offline functionality
const CACHE_RESOURCES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './offline.html',
  'https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app resources');
        return cache.addAll(CACHE_RESOURCES);
      })
      .then(() => {
        console.log('[SW] All resources cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Failed to cache resources:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', event.request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
        console.log('[SW] Fetching from network:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response for caching
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.log('[SW] Network fetch failed:', error);

            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }

            return new Response('Content not available offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Background sync for future features
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('[SW] Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

// Push notification handler for future features  
self.addEventListener('push', event => {
  console.log('[SW] Push message received');

  const options = {
    body: event.data ? event.data.text() : 'New trivia questions available!',
    icon: 'https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg',
    badge: 'https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Play Now',
        icon: 'https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Crelly Trivia', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click received.');

  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('./')
    );
  }
});

// Message handler for communication with main app
self.addEventListener('message', event => {
  console.log('[SW] Message received:', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Helper function for background sync
async function doBackgroundSync() {
  try {
    console.log('[SW] Performing background sync...');
    // Future: sync high scores, update questions, etc.
    return Promise.resolve();
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
    return Promise.reject(error);
  }
}

// Error handler
self.addEventListener('error', event => {
  console.error('[SW] Service Worker error:', event.error);
});

// Unhandled rejection handler
self.addEventListener('unhandledrejection', event => {
  console.error('[SW] Unhandled promise rejection:', event.reason);
});

console.log('[SW] Service worker script loaded successfully');