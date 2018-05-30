import React, { Component } from "react";
import addButton from '../../assets/images/add_button.svg';
export default class Orders extends Component {
  render() {
    return (
      <div className="my-5 container">
        <h2>Order Component </h2>
        <div className="row">
          <div class="card col-sm-6 col-md-4">
          <img src={addButton} />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card col-sm-6 col-md-4">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card col-sm-6 col-md-4">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card col-sm-6 col-md-4">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
