import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Modal, FlatList, KeyboardAvoidingView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, Feather, FontAwesome5, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
const { width: WIDTH } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class Home extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            selectedIndex: 0,
            showMe: false,
            avatarSource: [
                { id: 1, iconcloud: 'cloud-showers-heavy', textLarge: '24', iconDegree: 'circle-thin', textSmall: ' / 20 ', day: 'Monday, May 12' },
            ],
            dayData: [
                { id: 1, day: 'Mon', iconcloud: 'sun', textLarge: '24', iconDegree: 'circle-thin', },
                { id: 2, day: 'Tue', iconcloud: 'cloud-lightning', textLarge: '18', iconDegree: 'circle-thin', },
                { id: 3, day: 'Wed', iconcloud: 'sun', textLarge: '28', iconDegree: 'circle-thin', },
                { id: 4, day: 'Thu', iconcloud: 'cloud-lightning', textLarge: '21', iconDegree: 'circle-thin', },
                { id: 5, day: 'Fri', iconcloud: 'cloud-rain', textLarge: '16', iconDegree: 'circle-thin', },
                { id: 6, day: 'Sat', iconcloud: 'sun', textLarge: '27', iconDegree: 'circle-thin', },
                { id: 7, day: 'Sun', iconcloud: 'cloud-rain', textLarge: '17', iconDegree: 'circle-thin', },
            ]
        };
    }
    renderRow = ({ item, }) => {
        return (
            <View style={styles.weatherView}>
                <View style={{ marginTop: wp('20%') }}>
                    <FontAwesome5 name={item.iconcloud} color='#fff' size={70}
                        onPress={
                            () => this.props.navigation.openDrawer()
                        } />
                </View>
                <View style={styles.mainView}>
                    <View style={styles.textView}>
                        <Text style={styles.weatherText}>{item.textLarge}</Text>
                        <View style={styles.iconView}>
                            <FontAwesome name={item.iconDegree} color='#fff' size={8}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.weatherlightText}>{item.textSmall}</Text>
                        <View style={styles.iconViewSmall}>
                            <FontAwesome name={item.iconDegree} color='#fff' size={6}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                </View>
                <Text style={styles.dateText}>{item.day}</Text>
            </View>

        )
    }
    renderDayRow = ({ item, }) => {
        return (
            <TouchableOpacity style={styles.mainViewSecond}>
                <View style={styles.dayView}>
                    <Text style={styles.day}>{item.day}</Text>
                </View>
                <View style={styles.iconViewSun}>
                    <Feather name={item.iconcloud} color='#fff' size={30}
                        onPress={
                            () => this.props.navigation.navigate('#')
                        } />
                </View>
                <View style={styles.degreeView}>
                    <Text style={styles.TextDigi}>{item.textLarge}</Text>
                    <View style={styles.iconView}>
                        <FontAwesome name={item.iconDegree} color='#fff' size={8}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/bg.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                    <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <Icon name='menu' color='#fff' size={26}
                                onPress={
                                    () => this.props.navigation.openDrawer()
                                } />
                        </View>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: wp('2%'), fontWeight: 'bold', color: '#fff' }}>LONDON</Text>
                        </View>

                        <TouchableOpacity onPress={
                            () => this.setState({ showMe: true })}
                            style={{}}>
                            <Image source={require('./../image/add.png')} style={{ tintColor: '#fff', width: 30, height: 30, }} />

                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.showMe}
                                onRequestClose={() => this.setState({ showMe: false })}>
                                <View style={{ flex: 1, }}>
                                    <View style={styles.ModalView}>
                                    <TouchableOpacity onPress = {() => this.setState({showMe: false})} style = {styles.cross}>
                                    <Image source={require('./../image/cross.png')} style={{alignSelf: 'center', tintColor: '#fff', width: 30, height: 30, }} />
                                    
                                    </TouchableOpacity>
                                        <Text style={styles.cityName}>Enter City Name</Text>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder={'Enter City Name'}
                                                placeholderTextColor={'#ccc'}
                                            />
                                            <View style={styles.searchIcon}>
                                                <AntDesign name='search1' color='#ccc' size={26}
                                                     />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        pagingEnabled
                        horizontal
                        data={this.state.avatarSource}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.id}
                    />
                    <ScrollView horizontal>
                        <FlatList
                            pagingEnabled
                            horizontal
                            data={this.state.dayData}
                            renderItem={this.renderDayRow}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                </ImageBackground> 
            </View >

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mainView: {
        flexDirection: 'row',
        marginTop: wp('5%')
    },
    weatherView: {
        alignItems: 'center',
        width: wp('100%')
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    weatherText: {
        fontSize: hp('10%'),
        color: '#fff'
    },
    iconView: {
        marginBottom: hp('6%')
    },
    iconViewSmall: {
        marginBottom: hp('2%')
    },
    weatherlightText: {
        color: '#52b4d4',
        fontSize: hp('3%'),
    },
    dateText: {
        color: '#fff',
        fontSize: 15
    },
    mainViewSecond: {
        backgroundColor: '#5697d5',
        alignItems: 'center',
        height: hp('25%'),
        width: wp('30%'),
        marginTop: wp('20%'),
        borderEndColor: '#fff',
        borderEndWidth: 1
    },
    dayView: {
        backgroundColor: '#52b4d4',
        height: hp('4%'),
        width: wp('12%'),
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp('5%')
    },
    day: {
        color: '#fff',
        fontSize: 15,
    },
    iconViewSun: {
        marginTop: wp('5%')

    },
    degreeView: {
        flexDirection: 'row',
        marginTop: wp('5%')
    },
    TextDigi: {
        fontSize: 20,
        color: '#fff'
    },
    ModalView: {
        backgroundColor: '#fff',
        marginHorizontal: wp('5%'),
        marginTop: hp('15%'),
        height: hp('30%'),

    },
    cross:{
        position: 'absolute',
        marginLeft: wp('82%'),
        marginTop: hp('-2%'),
        backgroundColor: '#52b4d4',
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center'
    },
    cityName: {
        marginLeft: wp('5%'),
        fontWeight: 'bold',
        color: '#ccc',
        fontSize: 15,
        marginVertical: hp('5%')
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        marginHorizontal: wp('5%'),
        flexDirection: 'row'
    },
    input: {
        height: 40,
        width: wp('60%'),
        padding: 10,

    },
    searchIcon: {
        justifyContent: 'center',
        marginLeft: wp('8%')
    }
});