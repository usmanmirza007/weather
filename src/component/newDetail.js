


import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get('window')
import { Icon } from 'react-native-elements';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
export default class newDetail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/bg.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                    <View style={{ marginTop: hp('2%'), marginBottom: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <AntDesign name='arrowleft' color='#fff' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('news')
                                } />
                        </View>
                        <View style={{ marginLeft: wp('23%') }}>
                            <Text style={{ fontSize: 20, marginLeft: wp('2%'), fontWeight: 'bold', color: '#fff' }}>NEWS DETAIL</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View>
                            <Image source={require('./../image/1.png')} style={{ width: 320, marginHorizontal: wp('5%'), height: 200, marginTop: hp('0%') }} />
                            <View style={styles.mainView}>
                                <Text style={styles.lorem}>Winter's chill recently turned Lake Erie into "Lake Eerie," as frigid temperatures transformed a trio of lakeside houses in Hamburg, New York, into unsettling ice sculptures. The frigid cold and wind sealed the homes inside thick layers of solid ice, topped with still more frozen layers of wavy icicle "hair."

                                Beginning on Feb. 27 and continuing for 48 hours, winds gusted over Lake Erie at speeds up to 60 mph (97 km/h), driving lake water inland to the Hoover Beach neighborhood, AccuWeather reported. 
                                
                                There, freezing temperatures solidified the water wherever it was carried by the wind, forming an icy coating on several homes — and the ice just kept building up, according to The Weather Channel.
                                
                                Related: Icy images: Antarctica will amaze you in incredible aerial views
                                
                                Around this time of year, ice cover is usually abundant on Lake Erie's surface. That typically prevents the shoreline from being soaked with cold water during powerful storms; however, Lake Erie's eastern end is nearly ice-free this year, leaving the shore vulnerable to spray from storm-whipped waves, The Weather Channel reported.
                                
                                Ice blanketing the homes was estimated to be around 3 feet (1 meter) thick and was so solid that it even blocked daylight coming through the windows, Hoover Beach resident Ed Mis told CNN.
                                
                                "It’s dark on the inside of my house," Mis said. "It looks fake, it looks unreal." The neighborhood had experienced some ice coatings like this before, but this event was the most extreme in nearly a decade, Mis told CNN.
                                
                                "Welcome to Narnia," wrote John' Kucko, a TV anchor in Rochester, New York. On Feb. 29, Kucko tweeted a photo showing the frozen houses.</Text>
                            </View>
                        </View>
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
    mainView: {
        marginHorizontal: wp('5%'),

    },
    lorem: {
        color: '#fff',
        fontSize: 15,
        marginTop: 10,
    },
});