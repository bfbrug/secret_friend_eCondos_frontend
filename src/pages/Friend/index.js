import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default class Friend extends Component {
  state = {
    friends: [],
  };
  async componentDidMount() {

    const response = await api.get('friends');

    this.setState({ friends: response.data });
  }

  render() {
    const { friends } = this.state;
    return <h1>Amigos cadastrados</h1>;
  }
}
