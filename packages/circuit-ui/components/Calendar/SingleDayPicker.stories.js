/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState } from 'react';

import SingleDayPicker from './SingleDayPicker';

export default {
  title: 'Forms/Calendar/SingleDayPicker',
  component: SingleDayPicker,
};

export const Base = (args) => {
  const [date, setDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <SingleDayPicker
      {...args}
      date={date}
      onDateChange={setDate}
      focused={focusedInput}
      onFocusChange={({ focused }) => setFocusedInput(focused)}
    />
  );
};
