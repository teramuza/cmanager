import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, AsyncStorage, Alert } from 'react-native';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail } from 'native-base';

import { getStudents } from '../actions/student'

class Students extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	async componentDidMount(){
		const user = this.props.auth.data

		await this.props.dispatch(getStudents(user.token))
	}
    renderItem = ({item,index}) => {
        return(
        	<TouchableWithoutFeedback>
                <View style={styles.gridContainer}>
                   	<Icon name="account-group" type="MaterialCommunityIcons" style={{color: '#555', fontSize: 35}}/>
					<View style={{paddingHorizontal: 20}}>
						<Text style={styles.titleGrid}>{item.name}</Text>
						<Text style={{color: '#999', fontSize: 13}}>{item.email}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		)
    }


    _keyExtractor = (item, index) => index.toString();


	render(){
		const student = this.props.student
		// const user = this.props.auth.data
		return(
			<Container>
				<StatusBar hidden={false} translucent={false} barStyle="default" />

				<Header style={{backgroundColor: '#f5f5f5'}} androidStatusBarColor='#fff' iosBarStyle="dark-content"> 
    				<View style={{ flexDirection: 'row', flex : 1}}>
    					<View style={{flex : 1,paddingTop: 14}}>
    						<Icon name="chevron-left" type="MaterialIcons" style={{color: '#303030', paddingLeft: 3}} onPress={()=> this.props.navigation.goBack()}/>
    					</View>

    					<View style={{flex : 6, paddingTop: 17, alignItems: 'center'}}>
    						<Text>Students Manager</Text>
    					</View>

    					<View style={{flex : 1, paddingTop: 18}}>
    					</View>
    				</View>
    			</Header>

        		<Content style={{backgroundColor: '#fff'}}>
		            <View style={{marginVertical: 20}}>
        				{this.loadList(student)}
					</View>
		        </Content>
		    </Container>
		)
	}

	loadList(student){
		if(student.isLoading){
			return(
				<View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 230}}><Text style={{color: '#999', paddingTop: 5, fontSize: 18}}>Loading...</Text></View>
				)
		}else if(student.isError){
			return (
				<View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 200, flexDirection: 'column' }}>
					<Icon name="lan-disconnect" type="MaterialCommunityIcons" style={{color: '#999', fontSize: 50}}/>
					<Text style={{color: '#999', paddingTop: 5, fontSize: 18}}>Network Trouble</Text>
				</View>
			)
		}
		else{
			return(
				<FlatList
	                data={student.data}
	                keyExtractor={this._keyExtractor}
	                renderItem={this.renderItem}
	            />
            )
		}
	}

	priceToString(value){
        stringPrice = value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        return stringPrice
    }
}

const mapStateToProps = (state) => {
	return {
        auth: state.auth,
        student : state.students
	}
}

export default connect(mapStateToProps)(Students)

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