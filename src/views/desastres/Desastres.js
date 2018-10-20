import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

export default class Desastres extends React.Component {
  get desastres() {
    return [
      {
        id: '1',
        title: 'Tsunamis',
        image: require('../../../assets/desastres/tsunami.jpg')
      },
      {
        id: '2',
        title: 'Tornados',
        image: require('../../../assets/desastres/tornado.jpg')
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
    console.log(item)
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <Image source={item.image} style={styles.rowImage} />
        <View style={styles.rowTextContainer}>
          <Text style={styles.rowText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <FlatList
        style={{ paddingTop: 20 }}
        data={this.desastres}
        keyExtractor={p => p.id}
        renderItem={this.renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  rowTextContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    height: 130,
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
    height: 130,
    width: Dimensions.get('window').width
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    width: '100%'
  }
})
