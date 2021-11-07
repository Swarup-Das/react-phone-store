import styled from "styled-components";

export const ButtonCont = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  margin: 5px;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--lightBlue);
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    backround: var(--lightBlue);
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;
