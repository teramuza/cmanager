import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, Alert } from 'react-native';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail } from 'native-base';

import { logout } from '../actions/auth'


class Setting extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	render(){
		const user = this.props.auth.data
		return(
			<Container>
				<StatusBar hidden={false} translucent={false} barStyle="default" />

				<Header searchBar rounded style={{backgroundColor: '#f5f5f5'}} androidStatusBarColor='#fff' iosBarStyle="dark-content">
					<View style={{paddingTop: 17}}>
                		<Text style={{color: '#303030', fontSize: 18, fontWeight:'600'}}>Setting</Text>
            		</View>
        		</Header>

        		<Content style={{backgroundColor: '#fff'}}>
		            <List>
		              <ListItem noBorder style={{paddingVertical: 5}}>
		                  <View style={{}}>
		                    <Text style={{fontSize: 14, color: '#303030'}}>Email</Text>
		                    <Text style={{fontSize: 13, color: '#969696'}}>{user.email}</Text>
		                  </View>
		              </ListItem>
		              <ListItem noBorder style={{paddingVertical: 5}}>
		                  <View>
		                      <Text style={{fontSize: 14, color: '#303030'}}>About</Text>
		                      <Text style={{fontSize: 13, color: '#969696'}}>Versi CManager 0.1.0-12_bc</Text>
		                  </View>
		                  
		              </ListItem>
		              <View style={{borderBottomWidth: 1, borderBottomColor: '#ddd', margin: 15}}/>
		              <ListItem noBorder style={{paddingVertical: 10}}>
		                    <View style={{flexDirection: 'row'}} >
		                      <Icon name="thumbs-up" style={{color: '#303030'}}/>
		                      <Text style={{fontSize: 14, color: '#303030', paddingTop: 7, paddingLeft: 12}}>Give Feedback</Text>
		                    </View>
		              </ListItem>
		              <ListItem noBorder style={{paddingVertical: 10}}>
		                    <View style={{flexDirection: 'row'}} >
		                      <Icon name="people" style={{color: '#303030'}}/>
		                      <Text style={{fontSize: 14, color: '#303030', paddingTop: 7, paddingLeft: 12}}>Join the Community</Text>
		                    </View>
		              </ListItem>
		              <ListItem noBorder style={{paddingVertical: 10}}>
		                    <View style={{flexDirection: 'row'}} >
		                      <Icon name="appstore" style={{color: '#303030'}}/>
		                      <Text style={{fontSize: 14, color: '#303030', paddingTop: 7, paddingLeft: 12}}>Review Us on PlayStore</Text>
		                    </View>
		              </ListItem>
		              <ListItem noBorder style={{paddingVertical: 10}}>
		                    <View style={{flexDirection: 'row'}} >
		                      <Icon name="globe" style={{color: '#303030'}}/>
		                      <Text style={{fontSize: 14, color: '#303030', paddingTop: 7, paddingLeft: 12}}>Visit cmanager.teramuza.xyz</Text>
		                    </View>
		              </ListItem>
		              <ListItem noBorder style={{paddingVertical: 10}} onPress={()=> this.confirmLogout()}>
		                    <View style={{flexDirection: 'row'}} >
		                      <Icon name="power" style={{color: '#303030'}}/>
		                      <Text style={{fontSize: 14, color: '#303030', paddingTop: 7, paddingLeft: 12}}>Logout</Text>
		                    </View>
		              </ListItem>
		            </List>
		        </Content>
		    </Container>
		)
	}

	confirmLogout(){
    	Alert.alert(
            'Logout',
            'Are you sure you want to log out?',
            [
                {text: 'No'},
                {text: 'Yes', onPress: async () => {
                    const token = this.props.auth.data.token
                    const refreshToken = this.props.auth.data.refToken
                    
                    await this.props.dispatch(logout(token, refreshToken))
                    await AsyncStorage.clear()
                    this.props.navigation.navigate('splash')
                }
                },
            ]
        )
	}
}

const mapStateToProps = (state) => {
	return {
        auth: state.auth
	}
}

export default connect(mapStateToProps)(Setting)
