"use client"
import { useEffect, useState } from "react";
import RowPicker from "./RowPicker";
import BodyPicker from "./BodyPicker";

export default function NumberPicker({ setValue }) {
    const [numbers, setNumbers] = useState([])
    const [pages, setPages] = useState([])
    const [actualPage, setActualPage] = useState(0)
    const [selection, setSelection] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/giveway/get/66f076e39040df8eb5484722", {
            method: "GET"
        }).then(async (result) => {
            setPages([])
            const res = await result.json();
            let counter = 0
            let page = []
            let pagesTemporal = []
            for (let i = 0; i < res.tickets.total; i++) {
                if (selection == res.tickets.numbers[i].number) {
                    let temporalItem = res.tickets.numbers[i]
                    temporalItem["selection"] = true
                    setValue("number", res.tickets.numbers[i].number)
                    page.push(temporalItem)
                } else {
                    page.push(res.tickets.numbers[i])
                }

                if (counter >= 40) {
                    pagesTemporal.push(page)
                    counter = 0;
                    page = []
                }
                counter++
            }
            pagesTemporal.push(page)
            setPages(pagesTemporal)
            setNumbers(res)
        });
    }, [selection])

    useEffect(() => {
    }, [pages])

    const clickPrevious = () => {
        if (actualPage > 0) setActualPage(actualPage - 1)
        console.log(actualPage)
    }

    const clickNext = () => {
        if (actualPage <= pages.length-1) {
            setActualPage(actualPage + 1)
            console.log("entra")
        }
        console.log(actualPage)
    }

    return (
        <div>
            <div className="flex items-center justify-center mb-4 rounded-xl">
                <div className="w-full shadow-sm border rounded-xl">
                    <div className="md:p-8 p-5">
                        <div className="px-4 flex items-center justify-between">
                            <span tabIndex="0" className="focus:outline-none text-md font-bold text-gray-800">Selecciona tu numero</span>
                            <div className="flex items-center">
                                <button onClick={clickPrevious} aria-label="calendar backward" className={`${actualPage <= 0 ? "cursor-default" : "focus:text-gray-400 hover:bg-blue-500"} bg-blue-400 text-white rounded-md`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                </button>
                                <button onClick={clickNext} aria-label="calendar forward" className={`${actualPage >= pages.length-1 ? "cursor-default" : "focus:text-gray-400 hover:bg-blue-500"} ml-2 bg-blue-400 text-white rounded-md`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="9 6 15 12 9 18" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-12 overflow-x-auto">
                            <table className="w-full">
                                <BodyPicker page={pages[actualPage]} setSelection={setSelection} />
                            </table>
                        </div>
                        <div className="mt-4">
                            <div className="text-base">Numero seleccionado: </div>
                            <div className="">
                                {selection}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}