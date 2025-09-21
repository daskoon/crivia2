# Create a proper manifest.json file for the PWA
import json

manifest_data = {
    "name": "Crelly Trivia - The Ultimate Cow VTuber Quiz",
    "short_name": "Crelly Trivia",
    "description": "Test your knowledge about Crelly the cow VTuber with over 40 questions across 17 categories. From basic info to deep memes, challenge yourself with this comprehensive trivia game!",
    "start_url": "./",
    "scope": "./",
    "id": "crelly-trivia-pwa-2025",
    "display": "standalone",
    "orientation": "portrait-primary",
    "background_color": "#1F2133",
    "theme_color": "#8B5CF6",
    "lang": "en",
    "dir": "ltr",
    "categories": ["games", "entertainment", "education"],
    "icons": [
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "512x512",
            "type": "image/jpeg",
            "purpose": "any maskable"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "384x384",
            "type": "image/jpeg",
            "purpose": "any"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "192x192",
            "type": "image/jpeg",
            "purpose": "any"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "152x152",
            "type": "image/jpeg",
            "purpose": "any"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "144x144",
            "type": "image/jpeg",
            "purpose": "any"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "128x128",
            "type": "image/jpeg",
            "purpose": "any"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "96x96",
            "type": "image/jpeg",
            "purpose": "any"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "72x72",
            "type": "image/jpeg",
            "purpose": "any"
        }
    ],
    "screenshots": [
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "1080x1920",
            "type": "image/jpeg",
            "form_factor": "narrow",
            "label": "Welcome screen of Crelly Trivia app"
        },
        {
            "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
            "sizes": "1920x1080",
            "type": "image/jpeg",
            "form_factor": "wide",
            "label": "Quiz gameplay screen"
        }
    ],
    "shortcuts": [
        {
            "name": "Start Easy Quiz",
            "short_name": "Easy",
            "description": "Start a quick easy difficulty quiz",
            "url": "./?mode=easy&questions=10",
            "icons": [
                {
                    "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
                    "sizes": "96x96",
                    "type": "image/jpeg"
                }
            ]
        },
        {
            "name": "Start Hard Quiz",
            "short_name": "Hard",
            "description": "Challenge yourself with hard questions",
            "url": "./?mode=hard&questions=20",
            "icons": [
                {
                    "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
                    "sizes": "96x96",
                    "type": "image/jpeg"
                }
            ]
        },
        {
            "name": "View Leaderboard",
            "short_name": "Scores",
            "description": "Check your best scores",
            "url": "./?view=leaderboard",
            "icons": [
                {
                    "src": "https://v3.fal.media/files/monkey/b-Lm6rmJnwDuLgGWVY042.jpeg",
                    "sizes": "96x96",
                    "type": "image/jpeg"
                }
            ]
        }
    ],
    "prefer_related_applications": False,
    "related_applications": [],
    "protocol_handlers": [],
    "file_handlers": []
}

# Save the manifest
with open("manifest.json", "w") as f:
    json.dump(manifest_data, f, indent=2)

print("Complete PWA manifest.json created!")
print(f"- Name: {manifest_data['name']}")
print(f"- Icons: {len(manifest_data['icons'])} different sizes")
print(f"- Screenshots: {len(manifest_data['screenshots'])}")
print(f"- Shortcuts: {len(manifest_data['shortcuts'])}")
print(f"- Categories: {', '.join(manifest_data['categories'])}")
print(f"- Display mode: {manifest_data['display']}")
print(f"- Theme color: {manifest_data['theme_color']}")
print(f"- Background color: {manifest_data['background_color']}")
print("\nThis manifest is ready for AAB conversion!")