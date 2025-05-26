import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomInput
        inputIcon={"person"}
        iconColor={"white"}
        placeholder={"Kullanıcı adını giriniz"}
      />
      <CustomInput
        inputIcon={"mail"}
        iconColor={"white"}
        placeholder={"E-mail adresinizi giriniz"}
      />
      <CustomInput
        inputIcon={"key"}
        iconColor={"white"}
        placeholder={"Şifrenizi giriniz"}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
          paddingHorizontal: 15
        }}
      >
        <CustomButton title={"Kayıt Ol"} bgColor={"black"} />
        <CustomButton onPress={()=>navigation.navigate('SignInScreen')} title={"Giriş Yap"} bgColor={"black"} />
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
    justifyContent: "center"
  },
});
