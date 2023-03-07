/**
 * @param {HTMLAnchorElement} link
 */
export const validLink = (link) => link.host === location.host && link.pathname !== location.pathname;

/**
 * @param {NodeListOf<HTMLAnchorElement>} [links]
 */
export const getValidLinks = (links) => [...(links || document.querySelectorAll('a'))].filter(validLink);

/**
 * @param {HTMLElement} el
 * @param {(keyof WindowEventMap)[]} type
 * @param {(ev: Event) => {}} fn
 */
export const addEvents = (el, type, fn) => type.forEach(type => el.addEventListener(type, fn));