import styled from "styled-components";

const Table = styled.div `
  width: 100%;
  padding-top: 30px;
  max-width: 1102px;
  height: 347px;
  background-color: #FFFF;
  border-radius: 5px;
  margin: 32px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    height: 20px;
}

  &::-webkit-scrollbar-thumb {
    background-color: #ADB6C0;

    border-radius: 10px;
}

  h1 {
    font-size: 20px;
    margin-left: 32px;
    color: #3D5879;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
  }


  .dataUser {
  margin-top: 42px;
  width: 100%;
}

.dataUser th {
  text-align: justify;
  padding: 24px;
  color: #657FA0;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}

.dataUser td{
  height: 72px;
  padding-left: 20px;
}


.dataUser td{
  height: 70px;
  border-top: 1PX solid #D4DAE4;
  font-family: 'Poppins', sans-serif;
  color: #3D5879;
  line-height: 70px;
}


.dataUser tr:hover{
  background-color: #FAFAFC;
  transition: ease-in-out .7s;
  cursor: pointer;
}

`

export default Table