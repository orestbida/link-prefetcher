# link-prefetcher

![GitHub](https://img.shields.io/github/license/orestbida/link-prefetcher?label=License)
![GitHub file size in bytes](https://img.shields.io/github/size/orestbida/link-prefetcher/dist/index.esm.js?label=Size)
[![Build](https://github.com/orestbida/link-prefetcher/actions/workflows/build.yml/badge.svg)](https://github.com/orestbida/link-prefetcher/actions/workflows/build.yml)

A tiny link prefetcher (yet another one in the sea of prefetching tools). Uses `fetch`/`xhr` to prefetch links rather than the `link` tag.

### `prefetchHover()`
Start prefetching as soon as possible. Abort if the cursor leaves the anchor tag before the prefetch process is done.

### `prefetchVisible()`
Immediately prefetch all visible links (⚠️ use with caution, can eat up a lot of bandwidth).

## Installation

```bash
npm i @orestbida/link-prefetcher
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
