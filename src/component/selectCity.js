import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get('window')
import { Icon } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
export default class selectCity extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>

                <ImageBackground source={require('./../image/map1.jpg')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style = {{backgroundColor: '#000'}}>
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
                    </View>
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
});