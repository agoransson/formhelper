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
exports.renderTextarea = exports.isTextarea = void 0;
const react_1 = __importDefault(require("react"));
const isTextarea = (arg) => arg.type.toLowerCase() === 'textarea';
exports.isTextarea = isTextarea;
/**
 * Renders a text area input.
 *
 * @param {TextareaControl} control
 * @returns
 */
const renderTextarea = (control) => (react_1.default.createElement("textarea", Object.assign({ type: 'textarea', key: control.name }, control)));
exports.renderTextarea = renderTextarea;
//# sourceMappingURL=Textarea.js.map