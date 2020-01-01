import React, { Component } from 'react';
import map from '../../assets/images/map.png';
import clipboard from '../../assets/svg/clipboard.svg';

export default class Connected extends Component {
  state = {
    username: "",
    email: "",
    phone: ''
  }

  handleFormSubmit = e => {
    e.preventDefault();
    alert(`Thank you ${this.state.username} for submitting your request. We will be in touch.`);

    this.setState({
      username: "",
      email: "",
      phone: ''
    })
  }

  handleChange = ({target: {name, value}}) => this.setState({ [name]: value})

  render() {
    return (
      <section className="home__connected">
        <img className="map" src={map} alt="map"/>
        <div className="home__connected-form">
          <h3>Get Connected</h3>
          <div className="form-wrapper">
            <h4>Request a property survey today</h4>
            <img src={clipboard} alt="clipboard icon"/>
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="username">Name</label>
              <input name="username" onChange={this.handleChange} value={this.state.username} type="text"/>
              <label htmlFor="email">Email</label>
              <input name="email" onChange={this.handleChange} value={this.state.email} type="email"/>
              <label htmlFor="tel">Phone</label>
              <input name="phone" onChange={this.handleChange} value={this.state.phone} type="tel"/>
              <button type="submit">SEND REQUEST</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
