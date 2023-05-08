import React, { Component } from 'react'
import {getCoinMarkets, getPing} from './api'
import CoindCard from './components/CoinCard'
import {Grid } from '@material-ui/core'
import FilterMenu from './components/FilterMenu'

export default class Project extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coins: []
    }
  }

  async fetchCoinMarket() {
    const res = await getCoinMarkets()
    this.setState({coins: res.data})
  }

  componentDidMount() {
    this.fetchCoinMarket()
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FilterMenu />
        </Grid>
        {
          this.state.coins.map( (coin)=> {
            return (
              <Grid item xs={12} md={6} lg={4}>
              <CoindCard  {...coin} key={coin.id} />
              </Grid>
            )
            
          })
        }
      </Grid>
    )
  }
}
