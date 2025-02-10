import styled from "styled-components";
import { Contact } from "../types/Contact";
import SearchField from "./SearchField";
import SectionHeader from "./SectionHeader";
import Section from "./Section";

export interface FullListProps {
  contacts: Contact[];
  showEmail: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const FullListContainer = styled.div`
  text-align: left;
  width: 400px;
  min-height: 52px;
  padding: 8px, 16px, 8px, 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: "#ffffff";
  transition: background-color 100ms linear;
`;

const NotFound = styled.p`
  text-align: left;
`;

function FullList({
  contacts,
  showEmail,
  search,
  setSearch,
  ...props
}: FullListProps) {
  const absentContacts = contacts.filter(
    (contact) => contact.status === "Absent"
  );
  const attendedContacts = contacts.filter(
    (contact) => contact.status === "Attended"
  );
  return (
    <FullListContainer>
      <SearchField search={search} setSearch={setSearch} />
      {contacts.length === 0 ? (
        <NotFound>No results!</NotFound>
      ) : (
        <>
          <SectionHeader
            label="Attended"
            child={
              <Section contacts={attendedContacts} showEmail={showEmail} />
            }
          />
          <SectionHeader
            label="Absent"
            child={<Section contacts={absentContacts} showEmail={showEmail} />}
          />
        </>
      )}
    </FullListContainer>
  );
}

export default FullList;
