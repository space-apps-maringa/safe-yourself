import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Platform
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { FloatingAction } from 'react-native-floating-action'
import { Transition } from 'react-navigation-fluid-transitions'

export default class Desastres extends React.Component {
  get desastres() {
    return [
      {
        id: '2',
        title: 'Tornados',
        image: require('../../../assets/desastres/tornado.jpg')
      },
      {
        id: '1',
        title: 'Tsunamis',
        shared: 'tsunami',
        image: require('../../../assets/desastres/tsunami.jpg')
      },
      {
        id: '3',
        title: 'Deslizamentos',
        image: require('../../../assets/desastres/deslizamento.jpeg')
      },
      {
        id: '4',
        title: 'Vulcões',
        image: require('../../../assets/desastres/vulcao.jpg')
      },
      {
        id: '5',
        title: 'Incêndios florestais',
        image: require('../../../assets/desastres/incendio.jpg')
      },
      {
        id: '6',
        title: 'Terremotos',
        image: require('../../../assets/desastres/terremoto.jpg')
      }
    ]
  }

  onPressItem = item => {
    this.props.navigation.navigate('Tsunami')
  }

  renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressItem(item)}>
        <View>
          <Transition shared={item.shared}>
            <Image source={item.image} style={styles.rowImage} />
          </Transition>
          <Transition shared={`${item.shared}title`}>
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowText}>{item.title}</Text>
            </View>
          </Transition>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render() {
    return (
      <Transition>
        <View style={styles.container}>
          <FlatList
            data={this.desastres}
            keyExtractor={p => p.id}
            renderItem={this.renderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
          <FloatingAction
            floatingIcon={
              <FontAwesome
                name="gamepad"
                size={30}
                style={{ marginBottom: 2 }}
                color="#fff"
              />
            }
            showBackground={false}
            color="#8240bc"
            distanceToEdge={15}
            onPressMain={() => this.props.navigation.navigate('Perfil')}
          />
        </View>
      </Transition>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: Platform.OS === 'android' ? -18 : 0 },
  rowTextContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    height: 200,
    justifyContent: 'center'
  },
  rowText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: '300'
  },
  rowImage: {
    position: 'absolute',
    height: 200,
    width: Dimensions.get('window').width
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    width: '100%'
  }
})
