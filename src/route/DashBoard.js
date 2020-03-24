import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation';
import Home from './../component/Home';
import SideMenu from './../route/SideMenu';
import video from './../component/video';
import news from './../component/news';
import selectCity from './../component/selectCity';

const DashBoard = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  video: {
    screen: video,
    navigationOptions: {
      header: null,
    },
  },
  selectCity: {
    screen: selectCity,
    navigationOptions: {
      header: null,
    },
  },
  news: {
    screen: news,
    navigationOptions: {
      header: null,
    },
  },

}, {
  drawerWidth: 250,
  initialRouteName: 'Home',
  contentComponent: SideMenu,
});


export default (DashBoard);

