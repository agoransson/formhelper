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
/// <reference types="react" />
import { Control } from '.';
/**
 * Renders a form group containing an optional label and a control.
 *
 * @param {object} control
 * @returns <Form.Group />
 */
export declare const renderGroup: (control: Control) => JSX.Element;
/**
 * Renders a row inside the form.
 *
 * @param {array} controls
 * @returns <Form.Row />
 */
export declare const renderRow: (controls: Array<Control>) => JSX.Element;
/**
 * Renders a complete form.
 *
 * @param {array} form      The form, should be defined as an array.
 */
export declare const renderForm: (controls: Array<(Control | Array<Control>)>) => JSX.Element[];
