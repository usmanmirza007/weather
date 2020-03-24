import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get('window')
import { Icon } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
export default class news extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            VideoData: [
                { id: 1, img: require('./../image/1.png'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more Smartphone tecnologies", date: '22 Jun' },
                { id: 2, img: require('./../image/2.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more Smartphone tecnologies", date: '22 Jun' },
                { id: 3, img: require('./../image/3.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more Smartphone tecnologies", date: '22 Jun' },
                { id: 4, img: require('./../image/4.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more Smartphone tecnologies", date: '22 Jun' },
                { id: 5, img: require('./../image/5.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more Smartphone tecnologies", date: '22 Jun' },
                { id: 6, img: require('./../image/6.jpg'), iconcloud: 'calendar', textLarge: "CPU Turbo, Superfast Charging & more Smartphone tecnologies", date: '22 Jun' },
            ]
        };
    }

    renderRow = ({ item, }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('newDetail')}
                style={styles.adsView}>
                <Image source={item.img} style={{ width: 130, height: 100, marginVertical: hp('1'), borderRadius: 5 }} />

                <View style={styles.mainText}>
                    <Text style={styles.top1} > {item.textLarge} </Text>
                    <View style={styles.dateView}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <Entypo name={item.iconcloud} color='#9e9e9e' size={22} />
                        </View>
                        <View><Text style={styles.top}> {item.date} </Text></View>
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
                    <View style={{ marginTop: hp('2%'), marginBottom: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <Icon name='menu' color='#fff' size={26}
                                onPress={
                                    () => this.props.navigation.openDrawer()
                                } />
                        </View>
                        <View style={{ marginLeft: wp('30%') }}>
                            <Text style={{ fontSize: 20, marginLeft: wp('2%'), fontWeight: 'bold', color: '#fff' }}>NEWS</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <FlatList
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    adsView: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        borderRadius: 3,
        paddingHorizontal: wp('2%'),
        marginHorizontal: wp('5%'),
        marginBottom: hp('1%')
    },
    top1: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('1%'),
        width: wp('45%'),
        marginBottom: hp('2%'),
        fontWeight: 'bold'
    },
    top: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('0.5%'),
        marginHorizontal: wp('2')
    },
    dateView: {
        flexDirection: 'row',
        marginTop: hp('3%')
    },
    mainText: {
        marginLeft: wp('3%'),
    },
});