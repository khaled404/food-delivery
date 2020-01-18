import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window');
const psdh =1575;
const psdw = 738;
const Size = (type , px) =>{
    if(type === 'w'){
        return (px/psdw)*width
    }else if(type === 'h'){
        return (px/psdh)*height
    }
}
export default Size;