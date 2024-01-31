import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import INITIAL_STATE from './State/State.jsx';
import Section from './Section/Section.jsx';
import ContactList from './ContactList/ContactList.jsx';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleChange = evt => {
    const { key, value } = evt.target;
    this.setState({ [key]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contacts, name } = this.state;
    const id = nanoid();
    contacts.push({ name, id });

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <Section title="Phonebook">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ContactList contacts={contacts} />
      </Section>
    );
  }
}
