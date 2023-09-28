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
import { LabelControl } from ".";
export type Control = {
    type: string;
    label?: (string | LabelControl);
    name?: string;
    options?: Array<string>;
    disabled?: boolean;
};
export declare const isControl: (arg: Object) => arg is Control;
/**
 * Renders the actual control
 *
 * @param {Control} control
 * @returns
 */
export declare const renderControl: (control: Control) => JSX.Element;
