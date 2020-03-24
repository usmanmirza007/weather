import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import logo from './../image/logo.png'
const {width: WIDTH} = Dimensions.get('window')
export default class SignIn extends React.Component {
    render(){
        return (
            <View style={styles.container}>

            <ImageBackground style = {{width: '100%', height: '100%'}}>
            <View style = {{backgroundColor: '#000', height: '4%'}}></View>
              <Image
                style={{width: '70%', alignSelf: 'center', marginTop: '-25%'}} resizeMode= 'contain'
                source={logo}
              />
              <View style = {{marginTop: '-30%', alignItems: 'center',}}>
                <Text>Lorem ipsom dolr sit amet, Consectetur </Text>
                <Text>adipising elit, send to</Text>
              </View>

              <View style = {{alignSelf: 'flex-start', marginLeft: 30, marginBottom: 10, marginTop: 20}}>
                <Text style = {styles.signText}>Sign in Here</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={'Email'}
                  placeholderTextColor={'#FFA726'}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={'Password'}
                  placeholderTextColor={'#FFA726'}
                  
                />
              </View>
              <View style = {styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress = {
                    () => this.props.navigation.navigate('Home')
                  }
                >
                  <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
              </View>
              <View style = {styles.bottumTextContainer}>
                <Text style = {{fontSize: 11, marginLeft: 28}}>Not Member Yet?</Text>
                <TouchableOpacity
                onPress={
                  () => this.props.navigation.navigate('SignUp')
                }
                  >
                    <Text style={styles.signUpNowText}>Sign Up Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={
                  () => this.props.navigation.navigate('Forget')
                }
                  >
                    <Text style={{marginLeft: 35}}>Forget Password</Text>
                </TouchableOpacity>
              </View>
              </ImageBackground>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inputContainer:{
    alignItems: 'center',
  },
  input:{
    width:  WIDTH - 55,
    height: 50, 
    padding: 15,
    marginBottom: 10, 
    borderWidth: 2,
    borderColor: '#FFA726',
    borderRadius: 5
  },
  signText:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonContainer:{
    alignItems: 'center',
    marginTop: 5,
  },
  Button:{
    
  },
  buttonText:{
    height: 50,
    fontSize: 22,
    color: '#FFA726',
    textAlignVertical: 'center',
    textAlign: 'center',
    width:  WIDTH - 55,
    backgroundColor: '#263238',
    borderRadius: 5
  },
  bottumTextContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  signUpNowText:{
    color: '#FFA726',
    textDecorationLine: 'underline'
  }
});