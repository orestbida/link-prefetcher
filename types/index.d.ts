export = LinkPrefetcher
export as namespace LinkPrefetcher

declare namespace LinkPrefetcher {

    /**
     * Keep track of prefetched links
     */
    const prefetchedLinks: { [href: string]: boolean }

    /**
     * Prefetch links on hover.
     */
    function prefetchHover(
        links?: NodeListOf<HTMLAnchorElement> | HTMLAnchorElement[],
        prefetchOnce?: boolean
    ): void

    /**
     * Prefetch all visible links.
     */
    function prefetchVisible(
        links?: NodeListOf<HTMLAnchorElement> | HTMLAnchorElement[],
        prefetchOnce?: boolean
    ): void
}

declare global {
    interface Window {
        LinkPrefetcher: typeof LinkPrefetcher
    }
}