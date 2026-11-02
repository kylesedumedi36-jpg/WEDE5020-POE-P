// Wait until the page has loaded before adding the button actions.
document.addEventListener("DOMContentLoaded", function () {
    setupMobileMenu();
    setupMenuSearch();
    setupGallery();
    setupEnquiryForm();
    setupContactForm();
});

// Open and close the navigation menu on smaller screens.
function setupMobileMenu() {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#main-nav");

    if (!button || !nav) return;

    button.addEventListener("click", function () {
        const menuIsOpen = nav.classList.toggle("is-open");
        button.setAttribute("aria-expanded", menuIsOpen);
    });
}

// Search the menu and hide categories that do not match.
function setupMenuSearch() {
    const searchBox = document.querySelector("#menu-search");
    if (!searchBox) return;

    searchBox.addEventListener("input", function () {
        const searchWord = searchBox.value.toLowerCase().trim();
        const cards = document.querySelectorAll("[data-menu-card]");
        let itemCount = 0;

        cards.forEach(function (card) {
            const matches = card.textContent.toLowerCase().includes(searchWord);
            card.hidden = !matches;

            if (matches) {
                itemCount += card.querySelectorAll("[data-item]").length;
            }
        });

        document.querySelector("#search-status").textContent = itemCount + " menu item(s) found.";
        document.querySelector("#no-results").hidden = itemCount !== 0;
    });
}

// These are the photographs used in the gallery and on the order page.
const bakeryPhotos = {
    bread: [
        "https://images.unsplash.com/photo-1723475762965-7e4fe36ec085?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
    ],
    cake: [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=1000&q=85"
    ],
    pastry: [
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=1000&q=85"
    ],
    treats: [
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=1000&q=85"
    ],
    drinks: [
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1542108899561-eb215cf20d9f?auto=format&fit=crop&w=1000&q=85"
    ]
};

// Information used to build the gallery page.
const galleryCategories = {
    bread: ["Bread & loaves", "Crusty loaves and everyday favourites", bakeryPhotos.bread],
    pastries: ["Pastry counter", "Golden layers and sweet treats", bakeryPhotos.pastry],
    cakes: ["Celebration cakes", "Cakes for birthdays and special days", bakeryPhotos.cake],
    treats: ["Cookies & cupcakes", "Small treats for a sweet moment", bakeryPhotos.treats],
    coffee: ["Something to sip", "Coffee and warm drinks for a little break", bakeryPhotos.drinks]
};

// Show the gallery collections or the pictures inside one collection.
function setupGallery() {
    const grid = document.querySelector("#gallery-grid");
    if (!grid) return;

    const title = document.querySelector("#gallery-title");
    const description = document.querySelector("#gallery-description");
    const backButton = document.querySelector("#back-to-categories");
    const chosenCategory = new URLSearchParams(window.location.search).get("category");

    if (chosenCategory && galleryCategories[chosenCategory]) {
        const category = galleryCategories[chosenCategory];
        title.textContent = category[0];
        description.textContent = category[1];
        backButton.hidden = false;

        category[2].forEach(function (photo, index) {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "gallery-photo";
            card.dataset.lightbox = photo;
            card.dataset.caption = category[0] + " - view " + (index + 1);

            const picture = document.createElement("img");
            picture.src = photo;
            picture.alt = category[0] + " photograph " + (index + 1);
            picture.loading = "lazy";

            const caption = document.createElement("strong");
            caption.textContent = "View " + (index + 1);

            card.append(picture, caption);
            grid.appendChild(card);
        });
    } else {
        Object.keys(galleryCategories).forEach(function (key, index) {
            const category = galleryCategories[key];
            const link = document.createElement("a");
            link.className = "gallery-category";
            link.href = "gallery.html?category=" + key;

            const picture = document.createElement("img");
            picture.src = category[2][0];
            picture.alt = category[0];
            picture.loading = "lazy";

            const number = document.createElement("span");
            number.textContent = "0" + (index + 1);

            const heading = document.createElement("strong");
            heading.textContent = category[0];

            const note = document.createElement("small");
            note.textContent = category[1] + " ↗";

            link.append(picture, number, heading, note);
            grid.appendChild(link);
        });
    }

    setupGalleryLightbox();
}

// Open a larger version of a gallery picture when it is clicked.
function setupGalleryLightbox() {
    const dialog = document.querySelector("#lightbox");
    if (!dialog) return;

    const image = document.querySelector("#lightbox-image");
    const caption = document.querySelector("#lightbox-caption");
    const closeButton = document.querySelector(".lightbox-close");

    document.querySelectorAll("[data-lightbox]").forEach(function (button) {
        button.addEventListener("click", function () {
            image.src = button.dataset.lightbox;
            image.alt = button.dataset.caption;
            caption.textContent = button.dataset.caption;
            dialog.showModal();
        });
    });

    closeButton.addEventListener("click", function () {
        dialog.close();
    });

    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) dialog.close();
    });
}

// Match each product with three photographs for the order enquiry page.
const productPhotos = {
    "whole-wheat": ["bread", "Whole wheat bread"],
    "brown-bread": ["bread", "Brown bread"],
    "chocolate-cake": ["cake", "Chocolate cake"],
    "vanilla-cake": ["cake", "Vanilla cake"],
    "croissant": ["pastry", "Croissant"],
    "apple-danish": ["pastry", "Apple Danish"],
    "cookies": ["treats", "Chocolate chip cookies"],
    "red-velvet": ["treats", "Red velvet cupcake"],
    "coffee": ["drinks", "Coffee"],
    "hot-chocolate": ["drinks", "Hot chocolate"]
};

// Display three photos when a customer chooses a product.
function showProductPhotos(productName) {
    const preview = document.querySelector("#product-preview");
    if (!preview) return;

    if (!productPhotos[productName]) {
        preview.hidden = true;
        return;
    }

    const details = productPhotos[productName];
    const photos = bakeryPhotos[details[0]];
    document.querySelector("#preview-title").textContent = details[1];

    document.querySelector("#preview-image-one").src = photos[0];
    document.querySelector("#preview-image-two").src = photos[1];
    document.querySelector("#preview-image-three").src = photos[2];

    document.querySelector("#preview-image-one").alt = details[1] + " - first view";
    document.querySelector("#preview-image-two").alt = details[1] + " - second view";
    document.querySelector("#preview-image-three").alt = details[1] + " - third view";
    preview.hidden = false;
}

// Check the enquiry form and work out an estimated price.
function setupEnquiryForm() {
    const form = document.querySelector("#poe-enquiry-form");
    if (!form) return;

    const product = document.querySelector("#product-choice");
    const quantity = document.querySelector("#order-quantity");
    const result = document.querySelector("#poe-estimate");
    const requestedItem = new URLSearchParams(window.location.search).get("item");

    const menuChoices = {
        bread: "whole-wheat",
        cakes: "chocolate-cake",
        pastries: "croissant",
        cookies: "cookies",
        beverages: "coffee",
        drinks: "coffee"
    };

    if (menuChoices[requestedItem]) product.value = menuChoices[requestedItem];
    showProductPhotos(product.value);

    product.addEventListener("change", function () {
        showProductPhotos(product.value);
        result.hidden = true;
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#customer-name");
        const email = document.querySelector("#customer-email");
        const fields = [name, email, product, quantity];
        let formIsValid = true;

        fields.forEach(function (field) {
            field.removeAttribute("aria-invalid");
        });

        if (name.value.trim().length < 2) {
            name.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            email.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (!product.value) {
            product.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        const amount = Number(quantity.value);
        if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
            quantity.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (!formIsValid) {
            result.hidden = true;
            form.querySelector("[aria-invalid='true']").focus();
            return;
        }

        const selectedOption = product.options[product.selectedIndex];
        const price = Number(selectedOption.dataset.price);
        const total = price * amount;
        const money = new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR",
            maximumFractionDigits: 0
        });

        result.textContent = "Thank you, " + name.value.trim() + ". Your estimated total for " +
            amount + " item(s) is " + money.format(total) +
            ". This is an estimate only. The bakery must confirm availability and the final price.";
        result.hidden = false;
    });
}

// Check the contact form and prepare an email for the customer.
function setupContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.elements.name;
        const email = form.elements.email;
        const type = form.elements.messageType;
        const message = form.elements.message;
        const fields = [name, email, type, message];
        let formIsValid = true;

        fields.forEach(function (field) {
            field.removeAttribute("aria-invalid");
        });

        if (name.value.trim().length < 2) {
            name.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            email.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (!type.value) {
            type.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        if (message.value.trim().length < 10) {
            message.setAttribute("aria-invalid", "true");
            formIsValid = false;
        }

        const result = document.querySelector("#contact-result");
        if (!formIsValid) {
            result.hidden = true;
            form.querySelector("[aria-invalid='true']").focus();
            return;
        }

        const subject = encodeURIComponent("Ora's Bakery - " + type.value);
        const body = encodeURIComponent("Name: " + name.value.trim() + "\nEmail: " + email.value.trim() +
            "\nMessage type: " + type.value + "\n\nMessage:\n" + message.value.trim());

        result.textContent = "Your message is ready. Your email application should open now.";
        result.hidden = false;
        window.location.href = "mailto:info@orasbakery.co.za?subject=" + subject + "&body=" + body;
    });
}
