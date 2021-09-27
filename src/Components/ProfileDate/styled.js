import styled from "styled-components";

const Profile = styled.div `
  display: flex;
  align-items: center;
  padding: 32px;

  div.profile {
    width: 120px;
    height: 120px;
    border-radius: 4px;
    background-color: #657FA0;
    margin-right: 32px;
  }

  div.profile img {
    width: 100%;
    border-radius: 4px;
  }

  div.date {
    position: relative;
  }

  div.date h3{
    font-size: 24px;
    color: #657FA0;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
  }

  div.date::before {
    display: inline-block;
    content: '';
    width: 5px;
    height: 16px;
    background-color: #490248;
    position: absolute;
    top: 51.7%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  div.repositories {
    width: 96px;
    height: 64px;
    border-radius: 4px;
    padding : 8px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    margin-top: 8px;
    text-align: center;
  }

  div.repositories span {
    color: #000;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    line-height: 32px;
  }

  div.repositories p {
    font-size: 11px;
    font-family: 'Poppins', sans-serif;
    color: #878790;
    margin-top: 8px;
  }
`

export default Profile