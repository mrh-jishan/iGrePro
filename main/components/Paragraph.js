import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#FFF",
    textAlign: 'center',
  },
});

export default memo(Paragraph);
