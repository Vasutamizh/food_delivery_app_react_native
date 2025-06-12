import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { supabase } from '../utils/SupabaseClient';
import { Alert } from 'react-native';
import Loader from "../componenets/Loader";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 'auto',
    paddingTop: 10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  body:{
    marginTop: 10,
    marginLeft: 30,
    width: 300,
    height: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }});

function LoginScreen(): React.JSX.Element {

  const navigation = useNavigation();

    const [u_email, setEmail] = useState('');
    const [u_password, setPassword] = useState('');
    const [isLoading, setisLoading] = useState(false)

  const handleLogin = async () =>{
    if(u_email === '' || u_password === ''){
        return;
    }
    setisLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
        email: u_email,
        password: u_password,
    });
    console.log("Inside handle Login");
    if(data.user !== null){
      setisLoading(false)
      Alert.alert("Login Successful");
      navigation.navigate('Home');
    }
    else{
      setisLoading(false)
      Alert.alert(""+error?.message);
    }
  }
  
  return (
    <>
    { isLoading ? <Loader/> :
    <View style={styles.body}>
      <View>
      <Text style={{fontSize: 50, fontWeight: 'bold', marginBottom: 20, margin:'auto'}}>SignIn</Text>
      <TouchableOpacity style={{backgroundColor:'lightgrey', width: 270, margin:10, borderRadius: 10}}>
        <TextInput placeholder='Enter Email' value={u_email} onChangeText={text=>setEmail(text)} style={{fontSize: 20, padding: 15}} />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'lightgrey', margin:10, width: 270, borderRadius: 10}}>
        <TextInput placeholder='Enter Password' value={u_password} secureTextEntry={true} onChangeText={text=>setPassword(text)} style={{fontSize: 20, padding: 15}}/>
      </TouchableOpacity>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={{width: 270,padding: 8, backgroundColor: '#E35335', borderRadius: 20}}>
          <Text style={{color: 'white',textAlign: 'center', margin: 7, fontSize: 20}} onPress={handleLogin}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{margin: 'auto', fontSize: 16, marginTop: 20}} >Don't have an account? Sign Up</Text>
        </View>
    </View>
    }
    </>
  );
}


export default LoginScreen;