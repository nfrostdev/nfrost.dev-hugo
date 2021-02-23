const classes = ['slide-left', 'slide-right', 'slide-up']

function initProjectLinkTransitions() {
    document.querySelectorAll('a').forEach(link => {
        // Make sure the link is local and isn't an image or document.
        if (link.href.includes(window.location.origin) && !link.href.includes('/images/') && !link.href.includes('/documents/')) {
            link.addEventListener('click', event => {
                event.preventDefault();

                classes.forEach(className => {
                    document.querySelectorAll('.' + className + '-inactive').forEach(transition => {
                        transition.classList.add('slide', className);
                    })
                })

                setTimeout(() => window.location.href = link.href, 350)
            })
        }
    })
}

initProjectLinkTransitions();

function fadeInPage() {
    classes.forEach(className => {
        document.querySelectorAll('.' + className).forEach(transition => {
            transition.classList.add(className + '-inactive');
        });
    })
    document.querySelectorAll('.slide').forEach(transition => {
        transition.classList.remove('slide-left');
        transition.classList.remove('slide-right');
        transition.classList.remove('slide-up');
        setTimeout(() => transition.classList.remove('slide'), 350);
    })
}

fadeInPage();