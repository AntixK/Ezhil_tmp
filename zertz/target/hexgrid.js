// Transcrypt'ed from Python, 2019-12-20 16:07:10
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'hexgrid';
export var HexGrid =  __class__ ('HexGrid', [object], {
	__module__: __name__,
	__coord_map: dict ({'N': 1}),
	get __init__ () {return __get__ (this, function (self, side_length, cell_type) {
		if (typeof side_length == 'undefined' || (side_length != null && side_length.hasOwnProperty ("__kwargtrans__"))) {;
			var side_length = 4;
		};
		if (typeof cell_type == 'undefined' || (cell_type != null && cell_type.hasOwnProperty ("__kwargtrans__"))) {;
			var cell_type = 1;
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
		for (var col_id = 0; col_id < 2 * self.side_length - 1; col_id++) {
			var col = list ([]);
			for (var row_id = 0; row_id < 2 * self.side_length - 1; row_id++) {
				if (row_id < self.cells_per_col [col_id]) {
					col.append (self.cell_type);
				}
				else {
					col.append (null);
				}
			}
			self.grid.append (col);
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
		return sum (self.cells_per_col);
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