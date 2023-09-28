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
exports.renderEmail = exports.isEmail = void 0;
const react_1 = __importDefault(require("react"));
const isEmail = (arg) => arg.type.toLowerCase() === 'email';
exports.isEmail = isEmail;
/**
 * Renders a email input.
 *
 * @param {EmailControl} control
 * @returns
 */
const renderEmail = (control) => (react_1.default.createElement("input", Object.assign({ type: "email", key: control.name }, control)));
exports.renderEmail = renderEmail;
//# sourceMappingURL=Email.js.map