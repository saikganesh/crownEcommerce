import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './FormInputStyles';

const FormInput = ({ handleInputChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleInputChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;