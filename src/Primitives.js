import React from 'react';
import { View, Box, Cylinder, Sphere, StyleSheet } from 'react-vr';

export default class Primitives extends React.Component {
  render() {
    return (
      <View>
        <Cylinder
          radiusTop={0.1}
          radiusBottom={1}
          dimHeight={2}
          segments={12}
          style={{
            transform: [{ translate: [-0.5, 2, -5] }]
          }}
        />
      </View>
    );
  }
}

// <Box
//   dimWidth={2}
//   dimDepth={2}
//   dimHeight={1}
//   style={{
//     color: 'red'
//   }}
// />
