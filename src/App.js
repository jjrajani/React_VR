import React from 'react';
import {
  asset,
  Pano,
  View,
  AmbientLight,
  Sound,
  VrButton,
  Text
} from 'react-vr';
// import Primitives from './Primitives';
// <Primitives />
import Penholder from './Penholder';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'background.jpeg',
      sound: 'office.wav',
      visible: true
    };
  }
  changeScene = () => {
    this.setState({
      background:
        this.state.background === 'outside.jpeg'
          ? 'background.jpeg'
          : 'outside.jpeg',
      sound: this.state.sound === 'birds.wav' ? 'office.wav' : 'birds.wav',
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <View>
        <AmbientLight intensity={2.5} />
        <Sound
          loop
          volume={0.7}
          source={{
            wav: asset(this.state.sound)
          }}
        />
        <Pano source={asset(this.state.background)} />
        <VrButton onClick={this.changeScene}>
          <Text
            style={{
              position: 'absolute',
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 2, -6] }]
            }}
          >
            {this.state.background === 'background.jpeg'
              ? 'Go Outside'
              : 'Go Inside'}
          </Text>
        </VrButton>
        {this.state.visible && <Penholder />}
      </View>
    );
  }
}
