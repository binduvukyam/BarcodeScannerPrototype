import React, { PureComponent } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class BarcodeScan extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showCamera:false,
      scanResult: null
    };
  }
  showCamera = () => {
    this.setState({showCamera:true});
  }
  
  onBarCodeRead = (result) => {
    this.setState({ showCamera:false, scanResult:result.data })
  }

  render() {
    if (!this.state.showCamera) {
      return (
        <View>
          <Button title='Scan barcode' onPress={this.showCamera}></Button>
          <Text>{this.state.scanResult}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          captureAudio={false}
          onBarCodeRead = {this.onBarCodeRead}
        >
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});