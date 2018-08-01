import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class DeliveryForm extends React.Component {

  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your delivery</h2>
        <form>
          <label htmlFor="trackingNumber">Tracking number</label>
          <Field component="input" type="text" name="trackingNumber" id="trackingNumber" />
          <label htmlFor="issue">What is your issue?</label>
          <Field component="select" name="issue" id="issue">
            <option>My delivery hasn't arrived</option>
            <option>The wrong item was delivered</option>
            <option>Part of my order was missing</option>
            <option>Some of my order arrived damaged</option>
            <option>Other (give details below)</option>
          </Field>
          <label htmlFor="details">Give more details (optional)</label>
          <Field component="textarea" name="details" id="details" />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'delivery'
})(DeliveryForm);
