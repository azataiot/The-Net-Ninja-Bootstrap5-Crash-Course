<!-- JavaScript to generate table of contents -->

// Get the table of contents element
const toc = document.getElementById('toc');

// Find all h2, h3, and h4 elements in the document
const headings = document.querySelectorAll('h2, h3, h4');

// Loop through the headings and add them to the table of contents
for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];

    // Create a link to the heading
    const link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = '#' + 'section-' + i;

    // Add the link to the table of contents
    // HTML
    toc.appendChild(link);

    // Add a class of "active" to the current section in the table of contents
    if (heading.classList.contains('active')) {
        link.classList.add('active');
    }

    // Indent subsections
    // CSS
    if (heading.tagName === 'H3') {
        link.style.marginLeft = '20px';
    } else if (heading.tagName === 'H4') {
        link.style.marginLeft = '40px';
    }

    // Add the heading id as an anchor to the heading itself
    heading.id = 'section-' + i;
}

// Highlight the active section in the table of contents
window.addEventListener('scroll', highlightActiveSection);

function highlightActiveSection() {
    // Get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

// Find the current section by looking for the heading that is closest to
// the current scroll position
    let currentSection = null;
    for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const headingPosition = heading.offsetTop;

        if (headingPosition <= scrollPosition) {
            currentSection = heading;
        } else {
            break;
        }
    }

    // Remove the "active" class from all links in the table of contents
    const links = toc.getElementsByTagName('a');
    for (let j = 0; j < links.length; j++) {
        links[j].classList.remove('active');
    }

    // Add the "active" class to the link for the current section
    if (currentSection) {
        const link = toc.querySelector('a[href="#' + currentSection.id + '"]');
        if (link) {
            link.classList.add('active');
        }
    }
}