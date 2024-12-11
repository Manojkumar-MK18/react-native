/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const onPressLogin = () => {
    // Do something about login operation
    Alert.alert('HI');
    console.log('sf');
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          onChangeText={text =>
            setState({
              ...state,
              email: text,
            })
          }
          placeholder="Email"
          value={state.email}
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          value={state.password}
          onChangeText={text =>
            setState({
              ...state,
              password: text,
            })
          }
          placeholder="Password"
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.inputText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#3AB4BA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 800,
    color:'#fff',
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'red',
    fontWeight: 700,
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

export default App;
