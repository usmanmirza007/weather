
import DashBoard from './DashBoard';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import newDetail from './../component/newDetail';
import videoPlay from './../component/videoPlay';
const Route =  createStackNavigator({
    Home: {
        screen: DashBoard,
        navigationOptions: {
            header: null,
        },
    },
    newDetail: {
        screen: newDetail,
        navigationOptions: {
            header: null,
        },
    },
    videoPlay: {
        screen: videoPlay,
        navigationOptions: {
            header: null,
        },
    },

    
  })

export default createAppContainer(Route);

