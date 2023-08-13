import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import EventCard from './EventCard'; 
import hackImage from './assets/hack.png';
import hackerImage from './assets/hacker.png'; 
import sport from './assets/sport.png';
import map from './assets/map.png';
import interactive from './assets/interactive.png';
import coin from './assets/coin.png';
import cy from './assets/cy.png';
import caveman from './assets/caveman.png';
import pai from './assets/pai.png';
import ro from './assets/ro.png';

const eventsData = [
  {
    id: '1',
    title: 'Cyberfest',
    description: 'Join us for an exciting cybersecurity event...',
    imageName: 'hack',  
},
  {
    id: '2',
    title: 'Code Ninja',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'hacker',
  },
  {
    id: '3',
    title: 'Code Sprint',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'sport',

  },
  {
    id: '4',
    title: 'NetHunt',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'map',

  },
  {
    id: '5',
    title: 'Techgig',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'interactive',

  },
  {
    id: '6',
    title: 'Invenier',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'caveman',

  },
  {
    id: '7',
    title: 'Flip-Flop',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'coin',

  },
  {
    id: '8',
    title: 'CyberNerd',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'cy',
  },
  {
    id: '9',
    title: 'Artistry',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'pai',

  },
  {
    id: '10',
    title: 'Techiadz',
    description: 'Test your coding skills in this coding competition...',
    imageName: 'ro',

  },

];

const EventListScreen = ({ navigation }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const eventImages = {
        hack: hackImage, 
        hacker: hackerImage,
        sport:sport,
        map:map,
        interactive:interactive,
        coin:coin,
        cy:cy,
        caveman:caveman,
        pai:pai,
        ro:ro};
    
  
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => setSelectedEvent(item)} >
        <EventCard title={item.title} description={item.description} />
      </TouchableOpacity>
    );
  
    const handleRegister = () => {
      navigation.navigate('Registration');
    };
  
    return (
        <View style={styles.container}>
          <FlatList
            data={eventsData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          {selectedEvent && (
            <View style={styles.selectedEventContainer}>
              <Image
                source={eventImages[selectedEvent.imageName]} 
                style={styles.selectedEventImage}
              />
            </View>
          )}
          <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      );
    };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    buttonContainer: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignSelf: 'center',
      marginBottom: 16,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    selectedEventContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    selectedEventImage: {
      width: 200,
      height: 200,
    },
  });
  
  export default EventListScreen;