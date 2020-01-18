import React , {useState }from 'react';
import { StyleSheet, Text, View, Dimensions , Image, TouchableOpacity, Alert , I18nManager} from 'react-native';
import Color from '../Constants/Color';
import MapView , { Marker ,Callout} from 'react-native-maps';
import Images from '../Constants/Images';
import Size from '../Constants/Size';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
const {width,height} = Dimensions.get('window');
const {isRTL} = I18nManager;

const Map = props=> {
    const [mapLoction, setMapLoction] = useState('');
    const verfyPermissions = async ()=>{
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if(result.status !== 'granted'){
            Alert.alert('Insfufficient permissions','',[{text:'ok'}])
            return false
        }
        return true
    }
    const getLocation = async ()=>{
        const hasPermission = await verfyPermissions();
        if(!hasPermission){
            return;
        }
        try{
            const Loction = await Location.getCurrentPositionAsync({timeout:5000});
            setLoction({
                lat:Loction.coords.latitude,
                long:Loction.coords.longitude,
            })
            setMainLocation({
                latitude:Loction.coords.latitude,
                longitude:Loction.coords.longitude,
                latitudeDelta: 0,
                longitudeDelta: .03,
            })
            
        }catch(err){
            Alert.alert('could not fetch location','',[{text:'ok'}])
        }        
    }
    const [mainLocation, setMainLocation] = useState({
        latitude:24.719329,
        longitude:46.6882533,
        latitudeDelta: 0,
        longitudeDelta: .14,

    });
    const [Loction, setLoction] = useState({
        lat:24.69600,
        long:46.6775533,
    });
    
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
            region={mainLocation}
        >
            <Marker coordinate={{latitude:Loction.lat ,longitude:Loction.long }}  image={Images.Marker1}  />
            <Marker 
                coordinate={{latitude: 24.733000,longitude: 46.6845000}} 
                onPress={()=>{
                    setMapLoction('فرع حي الورود - بجانب المرسلات - الرياض');
                    setMainLocation({
                        latitude: 24.733000,
                        longitude: 46.6845000,
                        latitudeDelta: 0,
                        longitudeDelta: .14,                
                    })
                    
                }}  
                title="Food Delivery" 
                image={Images.Marker2}
            >
                <Callout>
                    <View >
                        <Text style={styles.calloutText}>فرع حي الورود - بجانب المرسلات - الرياض</Text>
                    </View>
                </Callout>
            </Marker>
            <Marker 
                coordinate={{latitude: 24.738500,longitude: 46.6455000}} 
                onPress={()=>{
                    setMapLoction('فرع حي الورود - بجانب جامعه الملك سعود - الرياض')
                    setMainLocation({
                        latitude: 24.738500,
                        longitude: 46.6455000,
                        latitudeDelta: 0,
                        longitudeDelta: .14,                
                    })

                }}  
                title="Food Delivery" 
                image={Images.Marker2}
            >
                <Callout>
                    <View >
                        <Text style={styles.calloutText}>فرع حي الورود - بجانب جامعه الملك سعود - الرياض</Text>
                    </View>
                </Callout>
            </Marker>
            <Marker 
                coordinate={{latitude: 24.797000,longitude: 46.7400000}} 
                onPress={()=>{
                    setMapLoction('فرع حي الورود - قرطبة - الرياض');
                    setMainLocation({
                        latitude: 24.797000,
                        longitude: 46.7400000,
                        latitudeDelta: 0,
                        longitudeDelta: .14,                
                    })


                }} 
                title="Food Delivery" 
                image={Images.Marker2} 
            >
                <Callout>
                    <View >
                        <Text style={styles.calloutText}>فرع حي الورود - قرطبة - الرياض</Text>
                    </View>
                </Callout>
            </Marker>
            <Marker 
                coordinate={{latitude: 24.664000,longitude: 46.7355000}} 
                onPress={()=>{
                    setMapLoction('فرع حي الورود - طريق الملك عبدالله - الرياض')
                    setMainLocation({
                        latitude: 24.664000,
                        longitude: 46.7355000,
                        latitudeDelta: 0,
                        longitudeDelta: .14,                
                    })


                }} 
                title="Food Delivery" 
                image={Images.Marker2} 
                onLoct
            >
                <Callout>
                    <View >
                        <Text style={styles.calloutText}>فرع حي الورود - طريق الملك عبدالله - الرياض</Text>
                    </View>
                </Callout>
            </Marker>

        </MapView>
        <View style={styles.box}>
            <TouchableOpacity
                    activeOpacity={.5}
                    style={styles.mapContainer}
                    onPress={()=>{
                        getLocation();
                    }}
                >
                    <Image
                        source={Images.MapIcon}
                        resizeMode="contain"
                        style={styles.mapIcon}
                    />
                </TouchableOpacity>

        </View>
        <View style={styles.contentContainer}>
            <View style={styles.calloutContainer}>
                <View style={styles.calloutTitle}>
                    <Text style={styles.title}>{mapLoction}</Text>
                </View>
                <View style={styles.shadow}></View>
            </View>
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.calloutBtn}
                onPress={()=> mapLoction.length > 0 ? props.navigation.navigate('Home') : Alert.alert('','من فضلك قم باختيار الفرع',[{text:'موافق'}] )}
            >
                <Text style={styles.calloutBtnText}>متابعة</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Color.color1,
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative'
    },
    mapStyle: {
        width: width,
        height: height,
    },
    calloutText:{
        color:Color.color1,
        fontSize:Size('w',20),
        fontFamily:'FB6',
    },
    contentContainer:{
        position:'absolute',
        bottom:0,
        width,
        height:Size('h',183),
        backgroundColor:'#fff',
    },
    calloutContainer:{
        position:'absolute',
        top:Size('h',-32),
        width:Size('w',700),
        height:Size('h',62),
        alignSelf:'center',

    },
    calloutTitle:{
        width:'100%',
        height:'100%',

        backgroundColor:'#fff',
        borderRadius:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:1,
        position:'relative',
        zIndex:5,
        justifyContent:'center',
        opacity:1
    },
    shadow:{
        position:'absolute',
        width:'101%',
        height:'101%',
        borderRadius:100,
        backgroundColor:'rgba(0, 0, 0, .1)',
        zIndex:-1,
        bottom:Size('h',-5),
        left:Size('w',-3),
        opacity:.2,
        elevation:1,
        tintColor:'#F00'
    
    },
    title:{
        color:'rgb(91, 91, 91)',
        fontSize:Size('w',17),
        fontFamily:'FR',
        paddingHorizontal:Size('w',37),
    },
    calloutBtn:{
        backgroundColor:'rgb(123, 189, 74)',
        width:Size('w',582),
        height:Size('h',65),
        justifyContent:'center',
        alignItems:"center",
        alignSelf:"center",
        borderRadius:100,
        marginTop:Size('h',62)
    },
    calloutBtnText:{
        fontSize:Size('w',22),
        color:'#fff',
        fontFamily:'FB6',
    },
    mapIcon:{
        width:Size('w',61),
        height:Size('h',61),
    },
    box:{
        width:Size('w',50),
        height:Size('h',115),
        position:'absolute',
        left: isRTL ? Size('w',19) : undefined,
        right: isRTL ? undefined  : Size('w',19) ,
        bottom:Size('h',183),
    }
});
export default  Map;