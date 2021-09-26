import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 563px;
  height: ${({ isPrimary }) => (isPrimary ? "63px" : "48px")};
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  left: -3.5%;
  top: -80%;

  input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 24px 40px 24px 32px;
    color: #4f4f4f;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    margin-left: 32px;
    outline: none;
  }

  button {
    display: inline-block;
    padding: 24px;
    font-size: 24px;
    background-color: #5a3d5c;
    height: 63px;
    box-sizing: border-box;
    justify-content: center;
    border-radius: 2px;
    border: 0;
    cursor: pointer;
    color: white;
  }
`;

export const SearchIcon = styled.span`
  left: 0;
  position: absolute;
  padding: 12px 16px;
  align-items: center;
  display: inline-flex;
`;

export const SearchButton = styled.button`
  display: flex;
  padding: 17px 20px;
  background-color: #5a3d5c;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid #5a3d5c;
  cursor: pointer;
  align-items: center;
`;
