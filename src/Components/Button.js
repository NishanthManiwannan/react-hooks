import React, {forwardRef, useImperativeHandle, useState} from 'react'

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        }
    }))

    return (
        <div>
            <button>Child Button</button>

            {toggle && <p>toggled</p>}
        </div>
    )
})

export default Button
