import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';

import { CameraKitCameraScreen } from 'react-native-camera-kit';

import Permissions from 'react-native-permissions';

export default class App extends Component {
    // constructor() {

    //     super();

    //     // this.state = {

    //     //     QR_Code_Value: '',

    //     //     Start_Scanner: false,

    //     // };
    // }

    componentDidMount = () => {
        this.test();
        this._requestPermission();
        
    }

    _requestPermission = () => {
        Permissions.request('camera').then(response => {
            console.log(response);
            // Returns once the user has chosen to 'allow' or to 'not allow' access
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            //   this.setState({ photoPermission: response })
        })
    }

    test = () => {
        Permissions.check('camera').then(response => {
            console.log(response);
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
          })
    }

    // openLink_in_browser = () => {

    //     Linking.openURL(this.state.QR_Code_Value);

    // }

    // onQR_Code_Scan_Done = (QR_Code) => {

    //     this.setState({ QR_Code_Value: QR_Code });

    //     this.setState({ Start_Scanner: false });
    // }

    // open_QR_Code_Scanner = () => {

    //     // var that = this;

    // }
    render() {
        // if (!this.state.Start_Scanner) {

            return (
                <View style={styles.MainContainer}>

                </View>
            );
    }
}
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    QR_text: {
        color: '#000',
        fontSize: 19,
        padding: 8,
        marginTop: 12
    },
    button: {
        backgroundColor: '#2979FF',
        alignItems: 'center',
        padding: 12,
        width: 300,
        marginTop: 14
    },
});