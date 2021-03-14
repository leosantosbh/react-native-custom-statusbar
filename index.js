import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const StatusBarCustom = ({ isHelper, colorHelper, children, backgroundColor, translucent, hidden, ...respProps }) => {
  const [heigthStatus, setHeightStatus] = useState(0);

  return (
    <>
      {!hidden && !translucent && <SafeAreaView style={{ backgroundColor: backgroundColor, height: heigthStatus, width: '100%'}} onLayout={event => setHeightStatus(event.nativeEvent.layout.height)} />}
      <StatusBar backgroundColor={backgroundColor} hidden={hidden} translucent={translucent} {...respProps} />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        { children }
      </View>
      {isHelper && <View style={{ height: getBottomSpace(), width: '100%', backgroundColor: colorHelper || '#fff' }} />}
    </>
  );
}

export default StatusBarCustom;
