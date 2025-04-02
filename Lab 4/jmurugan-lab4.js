// Joel Nithish Kumar Murugan
// ITMD 541-01 Graduate Student

(function () {
    // 1. Update hero headline
    const heroHeading = document.querySelector('#hero h1');
    if (heroHeading) heroHeading.textContent = 'Uplift Your Brand with Stellar Marketing';

    // 2. Update hero subheadline with formatting
    const heroSub = document.querySelector('#hero p');
    if (heroSub) {
        heroSub.innerHTML = '<strong><em>Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.</em></strong>';
    }

    // 3. Change hero background image
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'url(https://picsum.photos/id/683/1280/720)';
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    }

    // 4. Update nav bar color to match footer
    const navBar = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (navBar && footer) {
        const footerColor = getComputedStyle(footer).backgroundColor;
        navBar.style.backgroundColor = footerColor;
    }

    // 5. Remove Get Started CTA
    const ctaButton = document.querySelector('#hero a');
    if (ctaButton) ctaButton.remove();

    // 6. Center align section headings
    const sectionHeadings = document.querySelectorAll('#services h2, #solutions h2, #contact h2');
    sectionHeadings.forEach(heading => {
        heading.style.textAlign = 'center';
        heading.style.marginTop = '20px';
        heading.style.marginBottom = '20px';
    });

    // 7. Change service icons color
    const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
    serviceIcons.forEach(icon => {
        icon.style.color = '#47C714';
        icon.style.fontSize = '3rem';
    });

    // 8. Update digital marketing icon
    const digitalIcon = document.querySelector('[data-icon="digital"]');
    if (digitalIcon) digitalIcon.textContent = 'ads_click';

    // 9. Update solutions grid layout for large screens
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        @media (min-width: 1024px) {
            .grid[data-section="product_cards"] {
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 2rem !important;
            }
        }
    `;
    document.head.appendChild(styleTag);

    // 10. Update musicians image
    const musicianCardImg = document.querySelector('.product_card:last-child img');
    if (musicianCardImg) {
        musicianCardImg.src = 'https://picsum.photos/id/453/400/300';
        musicianCardImg.alt = 'Updated Musicians Image';
    }

    // Graduate Requirement: Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission to broken URL

            const nameInput = this.querySelector('#name');
            const emailInput = this.querySelector('#email');

            if (nameInput.value.trim() && emailInput.value.trim()) {
                alert(`Thank you, ${nameInput.value.trim()}! We will be in touch with you shortly at ${emailInput.value.trim()}.`);
                this.reset(); // Clear the form after successful submission
            } else {
                alert('Please provide a name and email.');
            }
        });
    }

    console.log('All page modifications applied successfully!');
})();
