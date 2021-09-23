import styled from "styled-components";

const Input = styled.div `
  width: 563px;
  height: 53px;
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  left: -3.5%;
  top: -80%;

   input{
     width: 100%;
     height: 63px;
     font-size: 16px;
     padding: 24px 40px;
     color: #4F4F4F;
     border:0;
     border-radius: 4px;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
     box-sizing: border-box;
     margin-left: 32px;
     outline: none;
   }

   span.search {
     display: inline-block;
     color: #4F4F4F;
     font-size: 24px;
     position: absolute;
     left: 8%;
   }

    button {
     display: inline-block;
     padding: 24px;
     font-size: 24px;
     background-color: #5A3D5C;
     height: 63px;
     box-sizing: border-box;
     justify-content: center;
     border-radius: 2px;
     border: 0;
     cursor: pointer;
     color: white;
   }

`

export default Input