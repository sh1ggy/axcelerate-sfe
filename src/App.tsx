import styled from "styled-components";
import FullList from "./components/FullList";
import "./App.css";
import { Contact, contactsInit } from "./types/Contact";
import { useEffect, useState } from "react";

const AppContainer = styled.div`
  background-color: "#ffffff";
`;

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState<Contact[]>(contactsInit);
  const [filtered, setFiltered] = useState<Contact[]>(contactsInit);

  useEffect(() => {
    if (search === "") {
      setContacts(contactsInit);
      return;
    }
    setFiltered(contacts.filter((contact: Contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search, setSearch]);

  return (
    <AppContainer>
      <FullList
        contacts={filtered}
        showEmail={false}
        search={search}
        setSearch={setSearch}
      />
    </AppContainer>
  );
}

export default App;
