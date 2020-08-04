import React from 'react';
import 
{
    Polygon, Content, LeftContent, View, ViewSearch, Logo,
    SearchText, Bold, Computer, SearchInput, GitButton, ViewSocial
}    
from "../assets/styles";

import { FaSearch, FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';

const polygon = require("../assets/images/polygon.png");
const computer = require("../assets/images/img-app.png");
const logo = require("../assets/images/logo.png");

const Home = () => (
    <Content>
        <Polygon src = {polygon}></Polygon>
        <Computer src = {computer}></Computer>
        <LeftContent>
            <View>
                <Logo src = {logo}></Logo>
            </View>
            <ViewSearch>
                <SearchText>Buscar um usuário no <Bold>Github</Bold> <br/> ficou muito <Bold>fácil!</Bold></SearchText>
            </ViewSearch>
            <SearchInput placeholder = "Buscar usuário">
                <FaSearch style = {{color: "#4F4F4F", marginLeft: 14, fontSize: 18}}></FaSearch>
                <input placeholder = "Buscar usuário"></input>
                <GitButton>
                    <FaGithub style = {{color: "white", fontSize: 18}}></FaGithub>
                </GitButton>
            </SearchInput>
        </LeftContent>
        <ViewSocial>
            <FaMedium style = {{color: "#FD71EA", fontSize: 28}}></FaMedium>
            <FaInstagram style = {{color: "#FD71EA", fontSize: 28}}></FaInstagram>
            <FaLinkedin style = {{color: "#FD71EA", fontSize: 28}}></FaLinkedin>
        </ViewSocial>
    </Content>
)

export default Home;