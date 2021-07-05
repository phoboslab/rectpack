/*
== RectPack – Super Simple Rectangle Packing for JS

Dominic Szablewski - https://phoboslab.org

-- LICENSE: The MIT License(MIT)
Copyright(c) 2021 Dominic Szablewski
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files(the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions :
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class RectPack {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.grid = new Uint32Array(width);
	}

	insert(width, height) {
		let bestX = 0;
		let bestY = this.height - height + 1;

		for (let x = 0; x < this.width - width; x++) {
			let cy = this.grid[x];
			let isBest = true;
			for (let bx = x; bx < x + width; bx++) {
				if (this.grid[bx] > bestY) {
					isBest = false;
					x = bx;
					break;
				}
				if (this.grid[bx] > cy) {
					cy = this.grid[bx];
				}
			}
			if (isBest) {
				bestX = x;
				bestY = cy;
			}
		}

		if (bestY + height < this.height) {
			for (let x = bestX; x < bestX + width; x++) {
				this.grid[x] = bestY + height;
			}
			return {x: bestX, y: bestY};
		}
		else {
			return null;
		}
	}

	clear() {
		this.grid.fill(0);
	}
}
