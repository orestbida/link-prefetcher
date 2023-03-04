import { getLinks, validLink } from './utils';

/**
 * Already prefetched links
 * @type {Object.<string, boolean>}
 */
export const prefetchedLinks = {};

/**
 * Prefetch all visible links
 * @param {NodeListOf<HTMLAnchorElement>} [links]
 * @param {string} [prefetchOnce]
 */
export const prefetchVisible = (links, prefetchOnce=true) => {

    const observer = new IntersectionObserver((entries) => {
        for(const entry of entries) {

            const { href, pathname } = entry.target;

            if(entry.isIntersecting){

                const canPrefetch = prefetchOnce
                    ? !prefetchedLinks[pathname]
                    : true;

                canPrefetch && fetch(href);
                observer.unobserve(entry.target);

                prefetchedLinks[pathname] = true;
            }
        }
    });

    for(const link of links || getLinks())
        validLink(link) && observer.observe(link);
}

/**
 * Prefetch links on hover
 * @param {NodeListOf<HTMLAnchorElement>} [links]
 * @param {boolean} [prefetchOnce]
 */
export const prefetchHover = (links, prefetchOnce=true) => {

    let fetchStarted = false;

    const req = new XMLHttpRequest();

    (links || getLinks()).forEach(link => {

        if(!validLink(link))
            return;

        link.addEventListener('mouseenter', () => {

            const { href, pathname } = link;

            const canPrefetch = prefetchOnce
                ? !prefetchedLinks[pathname]
                : true;

            if(canPrefetch){

                req.onload = req.onerror = () => prefetchedLinks[pathname] = true;
                req.open('GET', href, true);
                req.send();

                fetchStarted = true;
            }

        });

        link.addEventListener('mouseleave',  () => {
            fetchStarted && req.abort();
            fetchStarted = false;
        });

    });
}