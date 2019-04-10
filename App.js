import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator,createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/store';

import Splash from './src/screens/splash'
import Login from './src/screens/login'
import Home from './src/screens/home'
import Transactions from './src/screens/transactions'
import Setting from './src/screens/setting'

const AppContents = createBottomTabNavigator({
    //contentscreens here
    home : {
        screen : Home,
        navigationOptions :{
            title : 'Home',
        }
    },
    transactions : {
        screen : Transactions,
        navigationOptions :{
            title : 'Transactions',
        }
    },
    settings : {
        screen : Setting,
        navigationOptions :{
            title : 'Setting',
        }
    }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        
        let iconType = 'MaterialIcons';
        let iconName;
        if (routeName === 'home') {
            iconType = `MaterialCommunityIcons`;
            iconName = `home${focused ? '' : '-outline' }`;
        } 
        else if (routeName === 'transactions') {
            iconType = `MaterialCommunityIcons`;
            iconName = `cash${focused ? '-multiple' : ''}`;
        }
        else if (routeName === 'settings') {
            iconType = `MaterialCommunityIcons`;
            iconName = `settings${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <Icon type={iconType} name={iconName} size={24} color={tintColor} style={{color: tintColor}}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4f4f4f',
      inactiveTintColor: '#777',
      style:{
        paddingTop: 3,
        backgroundColor: '#f5f5f5',
      }
    },
    navigationOptions : {
        header : null,
    }
})

const AppNavigator = createSwitchNavigator({
    splash : {
        screen : Splash,
    },
    auth : {
      screen : Login,
    },
    contents : AppContents,
})

const AppRoot = createAppContainer(AppNavigator);

export default class Root extends Component {
    render(){
        return(
            <Provider store={store}>
                <AppRoot />
            </Provider>
        )
    }
}

