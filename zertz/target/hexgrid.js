// Transcrypt'ed from Python, 2019-12-21 16:47:05
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {accumulate} from './itertools.js';
var __name__ = 'hexgrid';
export var HexGrid =  __class__ ('HexGrid', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, side_length, cell_type) {
		if (typeof side_length == 'undefined' || (side_length != null && side_length.hasOwnProperty ("__kwargtrans__"))) {;
			var side_length = 4;
		};
		if (typeof cell_type == 'undefined' || (cell_type != null && cell_type.hasOwnProperty ("__kwargtrans__"))) {;
			var cell_type = null;
		};
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
		self.num_cells = self._get_num_cells ();
		self.grid = list ([]);
		self._populate_grid ();
	});},
	get _populate_grid () {return __get__ (this, function (self) {
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
			self.grid.append (self.cell_type ());
		}
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
		self.cum_cells = list (accumulate (self.cells_per_col));
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
		return tuple ([col, index - self.cum_cells [col - 1]]);
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
		neighbours.append (self.grid [i - 1]);
		neighbours.append (self.grid [i + 1]);
		var __left0__ = self._get_col_row_from_ind (i);
		var curr_col = __left0__ [0];
		var curr_row = __left0__ [1];
		var prev_col = curr_col - 1;
		var next_col = curr_col + 1;
		neighbours.append (self.grid [self._get_ind_from_col_row (prev_col, curr_row)]);
		neighbours.append (self.grid [self._get_ind_from_col_row (next_col, curr_row)]);
		if (curr_col <= len (self.cells_per_col) / 2) {
			neighbours.append (self.grid [self._get_ind_from_col_row (prev_col, curr_row - 1)]);
			neighbours.append (self.grid [self._get_ind_from_col_row (next_col, curr_row + 1)]);
		}
		else {
			neighbours.append (self.grid [self._get_ind_from_col_row (prev_col, curr_row + 1)]);
			neighbours.append (self.grid [self._get_ind_from_col_row (next_col, curr_row - 1)]);
		}
		return neighbours;
	});},
	get __call__ () {return __get__ (this, function (self, dir, offset) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'dir': var dir = __allkwargs0__ [__attrib0__]; break;
						case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		// pass;
	});},
	get __repr__ () {return __get__ (this, function (self) {
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
		return '{}'.format (self.grid);
	});}
});

//# sourceMappingURL=hexgrid.map