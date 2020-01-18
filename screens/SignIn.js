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
    Alert

} from 'react-native'
import Images from '../Constants/Images'
import Size from '../Constants/Size'
import BackBtn from '../components/BackBtn'
import {FontAwesome} from '@expo/vector-icons'
import Color from '../Constants/Color';
import {signin , signInAsync , signInWithFacebook} from '../auth/auth'
const {isRTL} = I18nManager;

const SignIn = props => {
    const [emailFocus, setemailFocus] = useState(false);
    const [passFocus, setpassFocus] = useState(false);
    const [EmailText,setEmailTxet] = useState('')
    const [passText,setpassTxet] = useState('')
    const [Error,setError] = useState(true)
    const [passError,setPassError] = useState(false)
    const [authError, setsAuthError] = useState()

    const [plascehoderEmail] = useState(new Animated.Value(0))
    const [plascehoderPass] = useState(new Animated.Value(0))
        const EmailValidattion = () => {
            if(EmailText.trim().length >0){
                const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                setError(expression.test(String(EmailText).toLowerCase()));
            }else{
                setError(false)
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
            Animated.timing(
                plascehoderPass,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();

        }else if(passFocus){
            Animated.timing(
                plascehoderEmail,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();
            Animated.timing(
                plascehoderPass,
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

        }else if(!passFocus){
            Animated.timing(
                plascehoderPass,
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
        if(passText.length >0){
            Animated.timing(
                plascehoderPass,
              {
                toValue: Size('h',-26),
                duration: 250,
              }
            ).start();
        }else if(!passText.length >0 && !passFocus){
            Animated.timing(
                plascehoderPass,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();

        }

    },[emailFocus,passFocus , EmailText ,passText])
    const passvlid = () =>{
        if(passText.trim().length < 6){
            setPassError(true)
        }else{
            setPassError(false)
        }
    }
    const signinHandler = async ()=>{
        if( EmailText.trim().length >0 && passText.trim().length >0){
            setsAuthError(null)
            try{
                await signin(EmailText, passText)
                props.navigation.navigate('Map')
            }catch(err){
                setsAuthError(err.message)
            }
        }else{
            setError(false)
            setPassError(true)

        }
    }
    const googleSignin = async () =>{
        setsAuthError(null)
        try{
            await signInAsync()
            props.navigation.navigate('Map')

        }catch(err){
            setsAuthError(err.message)
        }
    }
    const facebookSignin = async () =>{
        setsAuthError(null)
        try{
            await signInWithFacebook()
            props.navigation.navigate('Map')

        }catch(err){
            setsAuthError(err.message)
        }
    }

    useEffect(() => {
        if(authError) {
            Alert.alert('' , authError ,[{text:'موافق'}])
        }
    }, [authError])
  

    return (
        <View style={styles.container}>
            <BackBtn onPress={()=>props.navigation.goBack()}/>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <KeyboardAvoidingView  behavior="position" >
                    <Image source={Images.Logo} resizeMode="contain" style={{marginRight:'auto', marginLeft:'auto',...styles.logo}}/>
                    <View style={styles.boxTop}>
                        <Text style={styles.title}>سجل دخول لحسابك عن طريق</Text>
                        <View style={ isRTL ? styles.btnContainer : {...styles.btnContainer , flexDirection:'row-reverse'}}>
                            <TouchableOpacity activeOpacity={.7} style={{...styles.Google, ...styles.socialBtn}} onPress={()=> googleSignin()} >
                                <Image source={Images.GoogleLogo} resizeMode="contain" style={styles.googleIcon}/>
                                <Text style={styles.googleText}>حساب جوجل</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={.7} style={{...styles.faseBook, ...styles.socialBtn}} onPress={()=>  facebookSignin()}>
                                <FontAwesome name="facebook-f" size={Size('w',22)} color="#fff" style={styles.icon}/>
                                <Text style={styles.fbText}>حساب فيسبوك</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.topHeader}>
                            <View style={styles.line}></View>
                            <View style={styles.lineTextContaner}>
                                <Text style={styles.lineText}>أو عن طريق</Text>
                            </View>
                        </View>
                        <View  style={styles.form}>
                            <View style={styles.inputContainer}>
                                <Animated.Text style={{ transform:[{translateY:plascehoderEmail}], ...styles.label}}>البريد الإلكتروني</Animated.Text>
                                <TextInput 
                                    style={{borderBottomColor: emailFocus ? '#7bbd4a' : !Error? Color.errorColor  : 'rgb(203, 203, 203)' ,...styles.input}}
                                    onFocus={()=>setemailFocus(true)}
                                    onBlur={()=>{setemailFocus(false) ; EmailValidattion()}}
                                    onChange={(email)=>setEmailTxet(email.nativeEvent.text)}
                                    value={EmailText}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                                <FontAwesome name="envelope" size={Size('w',24)} color={emailFocus ? '#7bbd4a' : !Error? Color.errorColor: "rgb(164, 164, 164)"} style={styles.inputIcon}/>
                                <Text style={styles.error}> {Error ?'': 'ادخل بريد إلكتروني صحيح (مثال: example@mail.com)' } </Text>
                            </View>
                            <View style={{marginTop:Size('h',40),...styles.inputContainer}}>
                                <Animated.Text style={{ transform:[{translateY:plascehoderPass}], ...styles.label}}>كلمة المرور</Animated.Text>
                                <TextInput
                                    style={{borderBottomColor: passFocus ? '#7bbd4a' : passError? Color.errorColor : 'rgb(203, 203, 203)',...styles.input}}
                                    secureTextEntry={true}
                                    onFocus={()=>setpassFocus(true)}
                                    onBlur={()=>{setpassFocus(false) ; passvlid()}}
                                    onChange={(pass)=>setpassTxet(pass.nativeEvent.text)}
                                    value={passText}
                                />
                                <FontAwesome name="lock" size={Size('w',26)} color={passFocus ? '#7bbd4a' : passError? Color.errorColor :  "rgb(164, 164, 164)"} style={styles.inputIcon}/>
                                <Text style={styles.error}> {!passError ?'': 'الرجاء ادخال كلمه المرور' } </Text>
                            </View>
                            <TouchableOpacity activeOpacity={.7} style={styles.forget} onPress={()=>props.navigation.navigate('Forget')}>
                                <Text style={styles.forgetText}>هل نسيت كلمة المرور؟</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={.7} style={styles.formBtn} onPress={()=>signinHandler()}>
                                <Text style={styles.formBtnText} >دخول</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <View style={styles.copyContaner}>
                <Text style={styles.copy}>© 2019 جميع الحقوق محفوظة. مؤسسة تسوق لتقنية المعلومات المملكة العربية السعودية</Text>
            </View>
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
    btnContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:Size('h',45)
    },
    socialBtn:{
        width:Size('w',284),
        height:Size('h',65),
        borderRadius:100,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        flexDirection: isRTL ? 'row' :'row-reverse'
    },
    faseBook:{
        marginLeft: Size('w',14),
        backgroundColor:'rgb(57, 86, 147)'
    },
    fbText:{
        color:'#fff',
        fontFamily:'FB6',
        fontSize:Size('w',18),
        alignSelf:"center"
    },
    icon:{
        alignSelf:'center',
        marginRight: isRTL ? Size('w',12) : 0,
        marginLeft:isRTL ? 0: Size('w',12) 
    },
    Google:{
        borderColor:'rgb(242, 242, 242)',
        borderWidth:Size('w',2)
    },
    googleIcon:{
        width:Size('w',22),
        height:Size('h',22),
        alignSelf:'center',
        marginRight: isRTL ? Size('w',12) : 0,
        marginLeft:isRTL ? 0: Size('w',12) 
    },
    googleText:{
        alignSelf:'center',
        fontFamily:'FB6',
        fontSize:Size('w',18),
        color:'rgb(164, 164, 164)'
    },
    formContainer:{
        width:Size('w',582),
    },
    topHeader:{
        marginTop:Size('h',54),
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'rgb(237, 237, 237)',
        position:'absolute',
        bottom:'38%',
    },
    lineTextContaner:{
        width:Size('w',129),
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    lineText:{
        color:'rgb(164, 164, 164)',
        fontSize:Size('w',18),
        fontFamily:'FL'
    },
    form:{
        marginTop:Size('h',90)
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
    forget:{
        marginTop:Size('h',28)
    },
    forgetText:{
        fontSize:Size('w',18),
        fontFamily:'FR',
        color:'rgb(79, 78, 78)'
    },
    formBtn:{
        width:Size('w',582),
        height:Size('h',65),
        backgroundColor:'rgb(123, 189, 74)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        marginTop:Size('h',53)
    },
    formBtnText:{
        fontSize:Size('w',22),
        fontFamily:'FB6',
        color:'rgb(255, 255, 255)',
    },
    copyContaner:{
        width:Size('w',582),
        position:'absolute',
        bottom:Size('h',92),
    },
    copy:{
        fontSize:Size('w',20),
        color:'rgb(164, 164, 164)',
        textAlign:'center',
        fontFamily:'FL'
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
export default SignIn;