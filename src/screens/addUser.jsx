import React from 'react';
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
const PickerContainer = ({ children }) => (
  <View
    style={{
      borderRadius: Theme.spacing.base,
      borderWidth: 0.5,
      borderColor: Theme.gray.dark,
      marginHorizontal: 13,
    }}>
    {children}
  </View>
);
export default () => {
  const emailField = useField('', emailTest);
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
          backgroundColor: 'yellow',
          justifyContent: 'space-between',
        }}>
        <PickerContainer>
          <Picker
            style={{ height: 50, width: '90%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </PickerContainer>
        <Field
          field={emailField}
          placeholder="Email"
          leftIcon={<Icon name="newsletter" type="entypo" />}
          keyboardType="email-address"
        />
      </Form>
      <Button full primary onPress={() => {}}>
        <AppText>Send Invite</AppText>
      </Button>
    </View>
  );
};
