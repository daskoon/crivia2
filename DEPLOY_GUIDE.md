# Final Step: Deploy the Corrected `assetlinks.json`

You are one step away from fixing the deep link issue. The `assetlinks.json` file in your project is now correct. You just need to get it onto your live website.

This process will make sure that when a user clicks a link to your website (`crivia.vercel.app`), your Android app will open automatically.

### The Goal

You need to make the content of the corrected `assetlinks.json` file available at the following URL:
**`https://crivia.vercel.app/.well-known/assetlinks.json`**

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

### What Happens Next?

Once you have verified that the file is live at that URL, the deep linking issue should resolve itself. It may take Google some time (up to 24 hours in some cases) to re-crawl your site and confirm the association, but the technical setup will be complete.

Your testing link should start working, and your users on Android 12+ will be able to go directly to your app from web links.
