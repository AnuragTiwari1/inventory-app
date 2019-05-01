import React from 'react';
import { Input, Icon } from 'react-native-elements';
import Theme from '../Theme';
import AppText from '../common/AppText';

type propTypes = {
  field: any,
  onClear: () => void,
};

const Field = React.forwardRef((props, ref) => {
  const { field, onClear, ...rest } = props;
  return (
    <Input
      ref={ref}
      containerStyle={{ marginVertical: Theme.spacing.small }}
      inputContainerStyle={{
        borderRadius: Theme.spacing.base,
        borderWidth: 0.5,
        borderColor: field.error ? Theme.colors.danger : Theme.gray.dark,
      }}
      rightIcon={
        field.error ? (
          <Icon
            name="cross"
            type="entypo"
            color={Theme.colors.danger}
            onPress={onClear}
          />
        ) : null
      }
      rightIconContainerStyle={{ marginEnd: Theme.spacing.small }}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      errorMessage={field.error}
      leftIconContainerStyle={{ marginEnd: Theme.spacing.small }}
      {...rest}
    />
  );
});

export default Field;
