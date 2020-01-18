import React , {useState , useEffect} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    Image,
    Animated,
    I18nManager
} from 'react-native'
import Color from '../Constants/Color';
import Images from '../Constants/Images';
import BtnSmall from '../components/BtnSmall'
import Size from '../Constants/Size';
import BtnLg from '../components/BtnLg';
import Link from '../components/Link';
const {width,height} = Dimensions.get('window');
const {isRTL} = I18nManager;
 
const Walkthrough = props => {
  const [scrollX, setScrollX] = useState();
    const handleScroll = (e)=>{setScrollX(e.nativeEvent.contentOffset.x)  }
    const [opacityAnim1] = useState(new Animated.Value(0))
    const [opacityAnim2] = useState(new Animated.Value(0))
    const [opacityAnim3] = useState(new Animated.Value(0))
    const [opacityAnim4] = useState(new Animated.Value(0))
    const [opacityAnim5] = useState(new Animated.Value(0))
    const [textAnim1] = useState(new Animated.Value(20))
    const [textAnim2] = useState(new Animated.Value(20))
    const [textAnim3] = useState(new Animated.Value(20))
    const [textAnim4] = useState(new Animated.Value(20))
    const [textAnim5] = useState(new Animated.Value(20))
  
    useEffect(() => {
        if( isRTL&& scrollX ===width*2 || !isRTL && scrollX === 0){
            Animated.timing(
                opacityAnim1,
              {
                toValue: 1,
                duration: 250,
              }
            ).start();
            Animated.timing(
                opacityAnim2,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();

            Animated.timing(
                opacityAnim5,
              {
                toValue: 1,
                duration: 250,
              }
            ).start();
            // text
            Animated.timing(
                textAnim1,
              {
                toValue: 0,
                duration: 350,
              }
            ).start();
            Animated.timing(
                textAnim2,
              {
                toValue: 0,
                duration: 750,
              }
            ).start();
            Animated.timing(
                textAnim3,
              {
                toValue: 20,
                duration: 350,
              }
            ).start();
            Animated.timing(
                textAnim4,
              {
                toValue: 20,
                duration: 750,
              }
            ).start();

        }else if(scrollX=== width){
            Animated.timing(
                opacityAnim1,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();
            Animated.timing(
                opacityAnim2,
              {
                toValue: 1,
                duration: 250,
              }
            ).start();

            Animated.timing(
                opacityAnim3,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();
            Animated.timing(
                opacityAnim4,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();
            Animated.timing(
                opacityAnim5,
              {
                toValue: 1,
                duration: 0,
              }
            ).start();
            // text
            Animated.timing(
                textAnim1,
              {
                toValue: 20,
                duration: 350,
              }
            ).start();
            Animated.timing(
                textAnim2,
              {
                toValue: 20,
                duration: 750,
              }
            ).start();
            Animated.timing(
                textAnim3,
              {
                toValue: 0,
                duration: 350,
              }
            ).start();
            Animated.timing(
                textAnim4,
              {
                toValue: 0,
                duration: 750,
              }
            ).start();
            Animated.timing(
                textAnim5,
              {
                toValue: 20,
                duration: 750,
              }
            ).start();

        }else if( isRTL&& scrollX ===0 || !isRTL && scrollX === width*2){
            Animated.timing(
                opacityAnim1,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();
            Animated.timing(
                opacityAnim2,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();
            Animated.timing(
                opacityAnim3,
              {
                toValue: 1,
                duration: 250,
              }
            ).start();
            Animated.timing(
                opacityAnim4,
              {
                toValue: 1,
                duration: 350,
              }
            ).start();
            Animated.timing(
                opacityAnim5,
              {
                toValue: 0,
                duration: 250,
              }
            ).start();
            //text
            Animated.timing(
                textAnim3,
              {
                toValue: 20,
                duration: 350,
              }
            ).start();
            Animated.timing(
                textAnim4,
              {
                toValue: 20,
                duration: 750,
              }
            ).start();
            Animated.timing(
                textAnim5,
              {
                toValue: 0,
                duration: 750,
              }
            ).start();
        }
    }, [scrollX])
    const paginationHandel =()=>{
        if(isRTL&& !scrollX <= 0 ||!isRTL && scrollX <= width ){
            return(
                <Animated.View style={{opacity:opacityAnim5 }}>
                    <View style={{width,...styles.paginationContainer}}>
                        <View style={styles.pagination}>
                            <Animated.View style={{ opacity: opacityAnim1 , ...styles.paginationActive}}></Animated.View>
                        </View>
                            <View style={{ marginHorizontal:Size('w',4), ...styles.pagination}}>
                        <Animated.View style={{ opacity: opacityAnim2 , ...styles.paginationActive}}></Animated.View>
                        </View>
                        <View style={styles.pagination}>
                            <Animated.View style={{ opacity: opacityAnim3 , ...styles.paginationActive}}></Animated.View>
                        </View>
                    </View>
                </Animated.View>
            )
        }else if( isRTL&& scrollX <= 0 || !isRTL && scrollX ===width*2){
            return(
                <Animated.View style={{opacity:opacityAnim4 ,...styles.btnContainer}}>
                    <BtnLg title="تسجيل حساب جديد" style={{marginBottom:Size('h',34)}} onPress={()=>props.navigation.navigate('SingUp')}/>
                    <Link title="دخـــول" onPress={()=>props.navigation.navigate('SignIn')}/>
                </Animated.View>
            )
        }
    }
    return (
        <View style={styles.container}>
            <Animated.View style={{opacity:opacityAnim5 , ...styles.btnCon }} >
              <BtnSmall title="تخطي" onPress={()=>props.navigation.navigate('SignIn')}/>
            </Animated.View>

            <ScrollView 
                style={styles.container}
                pagingEnabled
                horizontal={true}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                disableIntervalMomentum={true}
                decelerationRate={0}
                snapToInterval={width}
                snapToAlignment={"center"}
                onScroll={handleScroll}
                persistentScrollbar
                directionalLockEnabled={false}
                onContentSizeChange={()=>{isRTL?setScrollX(width*2):setScrollX(0)}}
                >
                <View style={{width,height}}>
                    <View style={styles.screenHeader}>
                        <Image
                            source={Images.Iamg1}
                            resizeMode="contain"
                            style={styles.img1}
                        />
                        <View style={styles.textContainer}>
                            <Animated.Text style={{transform:[{translateY:textAnim1}], opacity:opacityAnim1 ,...styles.titleTop}}>اطلب أكلك بكل سهولة</Animated.Text>
                            <Animated.Text style={{transform:[{translateY:textAnim2}],opacity:opacityAnim1,...styles.titleBottom}}>لدينا قائمة طعام مشوقة</Animated.Text>
                        </View>
                    </View>
                </View>
                <View style={{width,height}}>
                    <View style={styles.screenHeader}>
                        <Image
                            source={Images.Iamg2}
                            resizeMode="contain"
                            style={styles.img2}
                        />
                        <View style={styles.textContainer}>
                            <Animated.Text style={{transform:[{translateY:textAnim3}], opacity:opacityAnim2 ,...styles.titleTop}}>نوصلك طلبك علي وجه السرعة</Animated.Text>
                            <Animated.Text style={{transform:[{translateY:textAnim4}],opacity:opacityAnim2,...styles.titleBottom}}>لدينا تغطية توصيل لجميع أنحاء المملكة</Animated.Text>
                        </View>
                    </View>
                </View>
                <View style={{width,height}}>
                    <View style={styles.screenHeader}>
                        <Image
                            source={Images.Iamg3}
                            resizeMode="contain"
                            style={styles.img3}
                        />
                        <View style={styles.textContainer}>
                            <Animated.Text style={{transform:[{translateY:textAnim5}], opacity:opacityAnim4 ,...styles.titleTop}}>سجل حساب الآن</Animated.Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {paginationHandel()}
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    position:'relative',
    backgroundColor:Color.color1,
    // textAlign:'right'
  },
  screenHeader:{
    flex:1,
    alignItems:'center',
    backgroundColor:Color.color1,
    zIndex:1
  },
  screnText:{
    flex:1,
    backgroundColor:Color.color1
  },
  textContainer:{
    marginTop:Size('h',68),
    justifyContent:'center',
    alignItems:'center'
  },
  titleTop:{
    color:'#fff',
    fontFamily:'FB6',
    fontSize:Size('w',48),
  },
  titleBottom:{
    marginTop:Size('h',8),
    color:'#fff',
    fontFamily:'FL',
    fontSize:Size('w',36),
  },
  paginationContainer:{
    position:'absolute',
    bottom:Size('h',150),
    zIndex:200,
    height:20,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  pagination:{
    width:Size('w',46),
    height:Size('h',9),
    backgroundColor:'rgb(154, 217, 107)',
    borderRadius:100,
    position:'relative',
    overflow:'hidden',
  },
  paginationActive:{
    position:'absolute',
    top:0,
    left:0,
    backgroundColor:'#fff',
    height:'100%',
    width:'100%',
  },
  btnContainer:{
    position:'absolute',
    bottom:Size('h',150),
    width,
    justifyContent:'center',
    alignItems:'center'
  },
  img1:{
    width:Size('w',600),
    height:Size('h',567),
    marginTop:Size('h',162),
  },
  img2:{
    width:Size('w',757),
    height:Size('h',567),
    marginTop:Size('h',162),
    marginRight: isRTL ? Size('w',133) : 0,
    marginLeft: isRTL ?  0 : Size('w',133) ,
  },
  img3:{
    width:Size('w',578),
    height:Size('h',567),
    marginTop:Size('h',162),
  },
  btnCon:{
    backgroundColor:Color.color1,
    marginTop:Size('h',75),
    marginLeft: isRTL ? Size('w',40) : 'auto',
    marginRight: isRTL? 0 : Size('w',40),

  }

});
export default Walkthrough
