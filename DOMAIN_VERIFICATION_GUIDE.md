# Domain Verification Guide for Your TWA

## What You Need to Do:

Your app needs to prove it owns the website `crivia2.vercel.app`. This is done with a special file.

---

## Step 1: Get Your SHA-256 Fingerprint

After you create your keystore file (see CREATE_KEYSTORE.md), run this command:

### On Windows (Command Prompt):
```
keytool -list -v -keystore crivia-release-key.jks -alias crivia
```

### On Mac/Linux (Terminal):
```
keytool -list -v -keystore crivia-release-key.jks -alias crivia
```

It will ask for your keystore password.

### What to look for:
You'll see a bunch of text. Find the line that says:
```
SHA256: AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56
```

Copy EVERYTHING after "SHA256: " (including the colons).

---

## Step 2: Update assetlinks.json

1. Open the `assetlinks.json` file I created
2. Replace `REPLACE_WITH_YOUR_SHA256_FINGERPRINT` with your actual fingerprint
3. Keep the colons (:) in the fingerprint
4. It should look like this:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.daskoon.crivia",
    "sha256_cert_fingerprints": [
      "AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56"
    ]
  }
}]
```

---

## Step 3: Add to Your Vercel Website

### Option A: If you have the source code for crivia2.vercel.app:

1. In your Vercel project folder, create this folder structure:
   ```
   public/.well-known/
   ```

2. Put `assetlinks.json` inside the `.well-known` folder

3. Your folder structure should look like:
   ```
   your-project/
   ├── public/
   │   └── .well-known/
   │       └── assetlinks.json
   ├── index.html
   └── other files...
   ```

4. Commit and push to deploy

### Option B: If you don't have access to the source:

You'll need to add this file through your Vercel dashboard or Git repository.

---

## Step 4: Verify It Works

After deploying, visit this URL in your browser:
```
https://crivia2.vercel.app/.well-known/assetlinks.json
```

You should see your JSON file with your SHA-256 fingerprint.

---

## Common Issues:

### "404 Not Found" when visiting the URL
- Make sure the folder is called `.well-known` (with a dot at the start)
- Make sure the file is called `assetlinks.json` (no .txt extension)
- Make sure it's deployed to Vercel

### "File shows but app doesn't verify"
- Double-check the SHA-256 fingerprint is correct
- Make sure there are no extra spaces or quotes
- The package name must be exactly: `com.daskoon.crivia`

---

## Need Help?

Just tell me:
1. What step you're on
2. What error you're seeing (if any)

And I'll help you fix it!
