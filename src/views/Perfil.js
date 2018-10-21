import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet
} from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import { Ionicons } from '@expo/vector-icons'
export default class Perfil extends Component {
  render = () => (
    <ImageBackground
      source={require('../../assets/bg.jpg')}
      resizeMode="cover"
      blurRadius={Platform.OS === 'android' ? 1 : 5}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <View style={{ paddingVertical: 50 }}>
        <Transition appear="top">
          <Text style={[styles.title, { paddingVertical: 20 }]}>
            Meu Perfil
          </Text>
        </Transition>
        <Transition appear="scale">
          <View style={[styles.avatar, { marginVertical: 0 }]}>
            <ImageBackground
              resizeMode="contain"
              style={styles.logo}
              source={require('../../assets/icon_avatar.png')}
            />
          </View>
        </Transition>
        <Text style={styles.title}>João Silva</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {Array(5)
            .fill()
            .map((v, i) => (
              <Ionicons
                style={{ paddingHorizontal: 2 }}
                key={`${i}`}
                name="ios-star"
                size={25}
                color="#ffbe00"
              />
            ))}
        </View>
        <Text style={styles.subtitle}>Sobrevivente</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            justifyContent: 'center'
          }}
        >
          <Transition appear="scale">
            <Image
              style={styles.icon}
              source={require('../../assets/icon_mochila.png')}
            />
          </Transition>
          <Transition appear="scale">
            <Image
              style={styles.icon}
              source={require('../../assets/icon_ranking.png')}
            />
          </Transition>
        </View>
      </View>
      <Transition appear="bottom">
        <View style={{ width: '100%' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Desastres')}
          >
            <Text style={styles.buttonText}>Continuar</Text>
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
    backgroundColor: 'rgba(130, 64, 188,.7)'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  icon: {
    height: 80,
    width: 80,
    marginHorizontal: 15
  },
  avatar: {
    margin: 50,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 100
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
