// Transcrypt'ed from Python, 2019-12-27 23:10:08
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, all, any, assert, bool, bytearray, bytes, callable, chr, deepcopy, delattr, dict, dir, divmod, enumerate, getattr, hasattr, isinstance, issubclass, len, list, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, setattr, sorted, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ALPH, BGN_COLOUR, CANVAS_HEIGHT, CANVAS_WIDTH} from './settings.js';
import {Ring} from './ring.js';
import {Marble} from './marble.js';
import {ADD, ALT, ARROW, AUDIO, AUTO, AXES, BACKSPACE, BASELINE, BEVEL, BEZIER, BLEND, BLUR, BOLD, BOLDITALIC, BOTTOM, BURN, CENTER, CHORD, CLAMP, CLOSE, CONTROL, CORNER, CORNERS, CROSS, CURVE, DARKEST, DEGREES, DEG_TO_RAD, DELETE, DIFFERENCE, DILATE, DODGE, DOWN_ARROW, ENTER, ERODE, ESCAPE, EXCLUSION, FILL, GRAY, GRID, HALF_PI, HAND, HARD_LIGHT, HSB, HSL, IMAGE, IMMEDIATE, INVERT, ITALIC, LANDSCAPE, LEFT, LEFT_ARROW, LIGHTEST, LINEAR, LINES, LINE_LOOP, LINE_STRIP, MIRROR, MITER, MOVE, MULTIPLY, NEAREST, NORMAL, OPAQUE, OPEN, OPTION, OVERLAY, P2D, PI, PIE, POINTS, PORTRAIT, POSTERIZE, PROJECT, QUADRATIC, QUADS, QUAD_STRIP, QUARTER_PI, RADIANS, RADIUS, RAD_TO_DEG, REPEAT, REPLACE, RETURN, RGB, RIGHT, RIGHT_ARROW, ROUND, SCREEN, SHIFT, SOFT_LIGHT, SQUARE, STROKE, SUBTRACT, TAB, TAU, TEXT, TEXTURE, THRESHOLD, TOP, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, TWO_PI, UP_ARROW, VIDEO, WAIT, WEBGL, _CTX_MIDDLE, _DEFAULT_FILL, _DEFAULT_LEADMULT, _DEFAULT_STROKE, _DEFAULT_TEXT_FILL, _P5_INSTANCE, abs, accelerationX, accelerationY, accelerationZ, acos, add_library, alpha, ambientLight, ambientMaterial, angleMode, append, applyMatrix, arc, arrayCopy, asin, atan, atan2, background, beginContour, beginShape, bezier, bezierDetail, bezierPoint, bezierTangent, bezierVertex, blend, blendMode, blue, boolean, box, brightness, byte, camera, ceil, changed, char, circle, color, colorMode, concat, cone, constrain, copy, cos, createA, createAudio, createButton, createCamera, createCanvas, createCapture, createCheckbox, createColorPicker, createDiv, createElement, createFileInput, createGraphics, createImage, createImg, createInput, createNumberDict, createP, createRadio, createSelect, createShader, createSlider, createSpan, createStringDict, createVector, createVideo, createWriter, cursor, curve, curveDetail, curvePoint, curveTangent, curveTightness, curveVertex, cylinder, day, debugMode, degrees, deviceOrientation, directionalLight, disableFriendlyErrors, displayDensity, displayHeight, displayWidth, dist, ellipse, ellipseMode, ellipsoid, endContour, endShape, exp, fill, filter, float, floor, focused, frameCount, frameRate, fullscreen, getURL, getURLParams, getURLPath, global_p5_injection, green, height, hex, hour, httpDo, httpGet, httpPost, hue, image, imageMode, input, int, join, key, keyCode, keyIsDown, keyIsPressed, lerp, lerpColor, lightness, lights, line, loadBytes, loadFont, loadImage, loadJSON, loadModel, loadPixels, loadShader, loadStrings, loadTable, loadXML, log, logOnloaded, loop, mag, map, match, matchAll, max, millis, min, minute, model, month, mouseButton, mouseIsPressed, mouseX, mouseY, nf, nfc, nfp, nfs, noCanvas, noCursor, noDebugMode, noFill, noLoop, noSmooth, noStroke, noTint, noise, noiseDetail, noiseSeed, norm, normalMaterial, orbitControl, ortho, pAccelerationX, pAccelerationY, pAccelerationZ, pRotationX, pRotationY, pRotationZ, perspective, pixelDensity, pixels, plane, pmouseX, pmouseY, point, pointLight, popMatrix, popStyle, pow, pre_draw, preload, push, pushMatrix, pushStyle, pwinMouseX, pwinMouseY, py_clear, py_get, py_pop, py_sort, py_split, quad, quadraticVertex, radians, random, randomGaussian, randomSeed, rect, rectMode, red, redraw, remove, removeElements, resetMatrix, resetShader, resizeCanvas, reverse, rotate, rotateX, rotateY, rotateZ, rotationX, rotationY, rotationZ, round, saturation, save, saveCanvas, saveFrames, saveJSON, saveStrings, saveTable, scale, second, select, selectAll, set, setAttributes, setCamera, setMoveThreshold, setShakeThreshold, shader, shearX, shearY, shininess, shorten, shuffle, sin, size, smooth, specularMaterial, sphere, splice, splitTokens, sq, sqrt, square, start_p5, str, stroke, strokeCap, strokeJoin, strokeWeight, subset, tan, text, textAlign, textAscent, textDescent, textFont, textLeading, textSize, textStyle, textWidth, texture, textureMode, textureWrap, tint, torus, touches, translate, triangle, trim, turnAxis, unchar, unhex, updatePixels, vertex, width, winMouseX, winMouseY, windowHeight, windowWidth, year} from './pyp5js.js';
var __name__ = 'zertz';
export var Zertz =  __class__ ('Zertz', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, side_length, cell_type) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'side_length': var side_length = __allkwargs0__ [__attrib0__]; break;
						case 'cell_type': var cell_type = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.side_length = side_length;
		self.cell_type = cell_type;
		self.MARBLE_RADIUS = (CANVAS_HEIGHT * 45) / 900;
		self.RING_RADIUS = (CANVAS_HEIGHT * 65) / 900;
		self.marbles = list ([]);
		self.rings = list ([]);
		self.undo = list ();
		self.redo = list ();
	});},
	get _populate_rings () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		for (var col_id = 0; col_id < self.num_cells; col_id++) {
			self.rings.append (self.cell_type ());
		}
		self.rings.append (null);
	});},
	get _get_num_cells () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var cells_per_col = list (range (self.side_length, 2 * self.side_length));
		self.cells_per_col = cells_per_col + cells_per_col.__getslice__ (0, null, -(1)).__getslice__ (1, null, 1);
		return sum (self.cells_per_col);
	});},
	get _get_col_row_from_ind () {return __get__ (this, function (self, index) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		for (var [col, num_cells] of enumerate (self.cum_cells)) {
			if (index < num_cells) {
				break;
			}
		}
		if (col == 0) {
			var row = index;
		}
		else {
			var row = index - self.cum_cells [col - 1];
		}
		return tuple ([col, row]);
	});},
	get _get_ind_from_col_row () {return __get__ (this, function (self, col, row) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'col': var col = __allkwargs0__ [__attrib0__]; break;
						case 'row': var row = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (col > 0) {
			return self.cum_cells [col - 1] + row;
		}
		else {
			return row;
		}
	});},
	get _get_neighbours () {return __get__ (this, function (self, i) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'i': var i = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var neighbours = list ([]);
		var __left0__ = self._get_col_row_from_ind (i);
		var curr_col = __left0__ [0];
		var curr_row = __left0__ [1];
		if (curr_row > 0) {
			neighbours.append (i - 1);
		}
		else {
			neighbours.append (self.num_cells + 1);
		}
		if (curr_row < self.cells_per_col [curr_col] - 1) {
			neighbours.append (i + 1);
		}
		else {
			neighbours.append (self.num_cells + 1);
		}
		var prev_col = curr_col - 1;
		var next_col = curr_col + 1;
		if (prev_col > -(1) && curr_row < self.cells_per_col [prev_col]) {
			neighbours.append (self._get_ind_from_col_row (prev_col, curr_row));
		}
		else {
			neighbours.append (self.num_cells + 1);
		}
		if (next_col < len (self.cells_per_col) && curr_row < self.cells_per_col [next_col]) {
			neighbours.append (self._get_ind_from_col_row (next_col, curr_row));
		}
		else {
			neighbours.append (self.num_cells + 1);
		}
		if (curr_col == Math.floor (len (self.cells_per_col) / 2)) {
			if (prev_col > -(1) && curr_row - 1 < self.cells_per_col [prev_col] && curr_row > 0) {
				neighbours.append (self._get_ind_from_col_row (prev_col, curr_row - 1));
			}
			else {
				neighbours.append (self.num_cells + 1);
			}
			if (next_col < len (self.cells_per_col) && curr_row - 1 < self.cells_per_col [next_col] && curr_row > 0) {
				neighbours.append (self._get_ind_from_col_row (next_col, curr_row - 1));
			}
			else {
				neighbours.append (self.num_cells + 1);
			}
		}
		else if (curr_col < len (self.cells_per_col) / 2) {
			if (prev_col > -(1) && curr_row - 1 < self.cells_per_col [prev_col] && curr_row > 0) {
				neighbours.append (self._get_ind_from_col_row (prev_col, curr_row - 1));
			}
			else {
				neighbours.append (self.num_cells + 1);
			}
			if (next_col < len (self.cells_per_col) && curr_row + 1 < self.cells_per_col [next_col]) {
				neighbours.append (self._get_ind_from_col_row (next_col, curr_row + 1));
			}
			else {
				neighbours.append (self.num_cells + 1);
			}
		}
		else {
			if (prev_col > -(1) && curr_row + 1 < self.cells_per_col [prev_col]) {
				neighbours.append (self._get_ind_from_col_row (prev_col, curr_row + 1));
			}
			else {
				neighbours.append (self.num_cells + 1);
			}
			if (next_col < len (self.cells_per_col) && curr_row - 1 < self.cells_per_col [next_col] && curr_row > 0) {
				neighbours.append (self._get_ind_from_col_row (next_col, curr_row - 1));
			}
			else {
				neighbours.append (self.num_cells + 1);
			}
		}
		return neighbours;
	});},
	get reset_canvas () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		background (BGN_COLOUR);
		self.undo.py_clear ();
		self.redo.py_clear ();
		self.marbles.py_clear ();
		self.rings.py_clear ();
		self.num_cells = 37;
		self._populate_rings ();
		var posx = (CANVAS_WIDTH * 725) / 1000;
		var num_marbles = list ([10, 8, 6]);
		var c = list (['C', 'P', 'Y']);
		for (var [i, colour] of enumerate (c)) {
			posx += self.MARBLE_RADIUS + 10;
			var posy = (CANVAS_HEIGHT * 180) / 900 + i * self.MARBLE_RADIUS;
			for (var j = 0; j < num_marbles [i]; j++) {
				var marble = Marble (posx, posy, self.MARBLE_RADIUS, colour);
				self.marbles.append (marble);
				posy += self.MARBLE_RADIUS + 10;
			}
		}
		self.cells_per_col = list ([4, 5, 6, 7, 6, 5, 4]);
		self.cum_cells = list ([4, 9, 15, 22, 28, 33, 37]);
		for (var i = 0; i < self.num_cells; i++) {
			var __left0__ = self._get_col_row_from_ind (i);
			var col = __left0__ [0];
			var row = __left0__ [1];
			var posx = col * (self.RING_RADIUS - 1) + (CANVAS_WIDTH * 230) / 1000;
			var posy = (CANVAS_HEIGHT * 340) / 900 - ((__mod__ (self.cells_per_col [col], self.side_length)) * self.RING_RADIUS) / 2;
			posy += row * (self.RING_RADIUS + 1);
			self.rings [i]._ring_params (__kwargtrans__ ({x: posx, y: posy, colour: 245, radius: self.RING_RADIUS}));
		}
	});},
	get set_removable_rings () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		for (var [i, ring] of enumerate (self.rings)) {
			if (ring !== null) {
				var neighbour_inds = self._get_neighbours (i);
				neighbour_inds.py_sort ();
				if (self.rings [neighbour_inds [0]] === null && self.rings [neighbour_inds [1]] === null || self.rings [neighbour_inds [1]] === null && self.rings [neighbour_inds [2]] === null || self.rings [neighbour_inds [3]] === null && self.rings [neighbour_inds [5]] === null || self.rings [neighbour_inds [4]] === null && self.rings [neighbour_inds [5]] === null || self.rings [neighbour_inds [2]] === null && self.rings [neighbour_inds [2]] === null || self.rings [neighbour_inds [0]] === null && self.rings [neighbour_inds [1]] === null) {
					ring.is_removable = true;
				}
				else {
					ring.is_removable = false;
				}
			}
		}
	});},
	get render () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.set_removable_rings ();
		for (var ring of self.rings) {
			if (ring !== null) {
				if (ring.is_removable) {
					ring._change_colour (150);
				}
				else {
					ring._change_colour (245);
				}
				ring.render ();
			}
		}
		for (var marble of self.marbles) {
			marble.render ();
		}
	});}
});
export var z = Zertz (4, Ring);
export var setup = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	createCanvas (CANVAS_WIDTH, CANVAS_HEIGHT);
	background (BGN_COLOUR);
	z.reset_canvas ();
};
export var draw = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	fill ('blue');
	background (BGN_COLOUR);
	var radius = sin (frameCount / 60) * 50 + 50;
	ellipse (10, 10, radius, radius);
	z.render ();
};
export var mousePressed = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	for (var marble of z.marbles) {
		marble._clicked ();
	}
	for (var ring of z.rings) {
		if (ring !== null) {
			ring._clicked ();
		}
	}
};
export var mouseMoved = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	for (var [i, ring] of enumerate (z.rings)) {
		if (ring !== null) {
			ring._hover ();
			if (ring.is_hover) {
				var neighbour_inds = z._get_neighbours (i);
				console.log (z.rings [neighbour_inds [5]]);
				for (var [i, ring] of enumerate (z.rings)) {
					if (__in__ (i, neighbour_inds)) {
						if (ring !== null) {
							ring._change_colour (180);
						}
					}
					else if (ring !== null) {
						ring._change_colour (245);
					}
				}
			}
		}
	}
};
export var mouseDragged = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	for (var marble of z.marbles) {
		marble._dragged ();
	}
};
export var mouseReleased = function () {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
			}
		}
	}
	else {
	}
	for (var marble of z.marbles) {
		if (marble.is_clicked) {
			for (var ring of z.rings) {
				if (ring !== null) {
					var d = dist (mouseX, mouseY, ring.x, ring.y);
					if (d < ring.ring_radius / 2) {
						marble.set_pos (ring.x, ring.y);
						marble.on_ring = true;
						ring.has_marble = true;
						ring.is_removable = false;
					}
					else {
						marble.reset_init_pos ();
					}
				}
			}
		}
	}
	for (var [i, ring] of enumerate (z.rings)) {
		if (ring !== null) {
			if (ring.is_clicked && ring.is_removable) {
				z.rings [i] = null;
			}
		}
	}
};

//# sourceMappingURL=zertz.map