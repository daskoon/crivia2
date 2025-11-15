# 🚀 Quick Fix for "example.com" Error

## The Problem
Your APK installs but shows "example.com" instead of your trivia game because Android can't verify your app owns the domain `crivia2.vercel.app`.

## The 3-Minute Fix

### Step 1: Get Your Certificate Fingerprint (On Your Computer)

Run this command where your APK is located:

```bash
keytool -printcert -jarfile app-release.apk | grep "SHA256:"
```

**OR** if using debug build:

```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep "SHA256:"
```

You'll get something like:
```
SHA256: D3:D6:7D:EA:19:25:E9:0F:FA:79:A3:51:59:D8:70:49:88:3D:54:A7:B9:68:01:83:DA:E4:D5:13:33:67:87:F1
```

### Step 2: Update assetlinks.json

Edit the file at `.well-known/assetlinks.json` in your project:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.daskoon.crivia",
    "sha256_cert_fingerprints": [
      "PASTE_YOUR_SHA256_HERE"
    ]
  }
}]
```

### Step 3: Deploy to Vercel

Make sure the file is in `public/.well-known/assetlinks.json` or `.well-known/assetlinks.json` (depending on your Vercel config), then:

```bash
git add .well-known/assetlinks.json
git commit -m "Update assetlinks with correct SHA-256 fingerprint"
git push
```

Or deploy directly through Vercel dashboard.

### Step 4: Verify It's Live

```bash
curl https://crivia2.vercel.app/.well-known/assetlinks.json
```

You should see your updated JSON with the correct fingerprint.

### Step 5: Test the App

1. **Uninstall the old app completely** from your device
2. **Reinstall** the new APK
3. **Open** the app
4. **Wait** 10-20 seconds (Android verifies in background)
5. If still showing example.com, **close and reopen** the app

## Still Not Working?

### Common Issues:

1. **Wrong fingerprint** - Make sure you extracted it from the EXACT APK you're installing
2. **File not accessible** - Verify with: `curl https://crivia2.vercel.app/.well-known/assetlinks.json`
3. **Cache issue** - Clear Chrome app data on your device
4. **Old app data** - Go to Settings → Apps → Crelly Trivia → Storage → Clear Data

### For Google Play Store:

If uploading to Play Store, use the **App Signing Certificate** fingerprint from Play Console:
1. Play Console → Your App → Release → Setup → App Integrity
2. Copy the "App signing certificate" SHA-256 fingerprint
3. Use that in assetlinks.json instead

## Helper Script

I've included a script to help extract fingerprints:

```bash
./get-fingerprint.sh
```

## Full Documentation

See `FIX_GUIDE.md` for complete details and troubleshooting.

---

**TL;DR:** Extract SHA-256 from your APK → Update assetlinks.json → Deploy to Vercel → Reinstall app
