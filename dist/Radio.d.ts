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
import { Control } from ".";
export declare type RadioControl = Control & {
    labels: Array<string>;
};
export declare const isRadio: (arg: Control) => arg is RadioControl;
/**
 * Renders a radio group.
 *
 * @param {RadioControl} control
 * @returns
 */
export declare const renderRadio: (control: RadioControl) => JSX.Element;
