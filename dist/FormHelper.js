"use strict";
/**
 * formhelper
 *
 * Copyright (c) Andreas Göransson (https://github.com/agoransson)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderForm = exports.renderRow = exports.renderGroup = void 0;
const react_1 = __importDefault(require("react"));
const _1 = require(".");
/**
 * Renders a single control.
 *
 * @param {Control} control
 * @returns <Form.Control />
 */
const renderControl = (control) => ((0, _1.isLabel)(control) ? (0, _1.renderLabel)(control) :
    (0, _1.isText)(control) ? (0, _1.renderText)(control) :
        (0, _1.isPassword)(control) ? (0, _1.renderPassword)(control) :
            (0, _1.isEmail)(control) ? (0, _1.renderEmail)(control) :
                (0, _1.isSelect)(control) ? (0, _1.renderSelect)(control) :
                    (0, _1.isTextarea)(control) ? (0, _1.renderTextarea)(control) :
                        (0, _1.isFile)(control) ? (0, _1.renderFile)(control) :
                            (0, _1.isRange)(control) ? (0, _1.renderRange)(control) :
                                (0, _1.isCheckbox)(control) ? (0, _1.renderCheckbox)(control) :
                                    (0, _1.isRadio)(control) ? (0, _1.renderRadio)(control) :
                                        (0, _1.isDivider)(control) ? (0, _1.renderDivider)() :
                                            (0, _1.isButton)(control) ? (0, _1.renderButton)(control) :
                                                (0, _1.isSubmit)(control) ? (0, _1.renderSubmit)(control) :
                                                    (0, _1.isLink)(control) ? (0, _1.renderSubmit)(control) :
                                                        react_1.default.createElement(react_1.default.Fragment, null));
/**
 * Renders a form group containing an optional label and a control.
 *
 * @param {object} control
 * @returns <Form.Group />
 */
const renderGroup = (control) => {
    if ((0, _1.isDivider)(control)) {
        return (0, _1.renderDivider)();
    }
    const { name } = control;
    return (react_1.default.createElement("div", { key: `${name}-group`, className: "form-col" }, renderControl(control)));
};
exports.renderGroup = renderGroup;
/**
 * Renders a row inside the form.
 *
 * @param {array} controls
 * @returns <Form.Row />
 */
const renderRow = (controls) => (react_1.default.createElement("div", { key: controls.map(control => control.name).join('.'), className: "form-row" }, controls.map((control) => ((0, exports.renderGroup)(control)))));
exports.renderRow = renderRow;
/**
 * Renders a complete form.
 *
 * @param {array} form      The form, should be defined as an array.
 */
const renderForm = (controls) => (react_1.default.createElement("div", { className: "form-container" }, controls.map(control => (Array.isArray(control) ? (0, exports.renderRow)(control) : (0, exports.renderRow)([control])))));
exports.renderForm = renderForm;
//# sourceMappingURL=FormHelper.js.map