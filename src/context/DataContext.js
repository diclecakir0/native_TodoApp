import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [avaibleUser, setAvaibleUser] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

//   const getUserInfo = async () => {
//       try {
//         const jsonValue = await AsyncStorage.getItem('newuser');
//         if(jsonValue){
//           const user=await JSON.parse(jsonValue);
//           setUserInfo(user);
//           console.log(userInfo)
//         }else{
//           console.log('Kullanıcı bilgisi bulunamadı');
//         }

//       } catch (e) {
//         console.log('Veri Getirme Hatası', e);
//       }
//   }
 
//       const getData = async () => {
//         try {
//           const jsonValue = await AsyncStorage.getItem('newuser');
//           const newu= await JSON.parse(jsonValue);
//          console.log('newuser',newu)
//           setUserInfo(newu);
//           return jsonValue != null ? JSON.parse(jsonValue) : null;
//         } catch (e) {
//           console.log('error', e)
// }
//       };
    
  // useEffect(()=>{
  //   getUserInfo()
  // }, [])

  return (
    <DataContext.Provider value={{ avaibleUser, setAvaibleUser,userInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  );
};