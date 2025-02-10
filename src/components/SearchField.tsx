import styled from "styled-components";

interface SearchFieldProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = styled.input`
  font-size: 1.25em;
  font-weight: 500px;
  padding: 0px;
  padding-left: 16px;
  margin: 0px;
  color: #20374b;
  border: none;
  border-color: transparent;
  outline: none;
  height: 100%;
  font-family: "Roboto", sans-serif;
  background-color: white;
`;
const SearchFieldContainer = styled.div`
  text-align: left;
  width: 400px;
  min-height: 52px;
  border: 1px solid #e4e5e8;
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  align-items: center;
  background-color: "#ffffff";
  transition: background-color 100ms linear;
`;

function SearchField({ search, setSearch, ...props }: SearchFieldProps) {
  return (
    <SearchFieldContainer>
      <img src="/search.png" />
      <SearchInput
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
    </SearchFieldContainer>
  );
}

export default SearchField;
