# Ora's Bakery Website — GitHub Pages Ready

This package contains the complete Ora's Bakery student website. The styling and JavaScript are embedded in each HTML page as a deployment safeguard, so the pages keep their appearance and interactive features even if the `css/` or `js/` folders are accidentally not published. The original `css/style.css` and `js/script.js` files are also included for easy maintenance.

## Files
- `index.html` — home page (the GitHub Pages entry page)
- `about.html` — about page
- `menu.html` — menu with search/filter
- `gallery.html` — gallery with Cakes, Pastries, Bread and Drinks categories; five photos per category and a photo lightbox
- `contact.html` — contact page
- `enquiry.html` — enquiry form
- `css/style.css` and `js/script.js` — standalone copies of the styling and scripts
- `Ozas_Bakery_Site_Map.docx` — project site map

Contact email is `info@orasbakery.co.za`.

## Deploy to GitHub Pages
1. Download and extract this ZIP on your computer.
2. Open the GitHub repository that owns your website.
3. Open the repository's published source folder. For a project site like `https://USERNAME.github.io/REPOSITORY/`, the files must be in the repository root if Pages is set to deploy from `/(root)`, or inside the selected folder if Pages is set to deploy from `/docs`.
4. Upload **the contents of this extracted folder**, not the ZIP itself and not an extra enclosing folder. Make sure `index.html` is directly in the selected publishing folder.
5. Commit the changes.
6. In the repository, open **Settings → Pages** and confirm the correct branch and publishing folder (usually `main` and `/(root)`). Save if you change it.
7. Wait for the Pages deployment to finish, then open the site and press `Ctrl + F5` to refresh without cached files.

## If the old plain-text version still appears
- Confirm the URL is the correct repository's GitHub Pages URL.
- Confirm the latest commit includes the updated `index.html`.
- Confirm `index.html` is in the exact folder selected under **Settings → Pages**.
- In the repository's **Actions** tab, check that the Pages deployment completed successfully.

## Images
Gallery images are loaded from the image provider's public URLs and therefore require an internet connection. If the provider changes or blocks an image, that particular image may not load; this is separate from the CSS/deployment fix.
