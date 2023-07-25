import React from 'react'
import { useState } from 'react';


const TextBoxAlta = ({ label, cambio}) => {

    const [value, setValue] = useState('');
    const id = label.replace( '','_').toLowerCase()

    const change = (e) =>
    {
        const val = e.target.value
        cambio(id, val)
        setValue(val)
    }

    return (
        <div className="datos">
            <label htmlfor={
            id
            }>
                {label}
                <input type="text" name="nombre" required autofocus id={id} 
                value={value}
                onInput={change} />
            </label>

        </div>
    )
}
export default TextBoxAlta;
