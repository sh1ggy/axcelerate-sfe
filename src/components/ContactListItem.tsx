import styled from "styled-components";

export interface ContactListItemProps {
  /** Contact List Item label */
  label: string;
  /** What background color to use */
  backgroundColor?: string;
  /** Email to be displayed as subtitle under label */
  email?: string;
  /** isActive determines background & text colour */
  isActive?: boolean;
}

const SubTitle = styled.p`
  font-size: 1em;
  color: #8492a0;
  padding: 0px;
  margin: 0px;
`;
const ThumbnailImage = styled.img`
  width: auto;
  height: auto;
  max-width: 360px;
  max-height: 360px;
`;
const TextContainer = styled.div`
  display: block;
  padding: 0px;
  margin-left: 12px;
`;

function ContactListItem({ label, email, isActive }: ContactListItemProps) {
  const Title = styled.p`
    font-size: 1.25em;
    font-weight: 500;
    color: ${isActive ? "#6b46ef" : "#20374b"};
    padding: 0px;
    margin: 0px;
  `;
  const ContactListItemContainer = styled.div`
    text-align: left;
    width: 400px;
    min-height: 52px;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${isActive ? "#f4f1fd" : "#ffffff"};
    font-family: "Roboto", sans-serif;
    transition: background-color 100ms linear;
    &:hover {
      background-color: #e6ecef;
    }
  `;
  return (
    <ContactListItemContainer>
      <ThumbnailImage src="/contactThumbnail.png" />
      <TextContainer>
        <Title>{label}</Title>
        {email && <SubTitle>{email}</SubTitle>}
      </TextContainer>
    </ContactListItemContainer>
  );
}

export default ContactListItem;
