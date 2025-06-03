import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import { DataContext } from '../context/DataContext';


const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  const { avaibleUser, setAvaibleUser, userInfo  } = useContext(DataContext);

  const setUserStatus=()=>{
    if(userInfo){
      setAvaibleUser(true)
      console.log('Kullanıcı mevcut:', userInfo);
    }else{
      setAvaibleUser(false)
    }
  }

  useEffect(() => {
    setUserStatus();
},[]);



  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>

      {/*Eğer Kullanıcı giriş veya kayıt yapmışsa bottom navigatöre, yapmamışsa auth'a yönlendiriyor*/}
      {avaibleUser ? (
        <RootStack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      ) : (
        <RootStack.Screen name="AuthNavigation" component={AuthNavigation} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigation;