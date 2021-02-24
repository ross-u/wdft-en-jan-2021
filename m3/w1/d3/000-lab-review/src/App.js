import React, { Component } from 'react';
import './App.css';
import people from './contacts.json';

import ContactCard from './components/ContactCard';


class App extends Component {

  state = {
    contacts: people.slice(0, 5),   //  [{a}, {b}, {c}, {d}, {e}]
    allContacts: people.slice(5, people.length) //  [{w}, {x}, {y}, {z}, {o}]
  }

  addContact = () => {
    const { contacts, allContacts } = this.state;

    const updatedAllContacts = [...allContacts];  //  [{w}, {x}, {y},  {o}]
    const randomNum = Math.floor(Math.random() * updatedAllContacts.length);
    const randomContact = updatedAllContacts.splice(randomNum, 1) // [ {z} ]

    const updatedContacts = [...contacts, randomContact[0] ]; // [{a}, {b}, {c}, {d}, {e}, {z}]

    this.setState({ contacts: updatedContacts, allContacts: updatedAllContacts });
  }
 

  sort(key) {
    // .sort() method mutates the original array. We don't mutate the `state` directly
    // therefore we'll make a copy first before sorting
    const { contacts } = this.state;

    const updatedContacts = [...contacts];

    updatedContacts.sort(function (a, b) {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
    
      return 0;
    });
    
    this.setState( {contacts: updatedContacts} )
  }

  deleteContact = (contactId) => {
    const { contacts } = this.state;

    const updatedContacts = contacts.filter((person) => {
      if (person.id !== contactId) {
        return true;
      }
      else if (person.id === contactId) {
        return false;
      }
    });
    this.setState({ contacts: updatedContacts });

  }

  render() {
    const { contacts } = this.state;

    return (
       <div className="App">
        <h1>IronContacts</h1>
        <button onClick={  this.addContact }>Add Random Contact</button>

        <button onClick={() => { this.sort('name') } }>Sort by name</button>
        <button onClick={() => { this.sort('popularity')} }>Sort by popularity</button>
        <table style={{ margin: '0 auto'}}>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return <ContactCard key={contact.id} contact={contact} />
            } )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;