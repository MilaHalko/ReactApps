import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  background: #8b005d;
  color: white;
  border: 1px solid #8b005d;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  width: 100%;
  
  @media (min-width: 600px) {
    width: auto;
  }
  
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`

export default Button