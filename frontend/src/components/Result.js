import React from "react";
import
{
    View, ViewNumberRepositories, Logo, Nav, BodyTable, TextFooter, ViewCenter,
    SearchInput, GitButton, ContainerRepositories, Footer, Logo2, TextFooter2, Top,
    Container, UserImg, ViewUserInfo, UserName, HeaderTable, FooterTop, Polygon2, FooterBottom
}    
from "../assets/styles";

import { FaSearch, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpinner } from 'react-icons/fa';

import {getUser} from "../actions/index";
import {connect} from "react-redux";

const logo = require("../assets/images/logo.png");
const logo2 = require("../assets/images/logo2.png");
const polygon = require("../assets/images/polygon2.png");

class Result extends React.Component {

    constructor(props){
        super(props);
        this.state = {user: ""}
    }

    renderRows = (user) => {
        let arr = [];
        user.repositories.nodes.forEach(element => {
            arr.push(
                <tr>
                    <td>{element.name}</td>
                    <td>{element.ref ? element.ref.target.history.totalCount : "Privado"}</td>
                    <td>{element.ref ? element.ref.target.history.edges[0].node.message : "Privado"}</td>
                    <td>{element.ref ? element.ref.target.history.edges[0].node.oid : "Privado"}</td>
                </tr>
            )
        });
        return arr;
    }

    render = () => {
        let user = this.props.user ? this.props.user.user : null;
        return <View> 
        <Container>
            <Nav>
                <Logo src = {logo}></Logo>
                <SearchInput style = {{marginTop:0}} placeholder = "Buscar usuário">
                    <FaSearch style = {{color: "#4F4F4F", marginLeft: 14, fontSize: 18}}></FaSearch>
                    <input value = {this.state.user} onChange = {user => this.setState({user: user.target.value})} placeholder = "Buscar usuário"></input>
                    <GitButton loading = {this.props.loading ? "true" : "false"} disabled = {this.props.loading} onClick = {() => this.props.getUser(this.state.user)}>
                        {this.props.loading ? 
                        <FaSpinner className = "spin" style = {{color: "white", fontSize: 18}}></FaSpinner> :
                        <FaGithub style = {{color: "white", fontSize: 18}}></FaGithub>
                        }
                    </GitButton>
                </SearchInput>
                <View>
                    <FaMedium style = {{color: "#ca5abb", fontSize: 28}}></FaMedium>
                    <FaInstagram style = {{color: "#ca5abb", fontSize: 28}}></FaInstagram>
                    <FaLinkedin style = {{color: "#ca5abb", fontSize: 28}}></FaLinkedin>
                </View>
            </Nav>
            {user ?
                <View>
                    <ViewUserInfo>
                        <UserImg src = {user.avatarUrl}></UserImg>
                        <View style = {{marginLeft: 50}}>
                            <UserName>{user.name}</UserName>
                            <ViewNumberRepositories>
                                <label>{user.repositories.totalCount}</label>
                                <label>Repositórios</label>
                            </ViewNumberRepositories>
                        </View>
                    </ViewUserInfo>
                    <ContainerRepositories>
                        <label>Lista de Repositórios</label>
                        <table className = "table table-striped">
                            <HeaderTable>
                                <tr>
                                    <th>REPOSITÓRIO</th>
                                    <th>COMMITS</th>
                                    <th>MSG ULTIMO COMMIT</th>
                                    <th>HASH ULTIMO COMMIT</th>
                                </tr>
                            </HeaderTable>
                            <BodyTable>
                                {this.renderRows(user)}
                            </BodyTable>
                        </table>
                    </ContainerRepositories>
                </View>
                : <label></label>
            }
        </Container>
        <Footer>
            <Polygon2 src = {polygon}></Polygon2>
            <FooterTop>
                <ViewCenter>
                    <Logo2 src = {logo2}></Logo2>
                </ViewCenter>
                <ViewCenter>
                    <TextFooter>Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre a sociedade, mudando o nosso dia a dia, facilitando atividades comuns e acelerando os negócios.</TextFooter>
                </ViewCenter>
                <View>
                    <TextFooter2>BRASIL</TextFooter2>
                    <TextFooter>R. Raphael Dias da Silva, 753º andar • Sala 306 e 308 Campolim • Sorocaba/SP</TextFooter>
                </View>
                <View>
                    <TextFooter2>CANADÁ</TextFooter2>
                    <TextFooter>830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec</TextFooter>
                </View>
            </FooterTop>
            <FooterBottom>
                <ViewCenter>
                    <TextFooter>Todos os direitos reservados - 2020</TextFooter>
                </ViewCenter>
                <View>
                    <FaMedium style = {{color: "#ca5abb", fontSize: 28}}></FaMedium>
                    <FaInstagram style = {{color: "#ca5abb", fontSize: 28}}></FaInstagram>
                    <FaLinkedin style = {{color: "#ca5abb", fontSize: 28}}></FaLinkedin>
                </View>
                <View>
                    <Top onClick = {() => window.scrollTo({top: 0, behavior: 'smooth'})}>VOLTAR AO TOPO</Top>
                </View>
            </FooterBottom>
        </Footer>
        </View>
    }
}

const mapStateToProps = state => ({
    loading: state.user.loading,
    user: state.user.user
});

export default connect(mapStateToProps, {getUser})(Result);