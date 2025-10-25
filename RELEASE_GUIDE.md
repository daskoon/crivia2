# How to Build, Sign, and Release Your App

This guide provides all the steps needed to create a signed AAB, verify your domain, and prepare for Google Play submission.

## Step 1: Create Your Keystore File

This file is your app's digital signature. **Keep it safe and back it up. If you lose it, you can never update your app again.**

1.  **Open your terminal or command prompt.**
2.  **Navigate to the root directory of this project.**
3.  **Run this command:**

    ```bash
    keytool -genkey -v -keystore crivia-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias crivia
    ```

4.  **You will be prompted for a password and other details.**
    *   Create a strong password and remember it.
    *   When asked for a "key password," press Enter to use the same one.
    *   This will create a `crivia-release-key.jks` file in your project.

## Step 2: Get Your SHA-256 Fingerprint

Google needs this fingerprint to verify your app owns your website.

1.  **Run the following command in your terminal:**

    ```bash
    keytool -list -v -keystore crivia-release-key.jks -alias crivia
    ```

2.  **Enter your keystore password when prompted.**
3.  **Find the `SHA256` fingerprint in the output and copy it.** It will look like this:

    `SHA256: D3:D6:7D:EA:19:25:E9:0F:FA:79:A3:51:59:D8:70:49:88:3D:54:A7:B9:68:01:83:DA:E4:D5:13:33:67:87:F1`

## Step 3: Update the `assetlinks.json` File

1.  **Open the `assetlinks.json` file** in the project's root directory.
2.  **Replace the existing SHA-256 fingerprint** with the one you copied in the previous step. The file should look like this (but with your fingerprint):

    ```json
    [{
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "com.daskoon.crivia",
        "sha256_cert_fingerprints": [
          "YOUR_SHA256_FINGERPRINT_HERE"
        ]
      }
    }]
    ```

## Step 4: Create the `keystore.properties` File

This file securely provides your passwords to the build process. It is already in `.gitignore`, so it will not be committed.

1.  **In the root directory of your project, create a new file named `keystore.properties`.**
2.  **Add the following content, replacing the placeholders with your actual credentials:**

    ```properties
    STORE_FILE=crivia-release-key.jks
    STORE_PASSWORD=YOUR_KEYSTORE_PASSWORD
    KEY_ALIAS=crivia
    KEY_PASSWORD=YOUR_KEY_PASSWORD
    ```

    *   `YOUR_KEYSTORE_PASSWORD`: The password you created in Step 1.
    *   `YOUR_KEY_PASSWORD`: The key password (the same as the keystore password).

## Step 5: Build the Signed AAB

Now you can build the app.

1.  **Open your terminal in the project's root directory.**
2.  **Run the following command:**

    *   On macOS or Linux: `./gradlew bundleRelease`
    *   On Windows: `gradlew.bat bundleRelease`

3.  Your signed AAB file will be located at `app/build/outputs/bundle/release/app-release.aab`.

## Step 6: Deploy `assetlinks.json` to Your Website

For deep linking to work, the `assetlinks.json` file must be accessible on your website at the following URL: `https://crivia.vercel.app/.well-known/assetlinks.json`

### How to Do It (Using Vercel)

Since your site is hosted on Vercel, the easiest way to do this is to add a "rewrite" rule. This tells Vercel to show the content of your `assetlinks.json` file whenever someone visits the special `.well-known` URL.

#### Step 1: Create a `vercel.json` Configuration File

1.  In the main root folder of your project, create a new file named **`vercel.json`**.

#### Step 2: Add the Rewrite Rule

1.  Open the new `vercel.json` file.
2.  Copy and paste the following code into it **exactly as it is**:

    ```json
    {
      "rewrites": [
        {
          "source": "/.well-known/assetlinks.json",
          "destination": "/assetlinks.json"
        }
      ]
    }
    ```

### Step 3: Deploy Your Website Again

1.  Commit and push these new changes (`assetlinks.json` and `vercel.json`) to your GitHub repository.
2.  Vercel will automatically detect the changes and start a new deployment.
3.  Wait for the deployment to finish.

### Step 4: Verify the File is Live

1.  Once the deployment is complete, open this link in your browser:
    **`https://crivia.vercel.app/.well-known/assetlinks.json`**
2.  You should see the text of the `assetlinks.json` file (with your correct fingerprint in it). You should **not** see a 404 "Not Found" error.

## You're Done!

You can now upload the `app-release.aab` file to the Google Play Console.
