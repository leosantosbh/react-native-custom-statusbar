[![npm version](https://badge.fury.io/js/react-native-custom-statusbar.svg)](https://badge.fury.io/js/react-native-custom-statusbar)

# react-native-custom-statusbar
A library to help you create StatusBar in react native for iphones(all) and android.

`WARNING:</div> not work in component React Navigation Stack with headershown true when it has routes with different color of the StatusBar`

## Installing ##
`npm i react-native-custom-statusbar --save`

`npm add react-native-custom-statusbar`

#### Example ####
```js
// in App.js or App.tsx

import React from 'react';
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

### Properties

Any [StatusBar property](https://reactnative.dev/docs/statusbar) and the following:


### Exclusive properties for IPhone X + (X, XR, 11, 12)

| Prop               | type    | Description                               | Android     | Ios         |
| ------------------ | ------- | ----------------------------------------- | ----------- | ----------- |
| **`isHelper`**     | boolean | Enables the `helper` for IPhone you own   | _None_      | >= Iphone X |
| **`colorHelper`**  | string  | Set color `helper` default is #FFFFFF     | _None_      | >= Iphone X |


Examples:

isHelper (true) and color '#63b788'

<img src="/examples/isHelper_true.png" width="250">

isHelper (false)

<img src="/examples/isHelper_false.png" width="250">

### Properties StatusBar is working in Ios

| Prop               | type    | Description                               | Android     | Ios         |
| ------------------ | ------- | ----------------------------------------- | ----------- | ----------- |
| **`translucent`**  | boolean | enable `translucent`in android and ios    | all         | all         |
| **`hidden`**       | boolean | hidden StatusBar in android and ios       | all         | all         |

Examples:

translucent (true)

<img src="/examples/translucent_true.png" width="250">

hidden (true)

<img src="/examples/hidden_true.png" width="250">

normal - translucent (false) and hidden (false) 

<img src="/examples/normal_statusbar.png" width="250">

## Licence ##
**MIT**
