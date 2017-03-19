import React, {Component} from 'react'
import {Text,
        View, 
        ScrollView,
        FlatList, 
        VirtualizedList, 
        TouchableHighlight, 
        StyleSheet,
        Image,
} from 'react-native'
import {connect} from 'react-redux'
import {fetchData} from '../actions'
import Header from './Header'
import Slide from './Slide'

const shows_first = [
    {
        key: 1,
        name:'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key: 2,
        name:'Modern Family',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key: 3,
        name:'The Flash',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
    },
    {
        key: 4,
        name:'Supergirl',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
    },
    {
        key: 5,
        name:'Designated Survivor',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 6,
        name:'24: Legacy',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
    }
]

const shows_second = [
    {
        key: 7,
        name:'Colony',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg'
    },
    {
        key: 8,
        name:'The Walking Dead',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg'
    },
    {
        key: 9,
        name:'Taken',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg'
    },
    {
        key: 10,
        name:'This is us',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg'
    },
    {
        key: 11,
        name:'Superstore',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg'
    },
    {
        key: 12,
        name:'Lethal Weapon',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg'
    },
    {
        key: 13,
        name:'The 100',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg'
    },
    {
        key: 14,
        name:'Homeland',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg'
    }
]

class FlatListComponent extends Component {
    constructor(props){
        super(props)
    }
    _renderItem(item){
        return (
             <Image style={{width: 120, height: 170}} source={{uri: item.image}} />
        )
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor:'black'}}>
                <Header />
                <ScrollView>
                <Slide />
                <View style={{marginLeft: 5}}>
                    <View>
                        <Text style={{color: 'white', fontSize: 17}}>My List</Text>
                        <FlatList
                            horizontal
                            data={shows_first}
                            SeparatorComponent={() => <View  style={{width: 5}}/>}
                            renderItem={({item}) => this._renderItem(item)}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{color: 'white', fontSize: 17}}>Top Picks for You</Text>
                        <FlatList
                            horizontal
                            data={shows_second}
                            SeparatorComponent={() => <View  style={{width: 5}}/>}
                            renderItem={({item}) => this._renderItem(item)}
                        />
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

const mapStateToProps = state => {
    return {
        source: state.dataReducers
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatListComponent)