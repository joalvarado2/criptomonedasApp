import React, { useState } from 'react';
import styled from "@emotion/styled"

const Label = styled.label`
    font-family:"Bebas Neve", cursive;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top:2rem;
    margin-bottom:0.5rem;
    display:block;
`;

const Select = styled.select`
    width:100%;
    display:block;
    padding:0.8rem;
    -webkit-appearance: none;
    border-radius:10px;
    border:none;
    font-size:1rem;
`;

const useMoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const Seleccionar = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">--Seleccione--</option>
                {opciones.map(item => (
                    <option key={item.codigo} value={item.codigo}>{item.nombre}</option>
                ))}
            </Select>
        </>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [ state, Seleccionar, setState];
}

export default useMoneda;