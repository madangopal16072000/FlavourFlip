/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Header = ({headerText, headerIcon}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <Text style={{flex: 1, fontSize: 22, fontWeight: '700', color: 'black'}}>
        {headerText}
      </Text>

      <FontAwesomeIcon icon={headerIcon} size={24} color={'#f96163'} />
    </View>
  );
};

export default Header;
