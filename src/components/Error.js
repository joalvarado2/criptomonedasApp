import React from 'react'
import styled from "@emotion/styled"

const MensajeError = styled.p`
        background-color: #b7322c;
        padding: 1rem;
        color:#fff;
        font-size: 15px;
        text-transform: uppercase;
        font-weight:bold;
        text-align:center;
        font-family: "Bebas Neve", cursive;
    `;

const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
    )
}

export default Error
