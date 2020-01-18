import {createAppContainer , createStackNavigator ,createSwitchNavigator } from 'react-navigation';
import Walkthrough from '../screens/Walkthrough'
import SignIn from '../screens/SignIn'
import SingUp from '../screens/SingUp'
import Forget from '../screens/Forget'
import Map from '../screens/Map'
import Home from '../screens/Home'

const MainNav  = createStackNavigator({
    Walkthrough,
    SignIn,
    SingUp,
    Forget,

} , {
    headerMode : "none",
});
const mapNav = createStackNavigator({
    Map,
    Home, 
} , {
    headerMode : "none",
})
const switchNav = createSwitchNavigator({
    MainNav,
    mapNav,
    SignIn,
    SingUp,
    Map,

} , {
    headerMode : "none",
})
export default createAppContainer(switchNav);
