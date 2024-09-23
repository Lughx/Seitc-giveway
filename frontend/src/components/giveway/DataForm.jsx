"use client"
import { useState, useEffect } from "react";
import InputText from "../all/InputText";
import NumberPicker from "../NumberPicker";
import { useForm } from "react-hook-form";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DataForm({ setData, setStep }) {
    const { register, handleSubmit, setValue, formState: { errors }, trigger, clearErrors, reset } = useForm()
    const [errorNumber, setErrorNumber] = useState()

    useEffect(() => {
        console.log("errors actualizados")
    }, [errors])


    const onSubmit = handleSubmit(async (data) => {
        clearErrors()
        if (!data.number) return setErrorNumber(true)

        await setData({
            name: data.name,
            phone: data.phone,
            email: data.email,
            number: data.number,
            giveway: "66f076e39040df8eb5484722"
        })
        await setStep(2)
        reset()
    })

    return (
        <form onSubmit={onSubmit}>
            <div>
                {/* <div className="mb-3">
                    Datos personales
                </div> */}
                <div className="p-4 mb-4 w-full shadow-sm border rounded-xl">
                    <div className="mb-3">
                        <InputText
                            name={"name"}
                            label={"Nombre"}
                            type={"text"}
                            placeholder={"Raime"}
                            register={register}
                            errors={errors}
                            trigger={trigger}
                            requeriments={{
                                required: {
                                    value: true,
                                    message: "El nombre no puede estar vacío"
                                },
                                minLength: {
                                    value: 3,
                                    message: "El nombre tiene que ser minimo de 3 caracteres"
                                },
                                maxLength: {
                                    value: 25,
                                    message: "El nombre tiene que ser menor de 25 caracteres"
                                }
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <InputText
                            name={"phone"}
                            label={"Celular"}
                            type={"number"}
                            placeholder={"1234567890"}
                            register={register}
                            trigger={trigger}
                            errors={errors}
                            requeriments={{
                                required: {
                                    value: true,
                                    message: "El celular no puede estar vacío"
                                },
                                minLength: {
                                    value: 3,
                                    message: "El celular tiene que ser de al menos 10 caracteres"
                                },
                                maxLength: {
                                    value: 11,
                                    message: "El celular no puede ser mayor de 11 caracteres"
                                }
                            }}
                        />
                    </div>

                    <div>
                        <InputText
                            name={"email"}
                            label={"Correo electrónico"}
                            type={"email"}
                            placeholder={"seitc@tec.mx"}
                            register={register}
                            errors={errors}
                            trigger={trigger}
                            requeriments={{
                                required: {
                                    value: true,
                                    message: "El correo no puede estar vacío"
                                },
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "El correo es inválido"
                                }
                            }}
                        />
                    </div>
                </div>
                <NumberPicker setValue={setValue} />
                {errorNumber &&
                    <div className="text-base text-red-600">Necesitas seleccionar el numero</div>
                }
                <div>
                    <button type="submit" className="text-white font-bold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Siguiente &#62;
                    </button>
                </div>
            </div>
        </form>
    )
}