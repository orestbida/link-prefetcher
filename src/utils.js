/**
 * @param {string} selector
 * @returns {NodeListOf<HTMLAnchorElement>}
 */
export const getLinks = () => document.querySelectorAll('a');

/**
 * @param {HTMLAnchorElement} link
 */
export const validLink = (link) => link.host === location.host && link.pathname !== location.pathname;

/**
 * @param {HTMLElement} el
 * @param {keyof WindowEventMap} type
 * @param {(ev: Event) => {}} fn
 */
export const addEvent = (el, type, fn) => el.addEventListener(type, fn);