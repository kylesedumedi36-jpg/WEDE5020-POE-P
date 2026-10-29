# Ora's Bakery Website — WEDE5020

**Student number:** ST10337762  
**Module:** WEDE5020 — Web Development (Introduction)  
**Project:** Ora's Bakery

## 1. Project overview

This website is for a small bakery called Ora's Bakery. It gives visitors information about the bakery, lists its products, displays a gallery area, and lets visitors make product enquiries or prepare a general contact email.

The website builds on the HTML pages from Parts 1 and 2. The old pages used inline formatting and HTML tables for layout. In this version, the pages use semantic HTML, one external CSS file, and one JavaScript file so that the code is easier to read and maintain.

> **Before submission:** The phone number, email address and address shown on the site are sample details from the earlier project. Confirm and replace them with approved information. The `.example` email address is not a real inbox.

## 2. Pages and features

- `index.html` — home page and links to the main sections.
- `about.html` — bakery overview, mission and vision.
- `menu.html` — product categories and a live search filter.
- `gallery.html` — gallery cards and a lightbox dialog. Add real, legally usable photos to the `images` folder.
- `enquiry.html` — product enquiry form with JavaScript validation and a response summary.
- `contact.html` — contact form with validation that prepares a message in the visitor's default email application.
- `css/style.css` — shared colours, typography, layout and responsive rules.
- `js/script.js` — mobile navigation, menu search, gallery dialog and form behaviour.
- `robots.txt` and `sitemap.xml` — basic search engine crawler files.

## 3. How to run the website

1. Extract the ZIP file.
2. Open `index.html` in a modern browser.
3. Use the navigation to open each page and test the forms and search.
4. For the contact form email step, a default email application must be configured. This is a front-end student project; it does not send email from a server.
5. Add image files named `cake.jpg`, `pastries.jpg`, `bread.jpg` and `drinks.jpg` to the `images` folder. Only use photos you created or have permission to use.

## 4. Part 3 functionality

### JavaScript
- The mobile navigation button opens and closes the navigation links.
- The menu search hides items that do not match the search term.
- The gallery opens a larger-image dialog when an image is available.
- The enquiry form checks the name, email, product category and quantity, then displays a summary.
- The contact form checks the user's details and prepares an email using `mailto:`.

### Form limitations
Client-side validation helps users correct simple mistakes, but it is not a secure server-side check. The enquiry response is not an order confirmation. The contact form does not send an email automatically; it opens the user's email application. A real production website would need a working email service or back-end form handler.

### Search engine optimisation (SEO)
Each HTML page includes a unique title, a meta description, keywords, a viewport setting and meaningful headings. Images should use descriptive file names and accurate alt text when actual photos are added. Internal links connect the pages. `robots.txt` and `sitemap.xml` are included, but their example domain must be replaced after deployment.

## 5. Responsive design

The shared CSS uses CSS Grid and Flexbox for page layout. Media queries change the card grids, navigation and form layout on tablet and mobile screens. Test the pages in a browser at desktop, tablet and mobile widths, and capture screenshots for your final submission.

## 6. File structure

```text
ST10337762_WEDE5020_Part3/
├── index.html
├── about.html
├── menu.html
├── gallery.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── README.txt
├── robots.txt
├── sitemap.xml
└── README.md
```

## 7. Changelog

### Part 1 — foundation review
- Kept the Ora's Bakery storyline and the five original core pages.
- Used semantic elements such as `header`, `nav`, `main`, `section` and `footer` to make page structure clearer.
- Standardised the navigation and added a separate enquiry page for the Part 3 requirements.
- Added clearer comments in the JavaScript and a project folder structure.

### Part 2 — styling and responsive design
- Replaced old presentation attributes such as `bgcolor`, `<font>`, and layout tables with an external stylesheet.
- Applied a consistent bakery colour scheme, readable typography, spacing and reusable card styles.
- Added tablet and mobile breakpoints, a collapsible mobile navigation menu and visible keyboard focus styles.
- Added the CSS and layout notes to this README.

### Part 3 — functionality and SEO
- Added JavaScript for menu search, a gallery lightbox, mobile navigation, enquiry responses and contact-form validation.
- Added individual page titles and meta descriptions, descriptive image guidance, `robots.txt` and `sitemap.xml`.
- Added an enquiry page and updated the contact page to prepare an email after validation.
- Documented the limitations of the demo forms and the details that must be replaced before deployment.

## 8. References (Harvard style)

Google (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 29 October 2026).

Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 29 October 2026).

Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 29 October 2026).

Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 29 October 2026).

Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 29 October 2026).

## 9. AI use disclosure reminder

The assignment brief says that AI use must be disclosed according to the IIE guidelines, including in-text acknowledgement, a full reference and an AI disclosure annexure with screenshots. Follow your lecturer's required format, describe the assistance actually used, and review and understand every part of the code before submitting. Do not claim that you independently wrote or tested work that you have not reviewed.


### Gallery update
The gallery now has four selectable categories: Cakes, Pastries, Bread and Drinks. Each category opens a page view with five photos, and selecting a photo opens a larger preview. Photos are served from ISO Republic royalty-free image collections and therefore require an internet connection. If the site is assessed offline, download licensed copies and replace the URLs in `js/script.js` with local image paths. The footer email is `info@orasbakery.co.za`.
