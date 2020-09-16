import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import App from '../../App';

export const Login = ({navigation}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 38}}> Login</Text>
      <Text style={{fontSize: 15}}> please Signin to Continue </Text>

      <View style={{width: '80%', margin: 20}}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000"
          style={{backgroundColor: '#ccc'}}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#000"
          style={{backgroundColor: '#ccc', marginTop: 20}}
        />

        <View style={{marginTop: 20}} />
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
    </View>
  );
};
