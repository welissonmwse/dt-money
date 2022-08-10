import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;

    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;

    border: 1px solid ${(props) => props.theme["green-300"]};
    background: transparent;
    color: ${(props) => props.theme["green-300"]};
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;

    transition: all .2s;

    &:hover {
      border-color: ${(props) => props.theme["green-500"]};
      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
    }
  }
`