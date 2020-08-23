import React, { Component } from "react";
import Cards from "react-credit-cards";
import visacard from "../Assets/visacard.svg";
import mastercard from "../Assets/master-card.svg";
import americanexpress from "../Assets/americanexpress.svg";
import "react-credit-cards/es/styles-compiled.css";
import { Formik, Field } from 'formik'


type MyState = {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
};

export default class PaymentDetails extends Component<{}, MyState> {
  state: MyState = {
    cvc: "",
    expiry: "",
    number: "",
    name: ""
  };

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    this.setState(current => ({ ...current, [name]: value }));
  };

  render() {
    return (
      <div className="payment">
        <p> Payment Details </p>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            number={this.state.number}
            name={this.state.name}
          />
          <form>
            <div className="inputs">
              <label>Email</label>
              <input
                className="email"
                type="Text"
                placeholder=" you@example.com"
                required
              />
            </div>
            <div className="inputs">
              <label> Country </label>
              <select>
                <option value="1"> Please make a selection </option>
                <option value="2"> Germany </option>
                <option value="3"> China </option>
                <option value="4"> Canada </option>
                <option value="5"> Australia </option>
              </select>
            </div>
            <div className="inputs-2">
              <label>Card</label>
              <div className="card-input">
                <input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  onChange={this.handleInputChange}
                />
                <div className="grpInputs">
                  <input
                    className="exp"
                    type="tel"
                    name="expiry"
                    placeholder="MM/YY"
                    onChange={this.handleInputChange}
                  />
                  <input
                    className="cvc"
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="card-image">
              <div>
                <img className="visacard" src={visacard} />
                <img className="mastercard" src={mastercard} />
              </div>
              <div>
                <img className="americanexpress" src={americanexpress} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
