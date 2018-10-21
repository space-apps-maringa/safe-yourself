import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Transition } from 'react-navigation-fluid-transitions'

export default class Tsunami extends React.Component {
  get acoes() {
    return [
      { id: '1', icon: 'md-happy', text: 'Mantenha a calma' },
      {
        id: '2',
        icon: 'ios-apps',
        text: 'Procure uma área mais alta para se proteger'
      },
      {
        id: '3',
        icon: 'md-navigate',
        text: 'Afastem se pelo menos três quilômetros do mar'
      },
      {
        id: '4',
        icon: 'ios-american-football',
        text:
          'Não tente segurar pertences, pois poderão lhe atrapalhar durante a fuga'
      },
      {
        id: '5',
        icon: 'ios-flash',
        text: 'Fique atento para ondas tardias ou novos terremotos.'
      },
      { id: '6', icon: 'ios-lock', text: 'Permaneça em local seguro' },
      {
        id: '7',
        icon: 'ios-boat',
        text:
          'Após o tsunami passar prontifique-se para ajudar como puder, conseguindo mantimentos e água ou procurando por desaparecidos.'
      }
    ]
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.acaoRow}>
        <View style={{ width: 60, alignItems: 'center' }}>
          <Ionicons name={item.icon} size={30} color="#8240bc" />
        </View>
        <Text style={[styles.text, { flex: 1 }]}>{item.text}</Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Transition shared="tsunami">
            <Image
              source={require('../../../assets/desastres/tsunami.jpg')}
              style={styles.image}
              blurRadius={2}
            />
          </Transition>
          <Transition shared="tsunamititle">
            <View style={styles.textContainer}>
              <Text style={[styles.title, { color: '#fff' }]}>
                O que é <Text style={{ fontWeight: '900' }}> Tsunami?</Text>
              </Text>
            </View>
          </Transition>
        </View>
        <Text style={[styles.text, { padding: 20, textAlign: 'justify' }]}>
          Um Tsunami é uma onda causada pelo movimento repentino do fundo do
          mar. Onda gigante gerada por distúrbios sísmicos, que possui alto
          poder destrutivo quando chega à região costeira.
        </Text>
        <Text style={styles.title}>Quais as consequências?</Text>
        <Text style={[styles.text, { padding: 20, textAlign: 'justify' }]}>
          Elas podem arrastar pessoas, automóveis, arrancar árvores, destruir
          postes e fiações, causar o desabamento de casas mal construídas e
          jogar todos os tipos de detritos, dos mais leves aos mais pesados,
          sobre pessoas e coisas, carregando tudo num turbilhão violento.
        </Text>
        <Text style={styles.title}>O que devo fazer?</Text>
        <FlatList
          data={this.acoes}
          renderItem={this.renderItem}
          keyExtractor={p => p.id}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: Dimensions.get('window').width
  },
  textContainer: {
    position: 'absolute',
    height: 200,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  headerTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    fontWeight: '200'
  },
  title: {
    color: '#8240bc',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: '600'
  },
  text: {
    color: 'gray',
    fontWeight: '300'
  },
  acaoRow: {
    paddingVertical: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
