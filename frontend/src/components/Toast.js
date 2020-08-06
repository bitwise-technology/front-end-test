import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { ViewSocialToast } from "../assets/styles";

const msg = (text) => (
    <div>
        <label style = {{margin: 0}}>{text}</label>
        <label style = {{fontSize: 10, margin: 0, fontWeight: 0}}>Aproveite e acompanhe a Bitwise nas redes sociais:</label>
        <ViewSocialToast>
            <FaMedium style = {{color: "white", fontSize: 22}}></FaMedium>
            <FaInstagram style = {{color: "white", fontSize: 22}}></FaInstagram>
            <FaLinkedin style = {{color: "white", fontSize: 22}}></FaLinkedin>
        </ViewSocialToast>
    </div>
);

export default msg;