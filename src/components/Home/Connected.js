import React, { Component } from 'react';
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.994083948824!2d-119.80558308442902!3d39.51462321792949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809940bc891aa1c7%3A0xe1e677933f31495e!2s1115%20S%20Wells%20Ave%2C%20Reno%2C%20NV%2089502!5e0!3m2!1sen!2sus!4v1577914212878!5m2!1sen!2sus" width="1866" height="374" frameborder="0" style={{border:0}} allowfullscreen="true"></iframe>
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
