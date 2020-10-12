import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps138743Navigator from '../features/Maps138743/navigator';
import Add-Item138742Navigator from '../features/Add-Item138742/navigator';
import Maps138738Navigator from '../features/Maps138738/navigator';
import UserProfile138734Navigator from '../features/UserProfile138734/navigator';
import Settings138697Navigator from '../features/Settings138697/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps138743: { screen: Maps138743Navigator },
Add-Item138742: { screen: Add-Item138742Navigator },
Maps138738: { screen: Maps138738Navigator },
UserProfile138734: { screen: UserProfile138734Navigator },
Settings138697: { screen: Settings138697Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
