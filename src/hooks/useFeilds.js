// @flow
import React, { useState } from 'react';

const useField = (initialValue: string, validation: (v: string) => string) => {
  const [value, dispatchValue] = useState(initialValue || '');
  const [error, dispatchError] = useState('');
  const [dirty, dispatchDirty] = useState(false);

  const onBlur = () => {
    dispatchDirty(true);
    dispatchError(validation(value));
  };

  const onChange = (val: string) => {
    dispatchValue(val);
    if (dirty) {
      dispatchError(validation(val));
    }
  };

  const validate = (): Promise<boolean> => {
    return Promise.resolve(validation(value)).then(err => {
      if (!err) dispatchDirty(true);
      dispatchError(err);

      return !err;
    });
  };

  return {
    onChange,
    onBlur,
    value,
    error,
    dirty,
    validate,
  };
};

export default useField;
