# How to Build Your Signed AAB for Google Play

Follow these steps carefully to create a signed AAB file that you can upload to the Google Play Console.

## Step 1: Create Your Keystore File

You need a digital signature to prove the app is yours. This is stored in a `.jks` (Java KeyStore) file.

1.  **Open your terminal or command prompt.**
2.  **Navigate to the root directory of this project.**
3.  **Run the following command:**

    ```bash
    keytool -genkey -v -keystore crivia-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias crivia
    ```

4.  **You will be asked for a password and some other information.**
    *   **Create a strong password** and remember it. You will need it in the next step.
    *   For the "key password," you can just press Enter to use the same password as the keystore.
    *   Fill out the rest of the information as prompted.

    This will create a file named `crivia-release-key.jks` in your project's root directory.

    **IMPORTANT:** Back up this `crivia-release-key.jks` file somewhere safe. If you lose it, you will **never** be able to update your app again.

## Step 2: Create the `keystore.properties` File

The build process needs to know your keystore's password and alias to sign the app. You'll store this information in a file that is **never** checked into version control (we've already added it to `.gitignore`).

1.  **In the root directory of your project, create a new file named `keystore.properties`.**
2.  **Add the following content to this file, replacing the placeholders with your actual credentials:**

    ```properties
    STORE_FILE=crivia-release-key.jks
    STORE_PASSWORD=YOUR_KEYSTORE_PASSWORD
    KEY_ALIAS=crivia
    KEY_PASSWORD=YOUR_KEY_PASSWORD
    ```

    *   `YOUR_KEYSTORE_PASSWORD`: The password you created in Step 1.
    *   `YOUR_KEY_PASSWORD`: The key password you created (if you pressed Enter, it's the same as the keystore password).

## Step 3: Build the Signed AAB

Now you're ready to build the app!

1.  **Open your terminal or command prompt in the project's root directory.**
2.  **Run the following command:**

    *   On macOS or Linux:
        ```bash
        ./gradlew bundleRelease
        ```
    *   On Windows:
        ```bash
        gradlew.bat bundleRelease
        ```

3.  **Once the build is complete, you will find your signed AAB file at:**

    `app/build/outputs/bundle/release/app-release.aab`

## You're Done!

You can now upload this `app-release.aab` file to the Google Play Console.
