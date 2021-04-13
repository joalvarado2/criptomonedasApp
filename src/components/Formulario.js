import React, {useEffect, useState} from 'react'
import Error from "./Error"
import styled from "@emotion/styled"
import useMoneda from "../hooks/useMoneda"
import useCriptomoneda from "../hooks/useCriptomoneda"
import axios from 'axios'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color:#326ac0;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [listaCripto, setListaCripto] = useState([]);
    const [error, setError] = useState(false);

    const Monedas = [
        {codigo: "USD", nombre: "Dolar de Estados Unidos"},
        {codigo: "MXN", nombre: "Peso Mexicano"},
        {codigo: "EUR", nombre: "Euro"},
        {codigo: "GBP", nombre: "Libra Esterlina"},
        {codigo: "COL", nombre: "Peso Colombiano"}
    ]
    // utilizar useMoneda
    const [state, Seleccionar, actualizarState] = useMoneda("Elige tu moneda", "", Monedas);

    //  utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda("Elige tu Criptomoneda", "", listaCripto)

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url= "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const resultado = await axios.get(url);

            setListaCripto(resultado.data.Data);
        }
        consultarAPI();
    },[])

    // cuando el usuario hace submit
    const cotizarMoneda = (e) => {
        e.preventDefault();

        // validar si ambos  campos estan llenos
        if(state === "" || criptomoneda === ""){
            setError(true);
            return;
        }

        // pasar los datos al componente principal
        setError(false);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
        {error ? <Error mensaje="Todos los campos son Obligatorios"/> : null}
 
        <Seleccionar/>
        <SelectCripto/>
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    )
}

export default Formulario
