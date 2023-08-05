import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRGeneratedScreen = ({ route }) => {
  const { name, email, department, college, selectedEvent } = route.params;
  const dataToEncode = `${name}\n${email}\n${department}\n${college}\n${selectedEvent}`;

  return (
    <View style={styles.container}>
      <QRCode value={dataToEncode} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRGeneratedScreen;
