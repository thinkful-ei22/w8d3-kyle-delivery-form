import React from 'react';

export default class DeliveryForm extends React.Component {

  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your delivery</h2>
        <form>
          <label htmlFor="trackingNumber">Tracking number</label>
          <input type="text" name="trackingNumber" id="trackingNumber" />
          <label htmlFor="issue">What is your issue?</label>
          <select name="issue" id="issue">
            <option>My delivery hasn't arrived</option>
            <option>The wrong item was delivered</option>
            <option>Part of my order was missing</option>
            <option>Some of my order arrived damaged</option>
            <option>Other (give details below)</option>
          </select>
          <label htmlFor="details">Give more details (optional)</label>
          <textarea name="details" id="details" />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}