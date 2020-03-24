import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get('window')
import { Icon } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
export default class video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            VideoData: [
                { id: 1, img: require('./../image/1.png'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more", },
                { id: 2, img: require('./../image/2.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more", },
                { id: 3, img: require('./../image/3.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more", },
                { id: 4, img: require('./../image/4.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more", },
                { id: 5, img: require('./../image/5.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more", },
                { id: 6, img: require('./../image/6.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more", },
            ]
        };
    }

    renderRow = ({ item, }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('videoPlay')}
                style={[styles.adsView, shadow]}>
                <Image source={item.img} style={{ width: wp('39%'), height: 150, marginVertical: hp('1.5'), marginLeft: wp('0.5'), borderRadius: 5 }} />

                <View style={styles.mainText}>
                    <Text style={styles.top1} >{item.textLarge}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/bg.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                    <View style={{ marginTop: hp('2%'), marginBottom: hp('0%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <Icon name='menu' color='#fff' size={26}
                                onPress={
                                    () => this.props.navigation.openDrawer()
                                } />
                        </View>
                        <View style={{ marginLeft: wp('30%') }}>
                            <Text style={{ fontSize: 20, marginLeft: wp('2%'), fontWeight: 'bold', color: '#fff' }}>VIDEOS</Text>
                        </View>
                    </View>
                    <ScrollView>
                    <Text style = {styles.latest}>LATEST VIDEOS</Text>
                    <FlatList
                        pagingEnabled
                        horizontal
                        data={this.state.VideoData}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.id}
                    />
                    <Text style = {styles.latest}>CNN NEWS</Text>
                    <FlatList
                        pagingEnabled
                        horizontal
                        data={this.state.VideoData}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.id}
                    />
                    <Text style = {styles.latest}>WEATHER NEWS</Text>
                    <FlatList
                        pagingEnabled
                        horizontal
                        data={this.state.VideoData}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.id}
                    />
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}
const shadow = {
    shadowColor: 'grey',
    shadowRadius: 10,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowOffset: {
      width: 4,
      height: 4
    }
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    adsView: {
        backgroundColor: 'lightgrey',
        borderRadius: 3,
        height: hp('35%'),
        width: wp('44'),
        paddingHorizontal: wp('2%'),
        marginHorizontal: wp('3%'),
        marginBottom: hp('1%')
    },
    top1: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        fontWeight: 'bold',
        width: wp('35%')
    },
    top: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('0.5%'),
        marginHorizontal: wp('2')
    },
    dateView: {
        flexDirection: 'row',
        marginTop: hp('1%')
    },
    mainText: {
        marginLeft: wp('3%'),
        
    },
    latest:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: wp('5%'),
        color: '#fff',
        marginVertical: hp('3%'),
    }
});