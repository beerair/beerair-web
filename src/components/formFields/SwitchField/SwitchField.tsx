import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Switch from '@/components/Switch';

interface SelectFieldProps {
  name: string;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ name, className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Switch onChange={onChange} defaultValue={value} className={className} />
      )}
    />
  );
};

export default SelectField;
