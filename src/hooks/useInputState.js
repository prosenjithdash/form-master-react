import { useState } from "react"

const useInputState = (defaultValue = null) => {
    
    // state
    const [value, setValue] = useState(defaultValue);
    

    // handleChange
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    // return

    return [
        value,
        handleChange,
    ]
}

export default useInputState;