import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/welcome.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Travelling Made Easy</Text>
          <Text style={styles.subtitle}>Experience the world's best places</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
  },
  textContainer: {
    padding: wp('5%'),
    paddingBottom: hp('5%'),
    alignItems: 'center', 
  },
  title: {
    color: 'white',
    fontSize: wp('10%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: wp('5%'),
    fontWeight: '500',
    textAlign: 'center',
    marginTop: hp('1%'),
  },
  buttonContainer: {
    marginBottom: hp('5%'),
  },
  button: {
    backgroundColor: 'orange',
    padding: hp('2%'),
    paddingHorizontal: wp('15%'),
    borderRadius: wp('12.5%'),
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
