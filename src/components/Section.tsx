import styled from "styled-components";
import ContactListItem from "./ContactListItem";
import { Contact } from "../types/Contact";

export interface SectionProps {
  contacts: Contact[];
  showEmail: boolean;
}

const SectionContainer = styled.div`
  text-align: left;
  min-height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: "#ffffff";
  transition: background-color 100ms linear;
`;

function Section({ contacts, showEmail, ...props }: SectionProps) {
  return (
    <SectionContainer>
      {contacts.map((contact: Contact) => (
        <ContactListItem
          key={contact.name}
          label={contact.name}
          email={showEmail ? contact.email : undefined}
        />
      ))}
    </SectionContainer>
  );
}

export default Section;
