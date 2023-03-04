# link-prefetcher

A tiny link prefetcher (yet another one in the sea of prefetching tools). Uses `fetch`/`xhr` to prefetch links rather than the `link` tag.

### `prefetchHover()`
Start prefetching as soon as possible. Abort if the cursor leaves the anchor tag before the prefetch process is done.

### `prefetchVisible()`
Immediately prefetch all visible links.

## Installation

```bash
npm i link-prefetcher
```

## Usage
```javascript
import { prefetchHover } from 'link-prefetcher';

prefetchHover();
```

or

```html
<script defer src="dist/index.umd.js"></script>
<script>
    window.addEventListener('load', () => {
        LinkPrefetcher.hoverPrefetch()
    });
</script>
```

## License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.