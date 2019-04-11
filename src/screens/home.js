import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail } from 'native-base';


class Home extends Component{
    static navigationOptions = ({ navigation }) => ({
        header: null,
    })

    constructor(props) {
        super(props);
    
        this.state = {
            date : undefined,
        };
    }

    stringDate(d = new Date()) {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"]
        const hours = `${d.getHours()}`
        const minutes = `${d.getMinutes()}`
        let h = '00'
        let m = '00'

        if(hours.length < 2){ h = `0${hours}`}
        else{ h = `${hours}`}

        if(minutes.length < 2) { m = `0${minutes}`}
        else{ m = `${minutes}`}
        const dateOut = {
            mon : `${month[d.getMonth()]}`, 
            date :`${d.getDate()}`, 
            year :`${d.getFullYear()}`, 
            day : `${day[d.getDay()]}`, 
            hour : h, 
            min : m,
            fullDate : d
        }
        return dateOut
	}

    componentWillMount(){
        this.today()
    }
    today(){
        const date = this.stringDate()
        curDate = `${date.mon} ${date.date}, ${date.year}`
        this.setState({date : curDate})

    }

    render() {
        const user = this.props.auth.data
    	return (
            <Container>
                <StatusBar backgroundColor='#fff' barStyle="default" animated={true}/>
                <Header searchBar style={{backgroundColor: '#f5f5f5', }} androidStatusBarColor='#fff' iosBarStyle="dark-content">
                    <Icon name="search" style={{color: '#444', marginTop: 14, marginLeft: 12}}/>
                    <Input 
                      placeholder="find something" 
                      placeholderTextColor="#444" 
                      style={{marginTop: 2, paddingLeft: 10, color: '#fcf3cf'}}
                    />
                </Header>
                
                <Content style={{backgroundColor: '#f9f9f9'}}>
                    <View style={{flexDirection: 'column', paddingTop: 18, height: 150, backgroundColor: '#fff'}}>
                        <Image source={require('../assets/img/headbg.png')} style={{width: '100%', height: '120%', position: 'absolute'}}/>

                        <View style={{ backgroundColor: 'transparent',  flexDirection: 'row', paddingLeft: 40, paddingVertical: 15, paddingBottom: 10}}>
                            <View>
                                <Image source={require('../assets/img/user.png')} style={{width: 60, height: 60, borderRadius: 100, borderWidth: 2, borderColor: '#fff'}}/>
                            </View>
                            <View style={{paddingLeft: 20, paddingBottom: 10}}>
                                <Text style={{color: '#fff', fontSize: 28, fontWeight:'100'}}>Hi, {user.name}</Text>
                                <Text style={{color: '#fff', fontSize: 20, paddingTop: 5}}>{this.state.date}</Text>
                                <Text style={{color: '#fff', fontSize: 12, paddingTop: 25}}>2 Teachers  |  3 Students  |  2 Courses</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginVertical: 20}}>
                    	<TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('teacher')}>
                    	<View style={styles.gridContainer}>
                    		<Icon name="account" type="MaterialCommunityIcons" style={{color: '#555', fontSize: 35}}/>
							<View style={{paddingHorizontal: 20}}>
								<Text style={styles.titleGrid}>Teachers Manager</Text>
								<Text style={{color: '#999', fontSize: 13}}>Manage data pengajar</Text>
							</View>
						</View>
						</TouchableWithoutFeedback>

                    	<TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('student')}>
                    	<View style={styles.gridContainer}>
                    		<Icon name="account-group" type="MaterialCommunityIcons" style={{color: '#555', fontSize: 35}}/>
							<View style={{paddingHorizontal: 20}}>
								<Text style={styles.titleGrid}>Students Manager</Text>
								<Text style={{color: '#999', fontSize: 13}}>Manage data pelajar</Text>
							</View>
						</View>
						</TouchableWithoutFeedback>

                    	<TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('courses')}>
						<View style={styles.gridContainer}>
                    		<Icon name="teach" type="MaterialCommunityIcons" style={{color: '#555', fontSize: 35}}/>
							<View style={{paddingHorizontal: 20}}>
								<Text style={styles.titleGrid}>Courses Manager</Text>
								<Text style={{color: '#999', fontSize: 13}}>Manage data kursus</Text>
							</View>
						</View>
						</TouchableWithoutFeedback>

                    	<TouchableWithoutFeedback>
						<View style={styles.gridContainer}>
                    		<Icon name="format-list-checks" type="MaterialCommunityIcons" style={{color: '#555', fontSize: 35}}/>
							<View style={{paddingHorizontal: 20}}>
								<Text style={styles.titleGrid}>Attendances Manager</Text>
								<Text style={{color: '#999', fontSize: 13}}>Manage data kehadiran</Text>
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
export default connect(mapStateToProps)(Home)

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