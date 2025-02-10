import React from "react";
import styled from "styled-components";

export interface SectionHeaderProps {
  /** Section Header Label */
  label: string;
  /** Optional click handler */
  onClick?: () => void;

  child: React.ReactNode;
}

const Title = styled.p`
  font-size: 1.25em;
  font-weight: 500px;
  padding: 0px;
  margin: 0px;
  color: #5a6d80;
  font-family: "Roboto", sans-serif;
`;
const SectionHeaderContainer = styled.div`
  text-align: left;
  width: 400px;
  min-height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: "#ffffff";
  padding-left: 16px;
  transition: background-color 100ms linear;
  &:hover {
    background-color: #e6ecef;
  }
`;
const SectionContainer = styled.div`
  border: 1px solid #e4e5e8;
  display: flex;
  flex-direction: column;
`;
const ExpandedArrow = styled.img`
  margin-left: auto;
  padding-right: 16px;
`;

function SectionHeader({ label, child, ...props }: SectionHeaderProps) {
  const [isExpanded, setExpanded] = React.useState(true);

  return (
    <SectionContainer>
      <SectionHeaderContainer onClick={() => setExpanded(!isExpanded)}>
        <Title>{label}</Title>
        {isExpanded ? (
          <ExpandedArrow src="/down.png" />
        ) : (
          <ExpandedArrow src="/right.png" />
        )}
      </SectionHeaderContainer>
      {isExpanded && child}
    </SectionContainer>
  );
}

export default SectionHeader;
