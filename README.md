## RectPack – Super Simple Rectangle Packing for JS

An extremly simple yet reasonably fast rectangle packing utility. This can be
used to pack textures into an atlas.

### Demo

See `example.html` for a [demo](https://phoboslab.org/files/rectpack/).

### Synopsis

```js
// Create a new bucket with 512x512
let rp = new RectPack(512, 512);

// Insert one rect at the "best" position
let packed = rp.insert(32, 16);
if (packed) {
	console.log('inserted at', packed.x, packed.y);
}

// Remove all rects
rp.clear();

```

If you're packing textures, consider dividing the bucket size and the sizes
of the rects to be inserted by `128` or whatever your minimum texture size is.
The size of the bucket (specifically the width) is directly proportional to the
insertion time.

### Why

This is not the most effecient or fastest algorithm, but it's tiny, simple and
gets the job done.

