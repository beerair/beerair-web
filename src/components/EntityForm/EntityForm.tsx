import React, { useCallback, useEffect } from 'react';
import {
  FormProvider,
  useForm,
  FieldValues,
  FieldNamesMarkedBoolean,
  SubmitHandler,
  UseFormProps,
} from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export interface EntityFormProps extends UseFormProps {
  onlyModifiedFields?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showDebug?: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
}

const EntityForm: React.FC<EntityFormProps> = ({
  onlyModifiedFields = false,
  children,
  footer,
  showDebug = true,
  onSubmit,
  className,
  ...useFormProps
}: EntityFormProps) => {
  const methods = useForm({ mode: 'onChange', ...useFormProps });
  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    formState: { dirtyFields },
    trigger,
  } = methods;

  const handleSubmit = useCallback(
    (data: FieldValues) => {
      onSubmit(onlyModifiedFields ? getModifiedValues(dirtyFields, data) : data);
    },
    [onSubmit, onlyModifiedFields, dirtyFields],
  );

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={hookFormHandleSubmit(handleSubmit)}>
        {children}
        {footer}
      </form>
      {showDebug && <DevTool control={control} />}
    </FormProvider>
  );
};

// 실제 수정된 값만 조회 가능하도록 구현
const getModifiedValues = (
  dirtyFields: FieldNamesMarkedBoolean<FieldValues>,
  data: FieldValues,
) => {
  const dirtyKeys = Object.entries(dirtyFields) // dirtyFields: { [filedName:string]: boolean (isDirty) }
    .filter(([, isDirty]) => isDirty)
    .map(([dirtyKey]) => dirtyKey);

  return dirtyKeys.reduce<FieldValues>((_data, key) => ({ ..._data, [key]: data?.[key] }), {});
};

export default EntityForm;
