# Connect RSVP form to Google Sheets

This lets you see every RSVP in real time in a Google Sheet on your phone or laptop. Free, no database, no servers.

It takes about 5 minutes.

---

## Step 1 — Create the Google Sheet

1. Go to https://sheets.google.com and click **Blank**.
2. Name it something like `Wedding RSVPs`.
3. In **row 1**, add these four headers (one per cell):

   | A | B | C | D |
   |---|---|---|---|
   | Timestamp | Name | Phone | Attending |

4. Make row 1 bold if you like — but the headers themselves matter.

---

## Step 2 — Open Apps Script

1. In the Sheet, click **Extensions → Apps Script**.
2. A new tab opens with a code editor. Delete whatever code is there.
3. Open the file `apps-script.gs` (the one I gave you) and **copy everything** in it.
4. Paste it into the Apps Script editor.
5. Click the **save** icon (💾) at the top. Name the project anything, e.g. `Wedding RSVP`.

---

## Step 3 — Deploy as a Web App

1. At the top right of Apps Script, click **Deploy → New deployment**.
2. Click the gear ⚙️ next to "Select type" and pick **Web app**.
3. Fill in:
   - **Description**: `Wedding RSVP` (anything)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone**

   > "Anyone" sounds scary — but the URL is random and long. Only people who have it (your script) can write to it. Standard practice for Sheets forms.

4. Click **Deploy**.
5. Google asks for permissions. Click **Authorize access** → pick your Google account → "Advanced" → "Go to (project) (unsafe)" → **Allow**.

   > Google shows the "unsafe" warning for any script you make yourself. It's not unsafe — it's just that your script isn't reviewed by Google. Your script only writes to your own sheet.

6. You'll get a **Web app URL** that looks like:
   ```
   https://script.google.com/macros/s/AKfycbx……/exec
   ```
   **Copy this URL.**

---

## Step 4 — Paste the URL into your website

1. Open `index.html` in a text editor.
2. Find this block (near the bottom):

   ```js
   sheets_url: "",
   ```

3. Paste your URL between the quotes:

   ```js
   sheets_url: "https://script.google.com/macros/s/AKfycbx……/exec",
   ```

4. Save the file. If your site is already on GitHub Pages, upload the new `index.html` — changes go live in ~30 seconds.

---

## Step 5 — Test it!

1. Open your invitation site.
2. Fill out the RSVP form and submit.
3. Open your Google Sheet. A new row should appear immediately with the response.

If nothing appears:
- Re-check the URL is pasted correctly (no extra spaces).
- Open the Web app URL directly in a browser — you should see `RSVP endpoint is live ♥`. If you see an error, redo Step 3.
- Make sure the headers in row 1 of the Sheet exist.

---

## Updating the script later

If you ever change the Apps Script code (e.g. add new fields), you need to **deploy a new version** for the changes to take effect:

- **Deploy → Manage deployments → pencil icon → Version: New version → Deploy**

The same URL keeps working, no need to re-paste into your site.

---

## Bonus: Get notified for each RSVP

In the Google Sheet:
- **Tools → Notification settings → Edit notifications**
- Tick **Any changes are made** + **Email — right away**

You'll get an email every time someone RSVPs.
