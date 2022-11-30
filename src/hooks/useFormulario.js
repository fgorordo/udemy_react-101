import React, { useState } from 'react'

export const useFormulario = (initialState = {}) => {

    const [inputs, setInputs] = useState(initialState);


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setInputs({
            ...inputs,
            [name]: type === "checkbox" ? checked : value
        })
    };

    const reset = () => {
        setInputs(initialState);
    };

  return [inputs, handleChange, reset];
}
