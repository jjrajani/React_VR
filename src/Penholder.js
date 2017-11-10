import React from 'react';
import { asset, View, Model, StyleSheet } from 'react-vr';

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            transform: [
              { translate: [-2.25, -0.4, -3.8] },
              { scale: 0.001 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            transform: [
              { translate: [4.8, -0.4, -3.8] },
              { scale: 0.001 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            transform: [
              { translate: [10.4, -0.55, -3.8] },
              { scale: 0.001 },
              { rotateY: 180 },
              { rotateX: -90 }
            ]
          }}
        />
      </View>
    );
  }
}
