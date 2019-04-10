import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, AsyncStorage, Alert } from 'react-native';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail } from 'native-base';

// import { logout } from '../../redux/actions/auth'


class Transactions extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	render(){
		// const user = this.props.auth.data
		return(
			<Container>
				<StatusBar hidden={false} translucent={false} barStyle="default" />

				<Header style={{backgroundColor: '#f5f5f5'}} androidStatusBarColor='#fff' iosBarStyle="dark-content">
					<View style={{paddingTop: 17}}>
                		<Text style={{color: '#303030', fontSize: 18, fontWeight:'600'}}>Transactions</Text>
            		</View>
        		</Header>

        		<Content style={{backgroundColor: '#fff'}}>
		            <View style={{marginVertical: 20}}>
                    	<TouchableWithoutFeedback>
                    	<View style={styles.gridContainer}>
                    		<Icon name="receipt" type="MaterialCommunityIcons" style={{color: '#555', fontSize: 35}}/>
							<View style={{paddingHorizontal: 20}}>
								<Text style={styles.titleGrid}>Payment</Text>
								<Text style={{color: '#999', fontSize: 13}}>History Students Transaction</Text>
							</View>
						</View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback>
                    	<View style={styles.gridContainer}>
                    		<Icon name="cash-multiple" type="MaterialCommunityIcons" style={{color: '#555', fontSize: 35}}/>
							<View style={{paddingHorizontal: 20}}>
								<Text style={styles.titleGrid}>Payroll</Text>
								<Text style={{color: '#999', fontSize: 13}}>Teachers Payroll</Text>
							</View>
						</View>
						</TouchableWithoutFeedback>
					</View>
		        </Content>
		    </Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
        auth: state.auth
	}
}

export default connect()(Transactions)

const styles = StyleSheet.create({
	gridContainer : {
		borderWidth: 0.1,
		borderRadius: 5,
		borderColor: '#BDBDBD',
		flex: 1, 
		flexDirection: 'row', 
		margin: 3, 
		marginBottom: 5,
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: '#fcfcfc'
	},
	titleGrid : {
		color: '#444', 
		fontSize: 18, 
		paddingBottom: 5
	}
})