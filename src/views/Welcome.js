import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Transition } from 'react-navigation-fluid-transitions'

export default class Welcome extends Component {
  render = () => (
    <ImageBackground
      source={require('../../assets/bg.jpg')}
      resizeMode="cover"
      blurRadius={Platform.OS === 'android' ? 1 : 5}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <Transition appear="scale">
        <View style={styles.avatar}>
          <ImageBackground
            resizeMode="contain"
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
      </Transition>
      <Transition appear="horizontal" delay="false">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nós ajudamos a humanidade</Text>
        </View>
      </Transition>
      <Transition appear="horizontal" delay>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Aqui você aprende a ficar seguro frente a qualquer desastre natural.
          </Text>
          <Text style={styles.subtitle}>Seja um super herói!</Text>
        </View>
      </Transition>
      <Transition appear="vertical" disappear="bottom" delay>
        <View style={{ width: '100%' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Desastres')}
          >
            <Text style={styles.buttonText}>SOBREVIVER</Text>
            <Ionicons
              size={20}
              color="rgba(255, 255, 255, .8)"
              name="ios-arrow-forward"
            />
          </TouchableOpacity>
        </View>
      </Transition>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(130, 64, 188,.5)'
  },
  subtitleContainer: {
    paddingHorizontal: 40,
    flex: 1,
    paddingTop: 20
  },
  subtitle: {
    color: 'rgba(255,255, 255, .7)',
    fontSize: 16,
    fontWeight: '100',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  avatar: {
    margin: 50,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150
  },
  buttonText: {
    color: 'rgba(255, 255, 255, .8)',
    fontSize: 18,
    paddingRight: 10
  },
  button: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, .8)',
    backgroundColor: 'rgba(255, 255, 255, .2)',
    width: '100%'
  }
})
