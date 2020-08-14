import React from 'react'
import { RiInstagramLine, RiLinkedinBoxLine, RiMediumLine } from "react-icons/ri";

import * as Y from './style'

export default function SocialMidia(props) {
    return (
        <>
            <Y.LinkRedesSociais href="https://medium.com/@bitwisetechnology" target="_blank"><RiMediumLine size={30} /></Y.LinkRedesSociais>
            <Y.LinkRedesSociais href="https://www.linkedin.com/company/bitwisetechnology" target="_blank"><RiLinkedinBoxLine size={30} /></Y.LinkRedesSociais>
            <Y.LinkRedesSociais href="https://instagram.com/bitwisetechnology?igshid=ffm32tcs7kib" target="_blank"><RiInstagramLine size={30} /></Y.LinkRedesSociais>
        </>    
    )
}