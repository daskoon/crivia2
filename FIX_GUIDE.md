# 🔧 Fix Guide: Crelly Trivia App "example.com" Error

## Problem Diagnosis

When you install and open the app, you're seeing "example.com" instead of your trivia game. This happens because:

1. **Digital Asset Links Verification is Failing** - Android can't verify that your app is authorized to open `crivia2.vercel.app`
2. **Certificate Fingerprint Mismatch** - The SHA-256 fingerprint in `assetlinks.json` doesn't match your APK's signing certificate

## The Solution

You need to get the correct SHA-256 fingerprint from your signed APK and update the `assetlinks.json` file on your server.

### Step 1: Get Your APK's Certificate Fingerprint

On your local machine where you're building the APK, run this command:

#### For Debug Builds (using Android's default debug keystore):
```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep "SHA256:"
```

#### For Release Builds (using your upload-keystore.jks):
```bash
keytool -list -v -keystore /path/to/your/upload-keystore.jks -alias upload | grep "SHA256:"
```

#### Alternative: Extract from the APK itself:
```bash
keytool -printcert -jarfile your-app.apk | grep "SHA256:"
```

#### From Play Console (if you're using Play App Signing):
1. Go to Play Console → Your App → Release → Setup → App Integrity
2. Find the "App signing certificate" section
3. Copy the SHA-256 certificate fingerprint

### Step 2: Update assetlinks.json

The SHA-256 fingerprint should look like this:
```
D3:D6:7D:EA:19:25:E9:0F:FA:79:A3:51:59:D8:70:49:88:3D:54:A7:B9:68:01:83:DA:E4:D5:13:33:67:87:F1
```

Update your `/home/user/webapp/assetlinks.json` file:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.daskoon.crivia",
    "sha256_cert_fingerprints": [
      "YOUR_ACTUAL_SHA256_FINGERPRINT_HERE"
    ]
  }
}]
```

### Step 3: Deploy assetlinks.json to Your Server

The file MUST be accessible at:
```
https://crivia2.vercel.app/.well-known/assetlinks.json
```

#### For Vercel:
Create this directory structure in your project:
```
/public/.well-known/assetlinks.json
```

Then redeploy your site.

### Step 4: Verify the Setup

1. **Check if the file is accessible:**
   ```bash
   curl https://crivia2.vercel.app/.well-known/assetlinks.json
   ```

2. **Verify with Google's tool:**
   Go to: https://developers.google.com/digital-asset-links/tools/generator
   - Enter your domain: `crivia2.vercel.app`
   - Enter your package name: `com.daskoon.crivia`
   - Enter your SHA-256 fingerprint
   - Click "Test statement"

### Step 5: Rebuild and Reinstall the App

1. **IMPORTANT:** Uninstall the old version completely from your device
2. Rebuild your APK/AAB with the SAME keystore that matches the fingerprint in assetlinks.json
3. Install the new build
4. Open the app - it should now show your trivia game!

## Common Issues

### Issue 1: Still showing "example.com"

**Solution:**
- Clear app data: Settings → Apps → Crelly Trivia → Storage → Clear Data
- Uninstall completely and reinstall
- Wait a few minutes for Android to re-verify the asset links

### Issue 2: "assetlinks.json" not found (404 error)

**Solution:**
- Ensure the file is in the correct location: `.well-known/assetlinks.json`
- Check your hosting platform's configuration for serving hidden folders
- For Vercel, make sure it's in the `public` folder

### Issue 3: Multiple fingerprints needed

If you're testing with debug builds AND releasing with production builds, add both fingerprints:

```json
{
  "sha256_cert_fingerprints": [
    "DEBUG_KEY_SHA256_HERE",
    "RELEASE_KEY_SHA256_HERE"
  ]
}
```

## Quick Fix for Testing (Debug Build)

If you just want to test quickly with a debug build:

1. Get your debug keystore fingerprint:
   ```bash
   keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
   ```

2. Add the debug fingerprint to assetlinks.json

3. Build debug APK:
   ```bash
   ./gradlew assembleDebug
   ```

4. Install: `app/build/outputs/apk/debug/app-debug.apk`

## For Google Play Store Release

When uploading to Play Store:

1. **Enable Play App Signing** (recommended)
2. **Get the App Signing Certificate fingerprint** from Play Console
3. **Update assetlinks.json** with the Play Console certificate
4. **Deploy the updated assetlinks.json**
5. Upload your AAB to Play Store

### Build the AAB:
```bash
./gradlew bundleRelease
```

Output: `app/build/outputs/bundle/release/app-release.aab`

## Verification Checklist

- [ ] assetlinks.json is accessible at https://crivia2.vercel.app/.well-known/assetlinks.json
- [ ] SHA-256 fingerprint in assetlinks.json matches your APK's certificate
- [ ] Package name is exactly `com.daskoon.crivia`
- [ ] Old app version is completely uninstalled
- [ ] New APK is signed with the correct keystore
- [ ] Android System WebView is updated on your device
- [ ] Chrome browser is updated on your device

## Testing the Fix

After making changes:

1. Uninstall the app completely
2. Clear Chrome data (optional but helpful)
3. Install the new APK
4. Wait 10-20 seconds after opening (Android verifies in background)
5. Close and reopen the app if needed

## Need More Help?

If you're still having issues, please provide:
1. The SHA-256 fingerprint from your APK
2. The contents of your current assetlinks.json
3. The URL where assetlinks.json is hosted
4. Whether you're using debug or release builds

---

**The key is: The SHA-256 fingerprint in assetlinks.json MUST match your APK's signing certificate!**
