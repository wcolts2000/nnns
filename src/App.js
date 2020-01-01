import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Wifi from "./components/Wifi/Wifi";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Home/Modal";

class App extends Component {
  state = {
    modalActive: false,
    category: null,
    navOpen: false
  };

  toggleModal = category => {
    this.setState({ modalActive: !this.state.modalActive, category });
  };

  toggleNav = () => this.setState({navOpen: !this.state.navOpen})

  render() {
    return (
      <>
        <Modal
          modalActive={this.state.modalActive}
          category={this.state.category}
          toggleModal={this.toggleModal}
        />
        <div className="App">
          <Header toggleNav={this.toggleNav} navOpen={this.state.navOpen} />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/wifi">
              <Wifi />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} toggleModal={this.toggleModal} />
              )}
            />
          </Switch>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
