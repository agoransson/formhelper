"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInput = void 0;
const react_1 = require("react");
const useInput = (initialValue) => {
    const [value, setValue] = (0, react_1.useState)(initialValue);
    return {
        value,
        setValue,
        reset: () => setValue(undefined),
        bind: {
            value,
            onChange: (event) => {
                setValue(event.currentTarget.value);
            }
        }
    };
};
exports.useInput = useInput;
//# sourceMappingURL=UseInput.js.map