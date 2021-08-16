import styled from "styled-components";

export const ContactFormStyled = styled.div`
  padding: 25px 15px;
  margin: 10px;
  border: 1px solid;
  border-radius: 5px;
  width: 400px;
  .inputName {
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    background-color: lightgrey;
  }
  .btnAdd {
    display: block;
    margin-top: 30px;
    padding: 3px 5px;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    background-color: transparent;
    &:hover {
      background-color: cornflowerblue;
    }
  }
  .label {
    /* background-color: lightgrey; */
    font-weight: bold;
    padding: 5px;
  }
`;
