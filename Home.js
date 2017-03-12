import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NativeModules,
  ScrollView
} from 'react-native';

var ImagePicker = NativeModules.ImageCropPicker

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  pickSingle(cropit, circular=false) {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
    }).then(image => {
      console.log('received image', image);
      const file = {
        uri: image.path,
        name: "imagetest.jpg",
        type: image.mime
      }
      const data = {
        signature: "e9-8h2KPt9BMCF4HA_OT-aKWWh0",
        api_key: "372211756873884"
      }
      const body = new FormData()
      console.log(body);
      body.append('file', file)
      fetch(url, {
        method: 'POST',
        body
      }).then((response) => console.log(response))
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e);
    });
  }

  renderImage(image) {
    return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }

  render() {
    return (
      <View style={{margin: 128}}>
        <ScrollView>
          {this.state.image ? this.renderAsset(this.state.image) : null}
        </ScrollView>
        <TouchableOpacity onPress={() => this.pickSingle(false)}>
          <Text>Select Single Image</Text>
        </TouchableOpacity>
        <Text>...</Text>
        <Text>Home</Text>
      </View>
    )
  }
}