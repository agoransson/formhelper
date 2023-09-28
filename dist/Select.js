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
exports.renderSelect = exports.isSelect = void 0;
const react_1 = __importDefault(require("react"));
const isSelect = (arg) => arg.type.toLowerCase() === 'select';
exports.isSelect = isSelect;
/**
 * Renders a select input.
 *
 * @param {SelectControl} control
 * @returns
 */
const renderSelect = (control) => {
    const { multiple, options, name } = control;
    return (react_1.default.createElement("select", Object.assign({ key: `${name}` }, control, { multiple: multiple }), options.map((option, index) => react_1.default.createElement("option", { key: `${name}-option-${index}` }, option))));
};
exports.renderSelect = renderSelect;
//# sourceMappingURL=Select.js.map