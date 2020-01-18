import React ,{useState , useEffect} from 'react'
import {
    StyleSheet,
    View,
    Text ,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Animated,
    Keyboard,
    TouchableWithoutFeedback,
    I18nManager,
    Alert,
    Modal

} from 'react-native'
import Images from '../Constants/Images'
import Size from '../Constants/Size'
import BackBtn from '../components/BackBtn'
import {FontAwesome} from '@expo/vector-icons'
import Color from '../Constants/Color'
import {SendPasswordResetEmai} from '../auth/auth'
const {isRTL} = I18nManager;

const Forget = prpos => {
    const [emailFocus, setemailFocus] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)

    const [EmailText,setEmailTxet] = useState('')
    const [authError, setsAuthError] = useState()

    const [Error,setError] = useState(true)

    const [plascehoderEmail] = useState(new Animated.Value(0))
    const EmailValidattion = () => {
        if(EmailText.trim().length >0){
            const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            setError(expression.test(String(EmailText).toLowerCase()));
        }else{
            setError(true)
        }
    }

    useEffect(()=>{        
        if(emailFocus){
            Animated.timing(
                plascehoderEmail,
              {
                toValue: Size('h',-26),
                duration: 250,
              }
            ).start();
        }else if(!emailFocus){
            Animated.timing(
                plascehoderEmail,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();

        }
        if(EmailText.trim().length >0){
            Animated.timing(
                plascehoderEmail,
              {
                toValue: Size('h',-26),
                duration: 250,
              }
            ).start();
        }else if(!EmailText.trim().length >0 && !emailFocus){
            Animated.timing(
                plascehoderEmail,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();

        }
        
    },[emailFocus , EmailText])
    const sendResetEmaiHandler = async ()=>{
        if( EmailText.trim().length >0){
            setsAuthError(null)
            try{
                await SendPasswordResetEmai(EmailText)
                setModalOpen(true)
                
            }catch(err){
                setsAuthError(err.message)
            }
        }else{
            setError(false)

        }
    }
    useEffect(() => {
        if(authError) {
            Alert.alert('' , authError ,[{text:'موافق'}])
        }
    }, [authError])

    return (
        <View style={styles.container}>
            <Modal visible={modalOpen}>
                <View style={{...styles.container , paddingTop:Size('h',200)}}>
                    <Image source={Images.Logo} resizeMode="contain" style={{marginRight:'auto', marginLeft:'auto',...styles.logo}}/>
                    <View style={styles.boxTop}>
                        <Text style={styles.title}>تم الارسال</Text>
                        <Text style={styles.title}>يرجى التحقق من البريد الخاص بك</Text>
                    </View>
                    <TouchableOpacity activeOpacity={.7} style={styles.formBtn} onPress={()=>{prpos.navigation.goBack() ; setModalOpen(false)}}>
                        <Text style={styles.formBtnText} >تسجيل الدخول الان</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <BackBtn onPress={()=>prpos.navigation.goBack()}/>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <KeyboardAvoidingView  behavior="position" >
                    <Image source={Images.Logo} resizeMode="contain" style={{marginRight:'auto', marginLeft:'auto',...styles.logo}}/>
                    <View style={styles.boxTop}>
                        <Text style={styles.title}>استرجاع كلمة المرور</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <View  style={styles.form}>
                            <View style={{marginTop:Size('h',40),...styles.inputContainer}}>
                                <Animated.Text style={{ transform:[{translateY:plascehoderEmail}], ...styles.label}}>البريد الإلكتروني</Animated.Text>
                                <TextInput 
                                    style={{borderBottomColor: emailFocus ? '#7bbd4a' : !Error? Color.errorColor  : 'rgb(203, 203, 203)' ,...styles.input}}
                                    onFocus={()=>setemailFocus(true)}
                                    onBlur={()=>{setemailFocus(false) ; EmailValidattion()}}
                                    onChange={(email)=>setEmailTxet(email.nativeEvent.text)}
                                    value={EmailText}
                                />
                                <FontAwesome name="envelope" size={Size('w',24)} color={emailFocus ? '#7bbd4a' : !Error? Color.errorColor: "rgb(164, 164, 164)"} style={styles.inputIcon}/>
                                <Text style={styles.error}> {Error ?'': 'ادخل بريد إلكتروني صحيح (مثال: example@mail.com)' } </Text>
                            </View>
                            <TouchableOpacity activeOpacity={.7} style={styles.formBtn} onPress={()=>sendResetEmaiHandler()}>
                                <Text style={styles.formBtnText} >ارسال</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    logo:{
        width:Size('w',257),
        height:Size('h',257),
        marginTop:Size('h',25), 
    },
    boxTop:{
        marginTop:Size('h',80),
        width:'100%',
        alignItems:'center',
        alignItems:'center'
    },
    title:{
        fontSize:Size('w',36),
        fontFamily:'FB6',
    },
    formContainer:{
        width:Size('w',582),
    },
    form:{
        marginTop:Size('h',90),
    },
    inputContainer:{
        position:'relative',
    },
    input:{
        color:'#000',
        width:'100%',
        borderBottomWidth:Size('h',1),
        textAlign:'right',
        paddingBottom:Size('h',10),
        paddingTop:Size('h',12),
        fontSize:Size('w',20),
        fontFamily:'FB6',
        color:'rgb(79, 78, 78)',
    },
    label:{
        position:'absolute',
        left: isRTL ?  0 : undefined ,
        right: isRTL ?   undefined :  0 ,
        
        bottom:Size('h',30),
        fontFamily:'FR',
        fontSize:Size('w',20),
        color:'rgb(164, 164, 164)'
    },
    inputIcon:{
        position:'absolute',
        right: isRTL ?  0 : undefined ,
        left: isRTL ?   undefined :  0 ,
        bottom:Size('h',32),
    },
    formBtn:{
        width:Size('w',582),
        height:Size('h',65),
        backgroundColor:'rgb(123, 189, 74)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        marginTop:Size('h',58)
    },
    formBtnText:{
        fontSize:Size('w',22),
        fontFamily:'FB6',
        color:'rgb(255, 255, 255)',
    },
    error:{
        position:'absolute',
        bottom:Size('h',-37),
        fontSize:Size('w',18),
        left: isRTL ?  0 : undefined ,
        right: isRTL ?   undefined :  0 ,
        color:Color.errorColor
    }
});
export default Forget
