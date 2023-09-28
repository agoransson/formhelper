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
exports.renderControl = exports.isControl = void 0;
const react_1 = __importDefault(require("react"));
const isControl = (arg) => arg.hasOwnProperty('type');
exports.isControl = isControl;
/**
 * Renders the actual control
 *
 * @param {Control} control
 * @returns
 */
const renderControl = (control) => {
    return (react_1.default.createElement("input", Object.assign({ key: control.name }, control)));
};
exports.renderControl = renderControl;
//# sourceMappingURL=Control.js.map