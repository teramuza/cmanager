import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { Alert, StatusBar, Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text, Footer } from 'native-base'

import { setGlobal } from '../actions/auth'

class Splash extends Component {

	componentWillMount(){
		this.setGlobal()
	}

	async setGlobal(){
		try {
			const token = await AsyncStorage.getItem('token')
			const id = Number(await AsyncStorage.getItem('userId'))
			const name = await AsyncStorage.getItem('userName')
			const email = await AsyncStorage.getItem('userEmail')
			const refToken = await AsyncStorage.getItem('refToken')
			if(token == null || id == undefined || refToken ==  ''){
				await this.props.navigation.navigate('auth')
			}else{
				const user = {id, name, email, token, refToken}
				await this.props.dispatch(setGlobal(user))
				setTimeout(()=> this.props.navigation.navigate('contents'), 200)
			}
		}catch(e){
			this.props.navigation.navigate('auth')
		}
	}

	render() {
		return (
			<Container>
			<StatusBar  backgroundColor='#fff' barStyle="default" />
				<Content style={{backgroundColor: '#fff'}}>
					<View style={{alignItems: 'center', alignContent: 'center', paddingTop: '60%', flexDirection: 'column'}}>
						<Image style={{ height: 120, width: 120}} source={require('../assets/img/logo.jpeg')}/>
						<Text style={{color: '#999', paddingTop: 20, fontFamily: '', fontSize: 30 }}>CManager</Text>
					</View>
				</Content>
				<Footer style={{backgroundColor: '#fff'}}>
					<Text style={{color: '#969696', fontSize: 12}}>Copyright {'\u00A9'} 2019  by teramuza.xyz </Text>
				</Footer>
			</Container>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		auth : state.auth
	}
}
export default connect(mapStateToProps)(Splash)

