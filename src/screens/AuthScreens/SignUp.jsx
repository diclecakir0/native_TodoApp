import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';


const SignUp = () => {
  const navigation = useNavigation();

  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onChangeText = (key, value) => {
    setNewUser({ ...newUser, [key]: value });
  };

  const handleSignUp = async (nuser) => {

    createUserWithEmailAndPassword(getAuth(), nuser.email, nuser.password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });


























    // try {
    //   const jsonValue = JSON.stringify(nuser);
    //   await AsyncStorage.setItem('newuser', jsonValue);
    //   setNewUser({
    //     userName: "",
    //     email: "",
    //     password: "",
    //   });
    //   console.log(nuser);
    // } catch (e) {
    //   console.log("Hata var:", e);
    // }




  
  };

  return (
    <View style={styles.container}>
      <CustomInput
        value={newUser.userName}
        inputIcon={"person"}
        iconColor={"white"}
        placeholder={"Kullanıcı adını giriniz"}
        onChangeText={(text) => onChangeText("userName", text)}
      />
      <CustomInput
        value={newUser.email}
        inputIcon={"mail"}
        iconColor={"white"}
        placeholder={"E-mail adresinizi giriniz"}
        onChangeText={(text) => onChangeText("email", text)}
      />
      <CustomInput
        value={newUser.password}
        inputIcon={"key"}
        iconColor={"white"}
        placeholder={"Şifrenizi giriniz"}
        onChangeText={(text) => onChangeText("password", text)}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
          paddingHorizontal: 15,
        }}
      >
        <CustomButton
          onPress={() => handleSignUp(newUser)}
          title={"Kayıt Ol"}
          bgColor={"black"}
        />
        <CustomButton
          onPress={() => navigation.navigate("SignInScreen")}
          title={"Giriş Yap"}
          bgColor={"black"}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8DD8FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#938a8a",
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.25,
    shadowRadius: 18.97,
    elevation: 23,
    justifyContent: "center",
  },
});
