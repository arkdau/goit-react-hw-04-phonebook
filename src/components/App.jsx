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

  const onAddItem = (name, number) => {
    if (checkItem(name).length === 0) {
      const arr = [{ name: name, id: nanoid(), number: number }];

      // 👇️ merge arrays 👇️
      setContacts([...contacts, ...arr]);

      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    console.log("contacts: ", contacts);
  }, [contacts]);

  const onRemoveItem = (i) => {
    setContacts(
      contacts.filter((item) => i !== item.id),
    );
  };

  const checkItem = (name) => {
    return contacts.filter((item) => item.name.includes(name));
  };

  const handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    setFilter(filter);
  };

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
