import React, { useState } from 'react';

const useMoneda = () => {

    //State de nuestro custom hook
    const [state, setState] = useState("");

    const Seleccionar = () => (
        <>
            <label>Moneda</label>
            <select>
                <option value="COL">Peso Colombiano</option>
            </select>
        </>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [ state, Seleccionar, actualizarState];
}

export default useMoneda;