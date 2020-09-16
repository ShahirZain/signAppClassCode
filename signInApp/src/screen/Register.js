import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import App from '../../App';

export const Register = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 38}}> Register</Text>
      <Text style={{fontSize: 15}}> please Fill Form</Text>

      <View style={{width: '80%', margin: 20}}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000"
          style={{backgroundColor: '#ccc'}}
        />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#000"
          style={{backgroundColor: '#ccc', marginTop: 20}}
        />
        <TextInput
          placeholder="Address"
          placeholderTextColor="#000"
          style={{backgroundColor: '#ccc', marginTop: 20}}
        />

        <View style={{marginTop: 20}} />
        <Button
          title="SUBMIT"
          onPress={() => {
            alert('Button Pressed');
          }}
        />
      </View>
    </View>
  );
};
