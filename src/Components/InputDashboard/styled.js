import styled from "styled-components";

const InputDash = styled.div `
  padding: 16px;
  position: relative;
  
  input {
    width: 593px;
    height: 49px;
    border: none;
    outline: none;
    padding: 16px 32px;
    font-size: 14px;
    letter-spacing: 1px;
    color: #373435;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

 span {
   display: inline-block;
   margin-right: 8px;
   color: #373435;
   position: absolute;
   top: 50%;
   left: 4%;
   transform: translateY(-50%);
 }
`
export default InputDash