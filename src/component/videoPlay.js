import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Video } from 'expo-av'
import { MaterialIcons, } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

export default class videoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            duration: 0.1,
            pasued: false,
            overplay: false,
            mute: false,
            shouldPlay: true,
        };
    }

    handlePlayAndPause = () => {
        this.setState((prevState) => ({
            shouldPlay: !prevState.shouldPlay
        }));
    }

    handleVolume = () => {
        this.setState(prevState => ({
            mute: !prevState.mute,
        }));
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/bg.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center' }}> React Native Video </Text>
                        <Video
                            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                            rate={1.0}
                            volume={1.0}
                            shouldPlay={this.state.shouldPlay}
                            resizeMode="cover"
                            style={{ width, height: 300 }}
                            isMuted={this.state.mute}
                            isLooping
                        />
                        <View style={styles.controlBar}>
                            <MaterialIcons
                                name={this.state.mute ? "volume-mute" : "volume-up"}
                                size={45}
                                color="white"
                                onPress={this.handleVolume}
                            />
                            <MaterialIcons
                                name={this.state.shouldPlay ? "pause" : "play-arrow"}
                                size={45}
                                color="white"
                                onPress={this.handlePlayAndPause}
                            />
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }

});