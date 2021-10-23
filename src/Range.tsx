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

import React from 'react';
import { Control, randomId } from './index';

export type RangeControl = Control & {
}

export const isRange = (arg: Control): arg is RangeControl => arg.type.toLowerCase() === 'range';

/**
 * Renders a range input.
 * 
 * @param {RangeControl} control
 * @returns 
 */
export const renderRange = (control: RangeControl) => {
    const { name } = control;

    return (
        <input key={name} type='range' {...control} />
    );
}
