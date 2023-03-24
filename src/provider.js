import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from '../Counter';

const Provider = ({navigation}) => {
  return <Counter navigation={navigation} />;
};

export default Provider;

const styles = StyleSheet.create({});
