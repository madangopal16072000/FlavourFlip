/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const SearchFilter = ({icon, placeholder}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row', // Change flexDirection to 'row'
        alignItems: 'center', // Align items in the center vertically
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 7,
        maxHeight: 60,
      }}>
      <FontAwesomeIcon icon={icon} style={styles.icon} />
      <TextInput
        style={{paddingLeft: 8, fontSize: 16, color: '#808080', marginLeft: 8}}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  icon: {
    size: 20,
    color: '#f96163',
  },
});
