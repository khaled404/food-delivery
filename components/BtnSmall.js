import React from 'react'
import { TouchableOpacity, Text  , StyleSheet  } from 'react-native'
import Size from '../Constants/Size'

const BtnSmall =prpos=> {
    return (
        <TouchableOpacity activeOpacity={.7} style={{...prpos.style , ...styles.btnSmall}} onPress={prpos.onPress}>
            <Text style={styles.title}> {prpos.title} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnSmall:{
        backgroundColor:'rgb(140, 200, 96)',
        width: Size('w',159),
        height: Size('h',55),
        borderRadius:100,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
    },
    title:{
        color:'#fff',
        fontFamily:'FB6',
        fontSize:Size('w',20)
    }
})
export default BtnSmall
