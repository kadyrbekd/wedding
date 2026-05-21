/**
 * Wedding RSVP receiver — Google Apps Script
 *
 * This script receives RSVP form submissions from the wedding website
 * and appends them as rows in the connected Google Sheet.
 *
 * Setup steps are in SHEETS_SETUP.md. In short:
 * 1. Create a Google Sheet with headers:
 *    Timestamp | Name | Phone | Attending | Language
 * 2. Extensions -> Apps Script
 * 3. Replace the default code with everything in this file
 * 4. Deploy -> New deployment -> type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL and paste it into index.html (CONFIG.sheets_url)
 *
 * If you already deployed an older version (without "Language"):
 * just add the new column "Language" in column E. The script will
 * start filling it from the next submission. Then redeploy a new
 * version of the script (Deploy -> Manage deployments -> pencil ->
 * Version: New version -> Deploy).
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Data comes URL-encoded from the website
    const name     = (e.parameter.name     || '').toString().slice(0, 200);
    const phone    = (e.parameter.phone    || '').toString().slice(0, 50);
    const attend   = (e.parameter.attend   || '').toString().slice(0, 50);
    const language = (e.parameter.language || '').toString().slice(0, 8);
    const ts       = e.parameter.timestamp ? new Date(e.parameter.timestamp) : new Date();

    sheet.appendRow([ts, name, phone, attend, language]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: lets you visit the Web app URL in a browser to confirm it's live.
function doGet() {
  return ContentService
    .createTextOutput('RSVP endpoint is live ♥')
    .setMimeType(ContentService.MimeType.TEXT);
}