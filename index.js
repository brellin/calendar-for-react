"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Month = _interopRequireDefault(require("./components/Month"));

var _DatePicker = _interopRequireDefault(require("./components/DatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var _useState = (0, _react.useState)((0, _moment.default)().format('YYYY-MM-DD')),
      _useState2 = _slicedToArray(_useState, 2),
      currentDate = _useState2[0],
      setCurrentDate = _useState2[1];

  return _react.default.createElement("div", null, _react.default.createElement(_DatePicker.default, {
    currentDate: currentDate,
    setCurrentDate: setCurrentDate
  }), _react.default.createElement(_Month.default, {
    currentDate: currentDate,
    setCurrentDate: setCurrentDate
  }));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePicker;

var _react = _interopRequireDefault(require("react"));

var _customHooks = require("customHooks");

var _moment = _interopRequireDefault(require("moment"));

require("./DatePicker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatePicker(props) {
  var _useForm = (0, _customHooks.useForm)(setDate),
      fields = _useForm.fields,
      handleChanges = _useForm.handleChanges,
      submit = _useForm.submit;

  function setDate() {
    props.setCurrentDate(fields.date);
  }

  return _react.default.createElement("form", {
    className: "DatePicker",
    onSubmit: submit
  }, _react.default.createElement("input", {
    type: props.week ? 'datetime-local' : 'date',
    name: "date",
    onChange: handleChanges,
    defaultValue: (0, _moment.default)(props.currentDate).format('YYYY-MM-DD')
  }), _react.default.createElement("button", {
    type: "submit"
  }, "Change Date"));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _DatePicker.default;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

require("./Modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  return _react.default.createElement("div", {
    className: "Modal",
    style: {
      display: props.show ? 'flex' : 'none'
    },
    onClick: props.showModal
  }, _react.default.createElement("section", {
    className: "modal-main",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, _react.default.createElement("h1", null, (0, _moment.default)(props.selected).format('MMMM Do YYYY')), _react.default.createElement("button", {
    type: "button",
    onClick: props.showModal
  }, "Close")));
};

var _default = Modal;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

require("../Month.scss");

require("./BackBlanks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  var blnk = props.blnk + 1;
  return _react.default.createElement("div", {
    className: "day blank",
    style: {
      gridArea: "day".concat(blnk + props.monthDays)
    },
    onClick: function onClick() {
      return props.setCurrentDate((0, _moment.default)("".concat(props.month, "-").concat(blnk)));
    }
  }, blnk);
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BackBlanks = _interopRequireDefault(require("./BackBlanks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _BackBlanks.default;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

require("../Month.scss");

require("./FrontBlanks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  var blank = props.prevMonth - props.frontBlanks.length + props.blank + 1;
  console.log(blank);
  return _react.default.createElement("div", {
    className: "day blank",
    style: {
      gridArea: "day".concat(props.blank + 1)
    },
    onClick: function onClick() {
      return props.setCurrentDate((0, _moment.default)("".concat(props.month, "-").concat(blank)).format('YYYY-MM-DD'));
    }
  }, blank);
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FrontBlanks = _interopRequireDefault(require("./FrontBlanks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _FrontBlanks.default;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Month = _interopRequireDefault(require("./Month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Month.default;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Month;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _Weekdays = _interopRequireDefault(require("./Weekdays"));

var _FrontBlanks = _interopRequireDefault(require("./FrontBlanks"));

var _MonthDays = _interopRequireDefault(require("./MonthDays"));

var _BackBlanks = _interopRequireDefault(require("./BackBlanks"));

var _Modal = _interopRequireDefault(require("../Modal/Modal"));

var _vars = _interopRequireDefault(require("./vars"));

require("./Month.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Month(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _moment.default)()),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var showModal = function showModal() {
    return setShow(!show);
  };

  var _monthVars = (0, _vars.default)(props.currentDate),
      prevMonth = _monthVars.prevMonth,
      frontBlanks = _monthVars.frontBlanks,
      backBlanks = _monthVars.backBlanks,
      monthDays = _monthVars.monthDays,
      weekdays = _monthVars.weekdays,
      currentDay = _monthVars.currentDay;

  return _react.default.createElement("div", {
    className: "Month"
  }, _react.default.createElement("h1", {
    style: {
      gridArea: 'title'
    }
  }, (0, _moment.default)(props.currentDate).format('MMMM YYYY')), weekdays.map(function (day) {
    return _react.default.createElement(_Weekdays.default, {
      day: day,
      key: day
    });
  }), frontBlanks.map(function (blank) {
    return _react.default.createElement(_FrontBlanks.default, {
      blank: blank,
      prevMonth: prevMonth,
      frontBlanks: frontBlanks,
      key: blank * Math.random(),
      setCurrentDate: props.setCurrentDate,
      month: (0, _moment.default)(props.currentDate).subtract(1, 'month').format('YYYY-MM')
    });
  }), monthDays.map(function (day) {
    return _react.default.createElement(_MonthDays.default, {
      day: day,
      frontBlanks: frontBlanks,
      currentDay: currentDay,
      key: day,
      showModal: showModal,
      setSelected: setSelected,
      currentDate: props.currentDate
    });
  }), backBlanks.map(function (blnk) {
    return _react.default.createElement(_BackBlanks.default, {
      blnk: blnk,
      monthDays: monthDays,
      key: blnk * Math.random(),
      setCurrentDate: props.setCurrentDate,
      month: (0, _moment.default)(props.currentDate).add(1, 'month').format('YYYY-MM')
    });
  }), _react.default.createElement(_Modal.default, {
    show: show,
    showModal: showModal,
    selected: selected,
    setSelected: setSelected
  }));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MonthDays = _interopRequireDefault(require("./MonthDays"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _MonthDays.default;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  var currentMaY = (0, _moment.default)(props.currentDate).format('YYYY-MM');
  return _react.default.createElement("div", {
    onClick: function onClick() {
      props.setSelected((0, _moment.default)("".concat(currentMaY, "-").concat(props.day)));
      props.showModal();
    },
    className: "day".concat(props.currentDay === props.day + '' ? ' active' : ''),
    style: {
      gridArea: "day".concat(props.frontBlanks.length + props.day)
    }
  }, props.day);
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(date) {
  var weekdays = _moment.default.weekdays();

  var prevMonth = (0, _moment.default)(date).subtract(1, 'month').daysInMonth(); // Number of days in previous month

  var firstDoM = (0, _moment.default)(date).startOf('month').format('d'); // Day of week of first day of current month

  var frontBlanks = []; // Number of days before first day of month

  for (var i = 0; i < firstDoM; i++) {
    frontBlanks.push(i);
  }

  var daysInMonth = (0, _moment.default)(date).daysInMonth(); // Number of days in current month

  var backBlanks = []; // Number of days after last day of month

  for (var _i = 0; _i < 42 - daysInMonth - frontBlanks.length; _i++) {
    backBlanks.push(_i);
  }

  var monthDays = []; // Days in current month

  for (var _i2 = 1; _i2 <= daysInMonth; _i2++) {
    monthDays.push(_i2);
  }

  var currentDay = (0, _moment.default)(date).format('D');
  return {
    prevMonth: prevMonth,
    frontBlanks: frontBlanks,
    backBlanks: backBlanks,
    monthDays: monthDays,
    weekdays: weekdays,
    currentDay: currentDay
  };
};

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Weekdays = _interopRequireDefault(require("./Weekdays"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Weekdays.default;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Weekdays.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(props) {
  return _react.default.createElement("div", {
    className: "day-name",
    style: {
      gridArea: "".concat(props.day),
      color: 'white',
      background: props.background || props.backgroundColor || 'blue'
    }
  }, props.day);
};

exports.default = _default;
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById('root'));
