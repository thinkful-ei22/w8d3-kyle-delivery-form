import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import Input from './Input';
import { DELIVERY_FORM_SUBMIT_URL } from '../config';
import { required, nonEmpty, length, onlyNumbers } from '../validators';

export class DeliveryForm extends React.Component {
  onSubmit(values) {
    return fetch(DELIVERY_FORM_SUBMIT_URL, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers
              .get('content-type')
              .startsWith('application/json')
          ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
          }
          // It's a less informative error returned by express
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        return;
      })
      .then(() => console.log('Submitted with values', values))
      .catch(err => {
        const { reason, message, location } = err;
        if (reason === 'ValidationError') {
          // Convert ValidationErrors into SubmissionErrors for Redux Form
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
        return Promise.reject(
          new SubmissionError({
            _error: 'Error submitting message'
          })
        );
      });
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Report submitted successfully
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message error-message">
          {this.props.error}
        </div>
      );
    }

    return (
      <div className="delivery-form">
        <h2>Report a problem with your delivery</h2>
        <form onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
          {successMessage}
          {errorMessage}
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
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
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
