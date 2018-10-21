import React from 'react'
import { StatusBar } from 'react-native'
import Main from './src/navigators/Main'

StatusBar.setBarStyle('light-content', true)

export default () => <Main />
