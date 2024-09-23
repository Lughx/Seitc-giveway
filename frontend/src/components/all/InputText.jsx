"use client"
import { useEffect, useState } from "react"
import "../formStripe.css"

export default function InputText({ name, label, type, register, errors, requeriments, placeholder, trigger }) {
    const [active, setActive] = useState(true)
    const [textError, setText] = useState("")
    const [value, setValue] = useState("")

    useEffect(() => {
        const keys = Object.keys(errors)
        const values = Object.values(errors)
        console.log(errors)
        for (let i=0; i < keys.length; i++) {
            if (keys[i] == name) {
                setText(values[i].message)
                setActive(true)
            }
        }
    }, [errors])

    function input(e) {
        setValue(e.target.value)
        setActive(false)
        //trigger()
    }

    return (
        <div className="relative w-full">
            {type != "textarea" && <div>
                <label className={`text-gray-900 text-sm cursor-text`} htmlFor={name}>{label}</label>
                <input type={type} id={name} onChange={input} placeholder={placeholder} className="border-none text-base bg-[#f1f1f1] rounded-xl border-gray-300 px-4 py-3 w-full focus:outline-none" onInput={input} autoComplete="off"
                    value={value}
                    {...register(name, requeriments)}
                />
                {
                    active && <div className={`text-xs text-red-600`}>{textError}</div>
                }
            </div>}
            {type === "textarea" && <div>
                <textarea type={type} id={name} className="border rounded-lg border-gray-300 px-2 py-2 w-full focus:outline-none transition-colors peer" onInput={input} autoComplete="off"
                    value={value}
                    {...register(name, requeriments)}
                />
                <label className={`absolute px-2 left-1 text-gray-600 bg-white cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all ${stylesLabel}`} htmlFor={name}>{label}</label>
                {
                    active && <span className={`text-xs text-red-600 leading-none`}>{textError}</span>
                }
            </div>}
        </div>
    )
}