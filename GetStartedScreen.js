
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const buttonScaleAnim = useRef(new Animated.Value(1)).current;

  const handleButtonPressIn = () => {
    setIsButtonPressed(true);
    Animated.spring(buttonScaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPressOut = () => {
    setIsButtonPressed(false);
    Animated.spring(buttonScaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleGetStarted = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/user-profile.png')}
        style={styles.image}
      />
      <Text style={styles.title}>QR-REGISTREE</Text>
      <TouchableOpacity
        onPress={handleGetStarted}
        onPressIn={handleButtonPressIn}
        onPressOut={handleButtonPressOut}
        style={[styles.buttonContainer, isButtonPressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#0099ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStartedScreen;

