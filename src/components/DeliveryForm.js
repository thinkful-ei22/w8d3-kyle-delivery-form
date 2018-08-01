import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from './Input';
import { required, nonEmpty, length, onlyNumbers } from '../validators';

export class DeliveryForm extends React.Component {

  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your delivery</h2>
        <form>
          <Field 
            component={Input}
            type="text"
            name="trackingNumber"
            id="trackingNumber"
            label="Tracking number"
            validate={[required, nonEmpty, length, onlyNumbers]}
          />
          <Field
            component={Input}
            element="select"
            name="issue"
            id="issue"
            label="What is your issue?"
          >
            <option>My delivery hasn't arrived</option>
            <option>The wrong item was delivered</option>
            <option>Part of my order was missing</option>
            <option>Some of my order arrived damaged</option>
            <option>Other (give details below)</option>
          </Field>
          <Field
            component={Input}
            element="textarea"
            name="details"
            id="details"
            label="Give more details (optional)"
          />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'delivery'
})(DeliveryForm);
