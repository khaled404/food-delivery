import React from 'react'
import { TouchableOpacity, Text  , StyleSheet  } from 'react-native'
import Size from '../Constants/Size'

const BtnLg = prpos => {
    return (
        <TouchableOpacity activeOpacity={.7} style={prpos.style} onPress={prpos.onPress}>
            <Text style={styles.title}> {prpos.title} </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    title:{
        color:'rgb(255, 255, 255)',
        fontFamily:'FR',
        fontSize:Size('w',24),
        borderBottomColor:'#fff',
        borderBottomWidth:Size('w',1),
    }
})
  
export default BtnLg
