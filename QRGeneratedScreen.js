import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRGeneratedScreen = ({ route }) => {
  const { name, email, department, college, selectedEvent } = route.params;
  const dataToEncode = `${name}\n${email}\n${department}\n${college}\n${selectedEvent}`;

  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {showImage ? (
        <>
          <Image source={require('./assets/check.png')} style={styles.image} />
          <Text style={styles.title}>Successfully Registered</Text>
        </>
      ) : (
        <>
          <View style={styles.qrContainer}>
            <QRCode value={dataToEncode} size={200} />
            <Image source={require('./assets/thanks.png')} style={styles.images} />

          </View>
        </>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: -100,
    marginBottom: 20,
  },
  images:{
    width: 100,
    height: 100,
    marginLeft:50,
    marginTop:20,

  },
  qrContainer: {
    marginTop: -30,
    marginBottom:50,
  },
});

export default QRGeneratedScreen;
