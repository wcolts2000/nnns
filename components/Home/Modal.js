import React, { Component } from "react";

export default class Modal extends Component {
  state = {
    wifi: {
      heading: "some wifi heading",
      img:
        "https://images.unsplash.com/photo-1562560017-e008835e92bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      points: ["wifi point 1", "wifi point 2", "wifi point 3"]
    },
    pricing: {
      heading: "some pricing heading",
      img:
        "https://images.unsplash.com/photo-1562560017-e008835e92bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      points: ["pricing point 1", "pricing point 2", "pricing point 3"]
    },
    cameras: {
      heading: "some cameras heading",
      img:
        "https://images.unsplash.com/photo-1562560017-e008835e92bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      points: ["cameras point 1", "cameras point 2", "cameras point 3"]
    },
    appraisal: {
      heading: "some appraisal heading",
      img:
        "https://images.unsplash.com/photo-1562560017-e008835e92bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      points: ["appraisal point 1", "appraisal point 2", "appraisal point 3"]
    }
  };
  render() {
    let { category, toggleModal, modalActive } = this.props;
    return (
      <div
        className={`modal ${modalActive ? "active" : ""}`}
        onClick={() => toggleModal(category)}
      >
        <span onClick={() => toggleModal(category)}>X</span>
        <div className="modal__container">
          <h2>{category && this.state[category].heading}</h2>
          <img
            src={category && this.state[category].img}
            alt={category && this.state[category].heading}
          />
          <ul>
            {category &&
              this.state[category].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
