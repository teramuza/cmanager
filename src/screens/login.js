import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { Alert, StatusBar, Image, BackHandler } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text } from 'native-base';

import { login } from '../actions/auth'
import HeadIcon from '../components/headIcon'


class Login extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	constructor(props) {
		super(props);
		
		this.state = {
			emailInput : '',
			passwordInput : '',
			nextScreen : 'home',
			where : 'login',
		};
	}

	render() {
		return (
			<Container>
			<StatusBar backgroundColor="#0e38a3" hidden={false} barstyle="light-content"/>
				<Content style={{backgroundColor: '#fff', paddingTop: 60}}>
					<HeadIcon/>
					<Form>
						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Email</Label>
							<Input 
								onChangeText={(emailInput) => this.setState({emailInput})} 
								placeholderTextColor="#969696"   
								placeholder="enter your email" 
								style={{fontSize: 13, color: '#2b2b2b'}}
								autoCapitalize = 'none'
								keyboardType="email-address"
							/>
						</Item>

						<Item stackedLabel>
							<Label style={{color: '#2b2b2b'}}>Password</Label>
							<Input 
								onChangeText={(passwordInput) => this.setState({passwordInput})} 
								placeholderTextColor="#969696" 
								style={{color: '#2b2b2b'}}
								secureTextEntry={true} 
								placeholder="････････"
							/>
						</Item>
					</Form>

					<View style={{paddingHorizontal: 20, paddingTop: 30}}>
						{this.buttonInput()}
						<View style={{paddingTop: 25, flexDirection: 'row' }}>
							<Left>
							</Left>

							<Right>
								<Text style={{color: '#4DB6AC', fontSize: 13}}>Forgot Password?</Text>
							</Right>
						</View>
					</View>
				</Content>
			</Container>
		)
	}

	buttonInput() {
		if(this.state.emailInput === '' || this.state.passwordInput === ''){
			return(	
				<Button disabled style={{borderRadius: 10, backgroundColor: '#dbdbdb'}} block>
					<Text style={{color: '#444'}}>Login</Text>
				</Button>
			)
		}else{
			return(
				<Button style={{borderRadius: 10, backgroundColor: '#2050c9'}} block onPress={() => this.handleLogin()}>
					<Text style={{color: '#f0f0f0'}}>Login</Text>
				</Button>
			)
		}
	}

	async handleLogin(){
		await this.props.dispatch(login({
			email : this.state.emailInput,
			password : this.state.passwordInput
		}));
		const loginInfo = this.props.auth.data
		if(loginInfo.token){

			const user = loginInfo.user
			try{
			await AsyncStorage.setItem('token', String(loginInfo.token))
			await AsyncStorage.setItem('userId', String(user.id))
			await AsyncStorage.setItem('userName', user.name)
			await AsyncStorage.setItem('userEmail', String(user.email))
			await AsyncStorage.setItem('refToken', String(loginInfo.refToken))

			this.props.navigation.navigate('contents')
			}catch(e){
				console.warn(e);
			}

		}
		else if(loginInfo.message){
			Alert.alert("Ups", loginInfo.message)
		}
		else{
			Alert.alert("Error", "An error occurred, please try again later.")
		}
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Login)