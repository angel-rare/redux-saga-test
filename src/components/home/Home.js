import React from 'react'

import { Characters } from '../../containers'

import './Home.scss'

export default class Home extends React.Component {
  mounted () {
    const { initCharacters } = this.props
    initCharacters()
  }
  render () {
    return (
      <React.Fragment>
        <Characters />
      </React.Fragment>
    )
  }
}
