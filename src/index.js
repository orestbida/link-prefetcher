import { getLinks, validLink, addEvent } from './utils';

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
export const prefetchVisible = (links = getLinks(), prefetchOnce = true) => {

    const observer = new IntersectionObserver((entries) => {
        for(const entry of entries) {

            if(entry.isIntersecting){

                const { href, pathname } = entry.target;

                const canPrefetch = prefetchOnce
                    ? !prefetchedLinks[pathname]
                    : true;

                canPrefetch && fetch(href);
                observer.unobserve(entry.target);

                prefetchedLinks[pathname] = true;
            }
        }
    });

    for(const link of links)
        validLink(link) && observer.observe(link);
}

/**
 * Prefetch links on hover
 * @param {NodeListOf<HTMLAnchorElement>} [links]
 * @param {boolean} [prefetchOnce]
 */
export const prefetchHover = (links = getLinks(), prefetchOnce = true) => {

    let fetchStarted = false;

    const req = new XMLHttpRequest();

    for(const link of links) {

        if(validLink(link)) {
            
            addEvent(link, 'mouseenter', () => {
                const { href, pathname } = link;
    
                const canPrefetch = prefetchOnce
                    ? !prefetchedLinks[pathname]
                    : true;
    
                if(canPrefetch){
                    req.onload = req.onerror = () => prefetchedLinks[pathname] = true;
                    req.open('get', href);
                    req.send();
    
                    fetchStarted = true;
                }
            });
    
            addEvent(link, 'mouseleave', () => {
                fetchStarted && req.abort();
                fetchStarted = false;
            });
        }
    }
}