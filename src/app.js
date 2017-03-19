import React, {Component} from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native'

import {Provider} from 'react-redux'

import configureStore from './configureStore'
import FlatListComponent from './components/FlatListComponent'

let store = configureStore()

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <FlatListComponent />
            </Provider>
        )
    }
}

export default App