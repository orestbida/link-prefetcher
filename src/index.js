import { getValidLinks, addEvents } from './utils';

/**
 * Already prefetched links
 * @type {Object.<string, boolean>}
 */
export const prefetchedLinks = {};

/**
 * Prefetch all visible links
 * @param {NodeListOf<HTMLAnchorElement>} [links]
 */
export const prefetchVisible = (links) => {

    const observer = new IntersectionObserver((entries) => {
        for(const entry of entries) {

            if(entry.isIntersecting){

                const { href, pathname } = entry.target;

                if(!prefetchedLinks[pathname]){
                    prefetchedLinks[pathname] = true;
                    fetch(href);
                }

                observer.unobserve(entry.target);
            }
        }
    });

    getValidLinks(links).forEach(observer.observe);
}

/**
 * Prefetch links on hover
 * @param {NodeListOf<HTMLAnchorElement>} [links]
 */
export const prefetchHover = (links) => {

    let fetchStarted = false;

    const req = new XMLHttpRequest();

    for(const link of getValidLinks(links)) {

        addEvents(link, ['mouseenter', 'touchstart'], () => {

            const { href, pathname } = link;

            if(!prefetchedLinks[pathname]){
                req.onload = req.onerror = () => prefetchedLinks[pathname] = true;
                req.open('get', href);
                req.send();

                fetchStarted = true;
            }
        });

        addEvents(link, ['mouseleave'], () => {
            if(fetchStarted) {
                fetchStarted = false;
                req.abort();
            }
        });
    }
}