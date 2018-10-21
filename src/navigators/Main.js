import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import Welcome from '../views/Welcome'

const navigator = createFluidNavigator({
  Welcome: { screen: Welcome }
})

export default navigator
