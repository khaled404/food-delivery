import React from 'react'
import { TouchableOpacity, Text  , StyleSheet  } from 'react-native'
import Size from '../Constants/Size'

const BtnLg = prpos => {
    return (
        <TouchableOpacity activeOpacity={.7} style={{...prpos.style , ...styles.btnLg}} onPress={prpos.onPress}>
            <Text style={styles.title}> {prpos.title} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnLg:{
        backgroundColor:'rgb(255, 255, 255)',
        width: Size('w',372),
        height: Size('h',76),
        borderRadius:100,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
    },
    title:{
        color:'rgb(123, 189, 74)',
        fontFamily:'FB6',
        fontSize:Size('w',24)
    }
})
    
export default BtnLg
