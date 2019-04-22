// @flow
import React from 'react';
import { Input, Item, Label, Icon } from 'native-base';
import useField from '../hooks/useFeilds';
import Theme from '../Theme';
import AppText from '../common/AppText';

type propTypes = {
  initialValue: string,
  validateAgainst: (t: string) => string,
  label: string,
  onClear?: () => void,
  field: any,
};
const Feild = (props: propTypes) => {
  const { field, label, onClear, ...rest } = props;
  return (
    <React.Fragment>
      <Item floatingLabel error={field.error.length > 0}>
        <Label>{label}</Label>
        <Input
          onBlur={field.onBlur}
          onChangeText={val => field.onChange(val)}
          value={field.value}
          {...rest}
        />
        {field.error.length > 0 && (
          <Icon name="close-circle" onPress={onClear} />
        )}
      </Item>
      {field.error.length > 0 ? (
        <AppText
          style={{
            color: Theme.colors.danger,
            marginStart: Theme.spacing.small,
          }}>
          {field.error}
        </AppText>
      ) : null}
    </React.Fragment>
  );
};
Feild.defaultProps = {
  onClear: () => {},
};
export default Feild;
