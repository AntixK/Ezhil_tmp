// Transcrypt'ed from Python, 2019-12-20 16:07:10
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, all, any, assert, bool, bytearray, bytes, callable, chr, deepcopy, delattr, dict, dir, divmod, enumerate, getattr, hasattr, isinstance, issubclass, len, list, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, setattr, sorted, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {ALPH, BGN_COLOUR, CANVAS_HEIGHT, CANVAS_WIDTH} from './settings.js';
import {HexGrid} from './hexgrid.js';
import {Ring} from './ring.js';
import {Marble} from './marble.js';
import {ADD, ALT, ARROW, AUDIO, AUTO, AXES, BACKSPACE, BASELINE, BEVEL, BEZIER, BLEND, BLUR, BOLD, BOLDITALIC, BOTTOM, BURN, CENTER, CHORD, CLAMP, CLOSE, CONTROL, CORNER, CORNERS, CROSS, CURVE, DARKEST, DEGREES, DEG_TO_RAD, DELETE, DIFFERENCE, DILATE, DODGE, DOWN_ARROW, ENTER, ERODE, ESCAPE, EXCLUSION, FILL, GRAY, GRID, HALF_PI, HAND, HARD_LIGHT, HSB, HSL, IMAGE, IMMEDIATE, INVERT, ITALIC, LANDSCAPE, LEFT, LEFT_ARROW, LIGHTEST, LINEAR, LINES, LINE_LOOP, LINE_STRIP, MIRROR, MITER, MOVE, MULTIPLY, NEAREST, NORMAL, OPAQUE, OPEN, OPTION, OVERLAY, P2D, PI, PIE, POINTS, PORTRAIT, POSTERIZE, PROJECT, QUADRATIC, QUADS, QUAD_STRIP, QUARTER_PI, RADIANS, RADIUS, RAD_TO_DEG, REPEAT, REPLACE, RETURN, RGB, RIGHT, RIGHT_ARROW, ROUND, SCREEN, SHIFT, SOFT_LIGHT, SQUARE, STROKE, SUBTRACT, TAB, TAU, TEXT, TEXTURE, THRESHOLD, TOP, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, TWO_PI, UP_ARROW, VIDEO, WAIT, WEBGL, _CTX_MIDDLE, _DEFAULT_FILL, _DEFAULT_LEADMULT, _DEFAULT_STROKE, _DEFAULT_TEXT_FILL, _P5_INSTANCE, abs, accelerationX, accelerationY, accelerationZ, acos, add_library, alpha, ambientLight, ambientMaterial, angleMode, append, applyMatrix, arc, arrayCopy, asin, atan, atan2, background, beginContour, beginShape, bezier, bezierDetail, bezierPoint, bezierTangent, bezierVertex, blend, blendMode, blue, boolean, box, brightness, byte, camera, ceil, changed, char, circle, color, colorMode, concat, cone, constrain, copy, cos, createA, createAudio, createButton, createCamera, createCanvas, createCapture, createCheckbox, createColorPicker, createDiv, createElement, createFileInput, createGraphics, createImage, createImg, createInput, createNumberDict, createP, createRadio, createSelect, createShader, createSlider, createSpan, createStringDict, createVector, createVideo, createWriter, cursor, curve, curveDetail, curvePoint, curveTangent, curveTightness, curveVertex, cylinder, day, debugMode, degrees, deviceOrientation, directionalLight, disableFriendlyErrors, displayDensity, displayHeight, displayWidth, dist, ellipse, ellipseMode, ellipsoid, endContour, endShape, exp, fill, filter, float, floor, focused, frameCount, frameRate, fullscreen, getURL, getURLParams, getURLPath, global_p5_injection, green, height, hex, hour, httpDo, httpGet, httpPost, hue, image, imageMode, input, int, join, key, keyCode, keyIsDown, keyIsPressed, lerp, lerpColor, lightness, lights, line, loadBytes, loadFont, loadImage, loadJSON, loadModel, loadPixels, loadShader, loadStrings, loadTable, loadXML, log, logOnloaded, loop, mag, map, match, matchAll, max, millis, min, minute, model, month, mouseButton, mouseIsPressed, mouseX, mouseY, nf, nfc, nfp, nfs, noCanvas, noCursor, noDebugMode, noFill, noLoop, noSmooth, noStroke, noTint, noise, noiseDetail, noiseSeed, norm, normalMaterial, orbitControl, ortho, pAccelerationX, pAccelerationY, pAccelerationZ, pRotationX, pRotationY, pRotationZ, perspective, pixelDensity, pixels, plane, pmouseX, pmouseY, point, pointLight, popMatrix, popStyle, pow, pre_draw, preload, push, pushMatrix, pushStyle, pwinMouseX, pwinMouseY, py_clear, py_get, py_pop, py_sort, py_split, quad, quadraticVertex, radians, random, randomGaussian, randomSeed, rect, rectMode, red, redraw, remove, removeElements, resetMatrix, resetShader, resizeCanvas, reverse, rotate, rotateX, rotateY, rotateZ, rotationX, rotationY, rotationZ, round, saturation, save, saveCanvas, saveFrames, saveJSON, saveStrings, saveTable, scale, second, select, selectAll, set, setAttributes, setCamera, setMoveThreshold, setShakeThreshold, shader, shearX, shearY, shininess, shorten, shuffle, sin, size, smooth, specularMaterial, sphere, splice, splitTokens, sq, sqrt, square, start_p5, str, stroke, strokeCap, strokeJoin, strokeWeight, subset, tan, text, textAlign, textAscent, textDescent, textFont, textLeading, textSize, textStyle, textWidth, texture, textureMode, textureWrap, tint, torus, touches, translate, triangle, trim, turnAxis, unchar, unhex, updatePixels, vertex, width, winMouseX, winMouseY, windowHeight, windowWidth, year} from './pyp5js.js';
var __name__ = 'zertz';
export var Zertz =  __class__ ('Zertz', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
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
		self.MARBLE_RADIUS = (CANVAS_HEIGHT * 45) / 900;
		self.RING_RADIUS = (CANVAS_HEIGHT * 65) / 900;
		self.marbles = list ([]);
		self.rings = list ([]);
		self.undo = list ();
		self.redo = list ();
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
		self.marbles = list ([]);
		self.rings = list ([]);
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
		var posx = (CANVAS_WIDTH * 230) / 1000;
		for (var i = 0; i < len (ALPH); i++) {
			posx += self.RING_RADIUS - 1;
			var posy = (CANVAS_HEIGHT * 340) / 900 - ((__mod__ (self.cells_per_col [i], 4)) * self.RING_RADIUS) / 2;
			for (var j = 0; j < self.cells_per_col [i]; j++) {
				var ring = Ring (__kwargtrans__ ({x: posx, y: posy, radius: self.RING_RADIUS}));
				posy += self.RING_RADIUS + 1;
				self.rings.append (ring);
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
		for (var ring of self.rings) {
			ring.render ();
		}
		for (var marble of self.marbles) {
			marble.render ();
		}
	});}
});
export var z = Zertz ();
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
		ring._clicked ();
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
	for (var [i, ring] of enumerate (z.rings)) {
		if (ring.is_clicked && ring.is_removable) {
			console.log (i);
			z.rings.py_pop (i);
		}
	}
};

//# sourceMappingURL=zertz.map