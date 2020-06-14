import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {fonts, Colors} from '../../constants/Config';

const IconButton = ({icon, title, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: '49%',
          height: 40,
          backgroundColor: Colors.gray2,
          padding: 7,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Icon name={icon} size={20} color="#fff" />
      {title && (
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontFamily: fonts.bold,
            marginLeft: 5,
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
