import { EditInputSpace } from './EditInputStyled'
import { useState } from 'react';

export function EditInput({type, value: initialValue, name, register}){
    const [value, setValue] = useState(initialValue);

    let inputProps = {
        type,
        ...register(name),
        onChange: (e) => setValue(e.target.value)
    }

    if (value) inputProps.value = value

    return <EditInputSpace {...inputProps} />
}