import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export const App = () => {
  // const initialState = [
  //   { name: "", id: "", number: "" },
  // ];

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // const [name, setName] = useState([]);
  // const [id, setId] = useState([]);
  // const [number, setNumber] = useState([]);
  // const [filter, setFilter] = useState("");

  const onAddItem = (name, number) => {
    if (checkItem(name).length === 0) {
      const arr = [{ name: name, id: nanoid(), number: number }];

      // 👇️ merge arrays 👇️
      setContacts([...contacts, ...arr]);

      // return {
      //   contacts,
      //   name: "",
      // };

      // this.setState(() => {
      //   let contacts = [...this.state.contacts, {
      //     name: name,
      //     id: nanoid(),
      //     number: number,
      //   }];
      //
      //   return {
      //     contacts,
      //     name: "",
      //   };
      // });
      return false;
    } else {
      return true;
    }
  };

  // const onAddItem = (name, number) => {
  //   if (checkItem(name).length === 0) {
  //     setName(() => {
  //       // return [...contacts, {
  //       //   name: name,
  //       //   id: nanoid(),
  //       //   number: number,
  //       // }];
  //
  //       return [name];
  //
  //       // return {
  //       //   contacts,
  //       //   name: "",
  //       // };
  //     });
  //
  //     setId(() => {
  //       return [nanoid()];
  //     });
  //     setNumber([number]);
  //
  //
  //     // console.log("onAddItem-name: ", name);
  //     // console.log("onAddItem-id: ", id);
  //     // console.log("onAddItem-number: ", number);
  //     // return false;
  //   } else {
  //     return true;
  //   }
  // };

  useEffect(() => {
    // console.log("name: ", name);
    // console.log("id: ", id);
    // console.log("number: ", number);
    console.log("contacts: ", contacts);
  }, [contacts]);

  // const onRemoveItem = (i) => {
  //   setName(
  //     name.filter((item) => i !== item.id),
  //   );
  // };

  const onRemoveItem = (i) => {
    setContacts(
      contacts.filter((item) => i !== item.id)
    );
  };

  // const checkItem = (my_name) => {
  //   return name.filter((item) => item.includes(my_name));
  // };

  const checkItem = (name) => {
    return contacts.filter((item) => item.name.includes(name));
  };

  const handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    setFilter(filter);
    // this.setState({ filter: filter });
  };

  // const contactsFilter = () => {
  //   return (
  //     name.filter((item) => item.includes(filter))
  //   );
  // };

  const contactsFilter = () => {
    return (
      contacts.filter((item) => item.name.includes(filter))
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addItem={onAddItem} />

      <h2>Contacts</h2>
      <Filter onChange={handleChangeInput} />

      <ContactList
        contacts={contactsFilter()}
        removeItem={onRemoveItem}
      />
    </>
  );
};
