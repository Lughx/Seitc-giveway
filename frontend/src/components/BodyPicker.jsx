import { useState, useEffect } from "react";
import RowPicker from "./RowPicker";

export default function BodyPicker({ page, setSelection }) {
    const [rows, setRows] = useState([])

    useEffect(() => {
        if (!page) return

        let counter = 0
        let row = []
        let temporalRows = []

        for (let i = 0; i < page.length; i++) {
            row.push(page[i])
            counter++
            if (counter >= 8) {
                temporalRows.push(row)
                row = []
                counter = 0
            }
        }
        temporalRows.push(row)

        setRows(temporalRows)
    }, [page])

    return (
        <tbody>
            {rows.map((row, i) => (
                <RowPicker row={row} setSelection={setSelection} key={i} />
            ))}
        </tbody>
    )
}