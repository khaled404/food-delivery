import React from 'react'
import { View, Text ,StyleSheet , Image , TouchableOpacity , TextInput , ScrollView  ,FlatList , I18nManager , Dimensions} from 'react-native'
import Images from '../Constants/Images'
import {FontAwesome5} from '@expo/vector-icons'
import Size from '../Constants/Size';
import Color from '../Constants/Color';
import {HOMEDATA} from '../data/dummy-data';
const {isRTL} = I18nManager;
const {width,height} = Dimensions.get('window');

const Home = () => {
    const RenderHomeItem = ({item})=>(
        <TouchableOpacity activeOpacity={.5} style={styles.contentBox}>
            <View style={styles.imagContainer}>
                <View style={styles.imag}>
                    <Image 
                        source={{uri:item.img}} 
                        style={styles.apiImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.shadow2}></View>
            </View>
            <Text style={styles.contentText}>{item.title}</Text>
        </TouchableOpacity>

    )
    const tobs =()=>{
        if (isRTL) {
            return(
                <ScrollView 
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    <TouchableOpacity activeOpacity={.7} style={{...styles.tabBox , backgroundColor:Color.color1}}>
                        <Text style={{...styles.tapText, color:'#fff'}}>جميع المنتجات</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                        <Text style={styles.tapText}>الخاصة</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                        <Text style={styles.tapText}>رشاقة</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                        <Text style={styles.tapText}>وجبات الأرز</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                        <Text style={styles.tapText}>الساندوتشات</Text>
                    </TouchableOpacity>
                </ScrollView>

            )
        } else {
            return(
            
                <ScrollView 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                
            >
                <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                    <Text style={styles.tapText}>الساندوتشات</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                    <Text style={styles.tapText}>وجبات الأرز</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                    <Text style={styles.tapText}>رشاقة</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={styles.tabBox}>
                    <Text style={styles.tapText}>الخاصة</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={{...styles.tabBox , backgroundColor:Color.color1}}>
                    <Text style={{...styles.tapText, color:'#fff'}}>جميع المنتجات</Text>
                </TouchableOpacity>

            </ScrollView>
            )

        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.topHeder}>
                    <Image
                        source={Images.LogoSm}
                        resizeMode="contain"
                        style={styles.logo}
                    />
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.IconBox}>
                            <View style={{...styles.iconNum,backgroundColor:'#f0c632'}}>
                                <Text style={styles.textNum}>2</Text>
                            </View>
                            <FontAwesome5 name="bell" size={Size('w',36)} color="rgb(79, 78, 78)" solid />
                        </TouchableOpacity>
                        <TouchableOpacity style={isRTL ?{ marginLeft:Size('w',37),...styles.IconBox} : { marginRight:Size('w',37),...styles.IconBox}} activeOpacity={.7}>
                            <View style={styles.iconNum}>
                                <Text style={styles.textNum}>0</Text>
                            </View>
                            <FontAwesome5 name="shopping-basket" size={Size('w',36)} color="rgb(79, 78, 78)"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchBox}>
                    <FontAwesome5 name="search" size={Size('w',19)} color="rgb(79, 78, 78)" style={styles.searchIcon}/>
                    <TextInput style={styles.searchInput} placeholder="تبغــى تــاكل ايــش؟" />
                </View>
                <View style={styles.shadow}></View>
            </View>
            <View style={styles.tabContainer}>
                {tobs()}
            </View>
            <View style={{height:'100%',width:'100%',marginRight:Size('w',30), marginLeft:Size('w',6),paddingBottom:Size('h',418),paddingTop:Size('h',5)}}>
                <FlatList 
                    data={HOMEDATA}
                    renderItem={({ item }) => <RenderHomeItem item={item} />}
                    numColumns="3"
                    showsVerticalScrollindicator={false}

                />
            </View>
            <View style={styles.bottomNavbar}>
                <TouchableOpacity activeOpacity={.7} style={styles.navBox}>
                    <FontAwesome5 name="user" solid size={Size('w',28)} color="rgb(189, 189, 189)" style={styles.navIcon}/>
                    <Text style={styles.navText}>حسابي</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={styles.navBox}>
                    <FontAwesome5 name="heart" solid size={Size('w',28)} color="rgb(189, 189, 189)" style={styles.navIcon}/>
                    <Text style={styles.navText}>مفضلتي</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={styles.navBox}>
                    <FontAwesome5 name="home" solid size={Size('w',28)} color={Color.color1} style={styles.navIcon}/>
                    <Text style={{...styles.navText, color:Color.color1}}>الرئيسية</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={styles.navBox}>
                    <FontAwesome5 name="percent" solid size={Size('w',28)} color="rgb(189, 189, 189)" style={styles.navIcon}/>
                    <Text style={styles.navText}>العروض</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={{...styles.navBox,marginRight:0}}>
                    <FontAwesome5 name="file-alt" solid size={Size('w',28)} color="rgb(189, 189, 189)" style={styles.navIcon}/>
                    <Text style={styles.navText}>طلباتي</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      position:'relative',
      backgroundColor:'#fff',
    },
    topHeder:{
        paddingHorizontal:Size('w',37),
        marginTop:Size('h',74),
        flexDirection: isRTL ? 'row' : 'row-reverse',
        justifyContent:'space-between',
        
    },
    logo:{
        width:Size('w',262),
        height:Size('h',73),
    },
    iconContainer:{
        flexDirection: isRTL ? 'row' : 'row-reverse',
        alignSelf:'center'
    },
    IconBox:{
        position:'relative',
    },
    iconNum:{
        position:'absolute',
        top:Size('h',-8),
        left: isRTL ? Size('w',-12) : undefined,
        right: isRTL ? undefined : Size('w',-12),
        borderRadius:50,
        backgroundColor:'rgb(123, 189, 74)',
        height:Size('w',20),
        width:Size('w',20),
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    textNum:{
        fontSize:Size('w',14),
        fontFamily:'FB6',
        color:'#fff',
    },
    searchBox:{
        width:Size('w',707),
        height:Size('h',60),
        alignSelf:'center',
        marginTop:Size('h',13),
        marginBottom:Size('h',17)
    },
    searchInput:{
        borderRadius:100,
        borderWidth:Size('w',2),
        borderColor:'rgb(235, 235, 235)',
        width:'100%',
        height:'100%',
        textAlign:'right',
        paddingHorizontal:Size('w',34),
        fontSize:Size('w',19),
        color:'rgb(192, 192, 192)',
        fontFamily:'FB6'
    },
    shadow:{
        position:'absolute',
        width:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        height:Size('h',5),
        bottom:Size('h',-7),
        opacity:.15,
        elevation:2,
    },
    searchIcon:{
        position:'absolute',
        right: isRTL ? Size('w',32) : undefined ,
        left: isRTL ? undefined : Size('w',32) ,
        top:Size('h',17),
    },
    tabContainer:{
        flexDirection: isRTL ? 'row' : 'row-reverse',
        marginTop:Size('h',20),
        height:Size('h',50),
    },
    tabBox:{
        backgroundColor:'rgb(242, 242, 242)',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginLeft:Size('w',5),
        paddingTop:Size('h',17),
        paddingBottom:Size('h',20),
        paddingHorizontal:Size('w',30),
        borderRadius:100,
    },
    tapText:{
        fontSize:Size('w',18),
        fontFamily:'FB6',
        color:'rgb(150, 150, 150)'
    },
    bottomNavbar:{
        flexDirection: isRTL ? 'row' : 'row-reverse',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        width:'100%',
        height:Size('h',112),
        backgroundColor:'#fff',
        borderWidth:Size('w',2),
        borderColor:'#f5f5f5',
        paddingHorizontal:Size('w',45)
    },
    navBox:{
        alignItems:'center',
        justifyContent:'center',
        marginRight: isRTL? Size('w',81) : 0,
        marginLeft: isRTL? 0 : Size('w',81) ,
    },
    navText:{
        fontSize:Size('w',18),
        fontFamily:'FB6',
        color:'rgb(189, 189, 189)',
    },
    content:{
        alignItems:'center',
        justifyContent:'center'
    },
    contentBox:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:Size('w',24),
        marginTop:Size('h',30),
        marginBottom:Size('h',6)
    },
    apiImage:{
        width:'100%',
        height:'100%',
    },
    imagContainer:{
        position:'relative'
    },
    imag:{
        paddingTop:Size('h',30),
        paddingBottom:Size('h',30),
        paddingHorizontal:Size('h',30),
        width:Size('w',210),
        height:Size('w',210),
        backgroundColor:'#fff', 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        position:'relative',
        zIndex:5,
        elevation:2,

    },
    shadow2:{
        position:'absolute',
        width: height <= 592 ? Size('w',210) :  Size('w',220),
        height: height <= 592 ? Size('w',210) :  Size('w',220),
        borderRadius:50,
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        zIndex:-1,
        bottom:Size('h',-5),
        left: height <= 592 ? Size('w',-2)  : Size('w',-5),
        opacity:.1,
        elevation:2,
    },
    contentText:{
        fontSize:Size('w',18),
        fontFamily:'FB6',
        color:'rgb(79, 78, 78)',
        marginTop:Size('h',10),
    }
});
export default Home;