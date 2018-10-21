import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import Welcome from '../views/Welcome'
import Desastres from '../views/desastres/Desastres'

const navigator = createFluidNavigator(
  {
    Welcome: { screen: Welcome },
    Desastres: { screen: Desastres }
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
      gestureResponseDistance: {
        horizontal: 50,
        vertical: 0
      }
    },
    mode: 'card'
  }
)

export default navigator
