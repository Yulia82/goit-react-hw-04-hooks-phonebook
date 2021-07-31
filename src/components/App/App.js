// import { Component } from "react";
import { useState, useEffect } from "react";
import { Wrapper } from "../Wrapper/Wrapper.styles";
import Form from "../Form";
import SectionTitle from "../SectionTitle";
import ContactsList from "../Contacts";
import Filter from "../Filter";
import { v4 as uuidv4 } from "uuid";
import { writeData, readData } from "../utils/localStorage-helper";

import testDataContacts from "../data/data.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    return readData("contacts") ?? [...testDataContacts];
  });
  const [filter, setFilter] = useState("");

  const formSubmitHandler = dataSubmit => {
    const { name, number } = dataSubmit;

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const filterChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filterContacts = () => {
    // const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();

    const contactsFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase),
    );

    return contactsFilter;
  };

  const onDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    writeData("contacts", contacts);
  }, [contacts]);

  return (
    <Wrapper>
      <SectionTitle title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </SectionTitle>

      <SectionTitle title="Contacts">
        <Filter filter={filter} onFilterChange={filterChange} />
        <ContactsList
          contactList={filterContacts()}
          onDelete={onDeleteContact}
        />
      </SectionTitle>
    </Wrapper>
  );
}

// class App extends Component {
//   state = {
//     contacts: [...testDataContacts],
//     filter: "",
//   };

//   componentDidMount() {
//     if (readData("contacts")) {
//       this.setState({ contacts: readData("contacts") });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       writeData("contacts", this.state.contacts);
//     }
//   }

//   FormSubmitHandler = dataSubmit => {
//     const { contacts } = this.state;
//     const { name, number } = dataSubmit;

//     if (
//       contacts.find(
//         contact => name.toLowerCase() === contact.name.toLowerCase(),
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const newContact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   FilterChange = evt => {
//     this.setState({
//       filter: evt.currentTarget.value,
//     });
//   };

//   FilterContacts = () => {
//     const { contacts, filter } = this.state;
//     const filterLowerCase = filter.toLowerCase();

//     const contactsFilter = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterLowerCase),
//     );

//     return contactsFilter;
//   };

//   onDeleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     return (
//       <Wrapper>
//         <SectionTitle title="Phonebook">
//           <Form onSubmit={this.FormSubmitHandler} />
//         </SectionTitle>

//         <SectionTitle title="Contacts">
//           <Filter
//             filter={this.state.filter}
//             onFilterChange={this.FilterChange}
//           />
//           <ContactsList
//             contactList={this.FilterContacts()}
//             onDelete={this.onDeleteContact}
//           />
//         </SectionTitle>
//       </Wrapper>
//     );
//   }
// }

export default App;
