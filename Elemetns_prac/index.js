import React from 'react';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, View } from 'react-native';
//import {Button} from 'react-native-element';
import { Button, ThemeProvider , Text, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
//import LinearGradient from 'react-native-linear-gradient';

//import { Button,Avatar,Icon } from 'react-native-elements';

function Elemetns_prac(props) {
    return (

        <View style={styles.loginscreenContainer}>
            <Text h1 style={{fontWeight:'bold',color:'white', marginBottom:40,textAlign:'center',}}>Log In</Text>

            <Input 
            placeholder="faaris@gmail.com"
            keyboardType='email-address'
            style={{color:'white'}}
            leftIcon={{type:'font-awsome',name:'email', size:40, color:'white'}}>
              </Input>
              <Input 
            placeholder="Password"
            keyboardType='visible-password'
            secureTextEntry={true}
            type='password'
            style={{color:'white'}}
            leftIcon={{type:'font-awsome',name:'mail', size:40, color:'white'}}>
              </Input>

              <TouchableOpacity>
              <Text style={{alignSelf:'center',fontSize:24,color:'white'}}
              onPress={()=>console.warn('Have you forgotton the password?')}
              > Forgot Password? </Text>
              </TouchableOpacity>

              <Button 
              title="Log In" 
              type='solid' 
              containerStyle={{width:'100%',marginTop:20,}}
              buttonStyle={{borderColor:'red',}}
              /> 
              <TouchableOpacity>
              <Text style={{alignSelf:'center',fontSize:24,color:'white', marginTop:20,}}
              onPress={()=>console.warn('Want to Sign Up?')}
              > Sign Up?</Text>
              </TouchableOpacity>
              </View>
        
        
        
        );
}

export default Elemetns_prac;