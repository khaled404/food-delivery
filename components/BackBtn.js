import React from 'react'
import { TouchableOpacity , StyleSheet , I18nManager  } from 'react-native'
import Size from '../Constants/Size'
import {FontAwesome5} from '@expo/vector-icons';
const {isRTL} = I18nManager;

const BackBtn = prpos => {
    return (
        <TouchableOpacity style={ isRTL? styles.back  :styles.backEN } activeOpacity={.7}  onPress={prpos.onPress}>
            <FontAwesome5 name="chevron-left" size={Size('w',24)} color="#fff"/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    back:{
        backgroundColor:'rgb(216, 216, 216)',
        width:Size('w',70),
        height:Size('h',64),
        marginTop:Size('h',81),
        marginLeft:'auto',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
    },
    backEN:{
        backgroundColor:'rgb(216, 216, 216)',
        width:Size('w',70),
        height:Size('h',64),
        marginTop:Size('h',81),
        marginRight:'auto',
        alignItems:'center',
        justifyContent:'center',
        // borderTopRigtRadius:100,
        // borderBottomRiRadius:100,
        borderTopRightRadius:100,
        borderBottomRightRadius:100
    }
})
  
export default BackBtn
// //       "googleMaps": {
//     "apiKey": "AIzaSyCdltm3EvHn_AIbQBse6DVYKSHNC4ZeEGY"
// }
