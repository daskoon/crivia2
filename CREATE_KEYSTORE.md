# Step-by-Step Guide to Build Your AAB

## Step 1: Create a Keystore File

A keystore is like a secure password file that signs your app. Google Play requires this.

### On Windows:
1. Open Command Prompt
2. Run this command (replace the details with your info):
```
keytool -genkey -v -keystore crivia-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias crivia
```

### On Mac/Linux:
1. Open Terminal
2. Run this command:
```
keytool -genkey -v -keystore crivia-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias crivia
```

### What it will ask you:
- **Keystore password**: Create a strong password (you'll need this!)
- **Re-enter password**: Type it again
- **First and last name**: Your name or company name
- **Organizational unit**: Can be your team name or just press Enter
- **Organization**: Your company or personal name
- **City/Locality**: Your city
- **State/Province**: Your state
- **Country code**: Two letter code (US, UK, CA, etc.)
- **Key password**: Press Enter to use the same password as keystore

### Important:
- Save this file `crivia-release-key.jks` in a SAFE place (backup it!)
- Write down your passwords - if you lose them, you can NEVER update your app again!

---

## Step 2: Update Your Build Configuration

Once you have your keystore file:

1. Move `crivia-release-key.jks` to your project folder (same folder as `build.gradle`)

2. I've already set up the signing configuration. You just need to set these values:
   - Keystore file: `crivia-release-key.jks`
   - Keystore password: (the password you created)
   - Key alias: `crivia`
   - Key password: (same as keystore password)

The build.gradle file is already configured to look for a file called `keystore.jks`, so either:
- Rename your file to `keystore.jks`, OR
- Let me know and I'll update the build.gradle to use `crivia-release-key.jks`

---

## Step 3: Add Domain Verification File

This proves you own the website. You need to add a special file to your Vercel site.

### The file content:
I'll create an `assetlinks.json` file for you. You need to:

1. Create a folder called `.well-known` in your Vercel project
2. Put the `assetlinks.json` file inside it
3. Deploy to Vercel

The file needs to be accessible at:
`https://crivia.vercel.app/.well-known/assetlinks.json`

**I'll create this file for you in the next step!**

---

## After All Steps Are Done:

Run this command to build your AAB:
```
./gradlew bundleRelease
```

Or on Windows:
```
gradlew.bat bundleRelease
```

Your AAB file will be at:
`app/build/outputs/bundle/release/app-release.aab`

Upload this file to Google Play Console!

---

## Need Help?

If you get stuck on any step, just tell me which step and I'll help you through it!
