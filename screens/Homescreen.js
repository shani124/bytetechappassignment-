import React from 'react';
import { View, Text, Button } from 'react-native';


const Homescreen = ({ navigation }) => {
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>  
    </View>
  );
};

export default Homescreen;