import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE__components_CounterButton_index_mjs__ from "./components/CounterButton/index.mjs";
import * as __WEBPACK_EXTERNAL_MODULE__useCounter_mjs__ from "./useCounter.mjs";
import "./index.css";
const Counter = ()=>{
    const { count, increment, decrement } = (0, __WEBPACK_EXTERNAL_MODULE__useCounter_mjs__.useCounter)();
    return /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("div", null, /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement("h2", {
        className: "counter-text"
    }, "Counter: ", count), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE__components_CounterButton_index_mjs__.CounterButton, {
        onClick: decrement,
        label: "-"
    }), /*#__PURE__*/ __WEBPACK_EXTERNAL_MODULE_react__["default"].createElement(__WEBPACK_EXTERNAL_MODULE__components_CounterButton_index_mjs__.CounterButton, {
        onClick: increment,
        label: "+"
    }));
};
export { Counter };
