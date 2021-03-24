const html = document.querySelector('html');
const classes = ['slide-left', 'slide-right', 'slide-up'];
const slides = document.querySelectorAll('.slide');


function fadeOutPage() {
    classes.map(className => {
        document.querySelectorAll('.' + className + '-inactive').forEach(transition => {
            transition.classList.add('slide', className);
        })
    })
}

function fadeInPage() {
    return new Promise(resolve => {
        html.classList.add('overflow-x-hidden');

        classes.map(className => {
            document.querySelectorAll('.' + className).forEach(transition => {
                transition.classList.add(className + '-inactive');
            });
        })
        slides.forEach(transition => {
            classes.map(className => transition.classList.remove(className));
            setTimeout(() => {
                html.classList.remove('overflow-x-hidden');
            }, 150);
        })
        resolve();
    })
}

function initProjectLinkTransitions() {
    document.querySelectorAll('a').forEach(link => {
        // Make sure the link is local and isn't an image or document.
        if (link.href.includes(window.location.origin) && !link.href.includes('/images/') && !link.href.includes('/documents/')) {
            link.addEventListener('click', event => {
                event.preventDefault();
                fadeOutPage();
                setTimeout(() => window.location.href = link.href, 150)
            })
        }
    })
}

function initFilterFormData() {
    let tags = [];
    document.querySelectorAll('.technology-link').forEach(item => {
        tags.push(item.innerText)
    })

    tags = [...new Set(tags)].sort();
    tags.forEach(tag => {
        const el = document.createElement('option');
        el.value = tag;
        document.getElementById('projects').appendChild(el)
    })
}

function filterProjects() {
    const word = document.getElementById('project').value;
    const clearFilterButton = document.querySelector('.filter__clear-button')
    document.querySelectorAll('.project-link').forEach(link => {
        link.classList.remove('filtered');
        if (!link.innerText.toLowerCase().includes(word.toLowerCase())) {
            link.classList.add('filtered');
        }
    })
    if (word) {
        window.history.replaceState(null, document.title, window.location.origin + '?filter=' + word);
        clearFilterButton.classList.remove('non-interactive');
    } else {
        window.history.replaceState(null, document.title, window.location.origin)
        clearFilterButton.classList.add('non-interactive');
    }

    const noResults = document.querySelector('.no-results');
    if (document.querySelector('.project-links').innerText === '') {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.remove('add');
    }
}

function removeProjectFilter() {
    document.getElementById('project').value = null;
    filterProjects();
}

function bindSearchQueryToInput() {
    const filterParam = new URLSearchParams(window.location.search).get('filter');

    if (filterParam) {
        document.getElementById('project').value = filterParam;
        filterProjects();
    }
}

window.addEventListener('load', () => {
    fadeInPage().then(() => {
        initProjectLinkTransitions();
        if (window.location.pathname === '/') {
            initFilterFormData();
            bindSearchQueryToInput();
        }
    });
})