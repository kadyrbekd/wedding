# Wedding Invitation — How to Use

A single-file wedding invitation website. Everything is in `index.html`.

---

## 1. Customize content

Open `index.html` in any text editor (VS Code, Notepad, Sublime…).
Scroll to the bottom and find this block:

```html
<script id="config">
const CONFIG = { ... }
</script>
```

Edit the values inside `CONFIG`:

| Field | What it is |
|---|---|
| `bride`, `groom` | Your names |
| `weddingDate` | Date used by the countdown — format `YYYY-MM-DDTHH:MM:SS` |
| `hero_eyebrow`, `hero_date` | Small caption + visible date line |
| `greeting_audience`, `greeting_body` | The welcome text |
| `hero_photo` | Path or URL of the couple photo |
| `program` | List of `{ time, desc }` rows for the day's schedule |
| `venue_name`, `venue_address` | Venue text |
| `venue_map_url` | Link to Google Maps / 2GIS / Yandex Maps |
| `whatsapp_number` | Where RSVP messages get sent (format: `77001234567`, no `+` or spaces) |
| `music` | Path or URL of the `.mp3` to play |
| `autoplay` | `true` or `false` — most browsers will block autoplay until visitor taps once (a welcome overlay handles that automatically) |

## 2. Replace photos and music

The easiest way: put your files **in the same folder as `index.html`**, then write just the filename in the config.

```
my-wedding/
├── index.html
├── couple.jpg     ← your photo
└── song.mp3       ← your music
```

Then in `CONFIG`:

```js
hero_photo: "couple.jpg",
music:      "song.mp3",
```

You can also use full URLs (e.g. links to images hosted elsewhere).

## 3. Map link

Open Google Maps or 2GIS, search your venue, hit **Share → Copy link**, paste it into `venue_map_url`.

---

## 4. Free hosting on GitHub Pages

1. Create a GitHub account at https://github.com (free).
2. Click **New repository**. Give it any name, e.g. `wedding`.
   Make it **Public**. Tick **Add a README**. Click **Create**.
3. On the repo page click **Add file → Upload files**. Drag in:
   - `index.html`
   - your photo(s)
   - your `.mp3`

   Click **Commit changes**.
4. Go to **Settings → Pages** (left sidebar).
5. Under **Source**, choose **Deploy from a branch**.
6. Pick the branch `main` and the folder `/ (root)`. Click **Save**.
7. Wait ~1 minute. The page will show a link like:
   `https://YOUR_USERNAME.github.io/wedding/`

That link is your invitation. Share it on WhatsApp, in messages, anywhere.

### Updating later

Open the file on GitHub, click the pencil ✏️ icon, edit, then **Commit changes**. The site updates within a minute.

### Optional: custom domain

You can buy a domain (e.g. `aida-and-arman.com`) and point it at GitHub Pages — instructions are at https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## Tips

- **Photo size**: 800–1200 px wide is plenty. Bigger photos make the page slow.
- **Music length**: Use a short instrumental loop (~1–3 min). The page loops it automatically.
- **Mobile**: The page is mobile-first — your guests will mostly open it on phones, and it looks correct there.
- **Browser autoplay**: If music doesn't auto-start, the visitor sees a small "Tap to enter" overlay. One tap and music plays. This is a browser rule, not a bug.

Enjoy your day! ♥
