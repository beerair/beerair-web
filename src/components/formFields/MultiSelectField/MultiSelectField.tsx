import { isNil } from 'lodash';
import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import MultiSelect, { SelectOption } from './MultiSelect';

interface MultiSelectFieldProps<T = any> {
  name: string;
  options: SelectOption<T>[];
  height?: string;
  maxLength?: number;
  required?: boolean;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = <T extends any>({
  name,
  options,
  height,
  maxLength,
  required = false,
}: MultiSelectFieldProps<T>) => {
  const { control } = useFormContext();

  const rules = useMemo(
    () =>
      !isNil(maxLength)
        ? { validate: (value: T[]) => (value?.length || 0) <= maxLength, required }
        : { required },
    [maxLength, required],
  );

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur } }) => (
        <MultiSelect
          options={options}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          height={height}
          maxLength={maxLength}
        />
      )}
    />
  );
};

export default MultiSelectField;
