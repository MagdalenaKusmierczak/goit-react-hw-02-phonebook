import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import INITIAL_STATE from './State/State.jsx';
import Section from './Section/Section.jsx';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const contact = { id : nanoid(), name: this.state.name };
    this.setState(prevState => ({
      contacts: [{ ...contact }, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <Section title="Phonebook">
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
        />
        <ContactList contacts={contacts} />
      </Section>
    );
  }
}
