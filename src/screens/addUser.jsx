import React, { useState, useRef } from 'react';
import { View, Picker } from 'react-native';
import { Form, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import AppText from '../common/AppText';
import Theme from '../Theme';
import Field from '../component/validationFeild';
import useField from '../hooks/useFeilds';
import { emailTest } from '../utils/validation';

const PageText = ({ children }) => (
  <AppText style={{ color: Theme.gray.light, textAlign: 'center' }}>
    {children}
  </AppText>
);
const PickerContainer = ({ children, leftIcon }) => (
  <View
    style={{
      borderRadius: Theme.spacing.base,
      borderWidth: 0.5,
      borderColor: Theme.gray.dark,
      marginHorizontal: 13,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <View style={{ marginStart: Theme.spacing.small, flex: 0 }}>
      {leftIcon}
    </View>
    {children}
  </View>
);
export default () => {
  const emailField = useField('', emailTest);
  const [userType, setUserType] = useState(0);
  const emailRef = useRef(React.createRef);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Theme.spacing.base,
      }}>
      <PageText>
        Add employees to app to assign roles.{'\n'}
        Employee will recieve invitation mail
      </PageText>

      <Form
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 200,
          justifyContent: 'space-between',
        }}>
        <PickerContainer
          leftIcon={<Icon name="assignment-ind" type="material" size={27} />}>
          <Picker
            selectedValue={userType}
            style={{ flex: 1, height: 50, marginStart: Theme.spacing.tiny }}
            onValueChange={itemValue => setUserType(itemValue)}>
            <Picker.Item label="Super Admin" value={0} />
            <Picker.Item label="Phase Supervisor" value={1} />
            <Picker.Item label="line Supervisor" value={2} />
          </Picker>
        </PickerContainer>
        <Field
          ref={emailRef}
          field={emailField}
          placeholder="Email"
          leftIcon={<Icon name="newsletter" type="entypo" />}
          keyboardType="email-address"
          onClear={() => {
            emailRef.current.clear();
            emailRef.current.focus();
          }}
        />
      </Form>
      <Button full primary onPress={() => {}}>
        <AppText>Send Invite</AppText>
      </Button>
    </View>
  );
};
