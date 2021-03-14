[![npm version](https://badge.fury.io/js/react-native-custom-statusbar.svg)](https://badge.fury.io/js/react-native-custom-statusbar)

# react-native-custom-statusbar
A library to help you create StatusBar in react native for iphones(all) and android.

## Installing ##
`npm i react-native-custom-statusbar --save`

`npm add react-native-custom-statusbar`

#### Example ####
```js
// in App.js or App.tsx

import React from 'react';
import { View } from 'react-native';
import StatusBarCustom from 'react-native-custom-statusbar';

const App: React.FC = () => {
  return (
    <StatusBarCustom backgroundColor="#0e502b" barStyle="light-content">
      { your components }
    </StatusBarCustom>
  );
}

export default App;
```

## Licence ##
**MIT**
