import React , {useState} from 'react';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import MainNav from './navigation/Navigation';
const fetchFont = () =>{
  return Font.loadAsync({
    'FL': require('./assets/fonts/FrutigerLTArabic-45Light.ttf'),
    'FR': require('./assets/fonts/FrutigerLTArabic-55Roman.ttf'),
    'FB6': require('./assets/fonts/FrutigerLTArabic-65Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return(
      <AppLoading
       startAsync={fetchFont} 
       onFinish={()=>setFontLoaded(true)} />
    )
  }
  return <MainNav/>;
}
