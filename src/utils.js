/**
 * @param {string} selector
 * @returns {NodeListOf<HTMLAnchorElement>}
 */
export const getLinks = (selector='a:not([target="_blank"]):not([href^="#"])') => document.querySelectorAll(selector);

/**
 * @param {HTMLAnchorElement} link
 */
export const validLink = (link) => link.host === location.host && link.pathname !== location.pathname;