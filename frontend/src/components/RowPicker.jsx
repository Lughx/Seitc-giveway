export default function RowPicker({ row, setSelection }) {
    const click = (item) => {
        if (!item.available) return
        setSelection(item.number)
    }

    return (
        <tr>
            {row.map((item, i) => (
                <td key={i}>
                    <div className={`px-2 py-2 flex w-full justify-center`}>
                        <p  onClick={(e) => click(item)} className={`text-base text-gray-500 font-medium flex items-center justify-center font-medium rounded-full ${item.selection ? "bg-green-700 text-white" : ""} ${item.available ? "cursor-pointer hover:bg-green-600 hover:text-white w-8 h-8" : "text-white text-base w-8 h-8 bg-red-500 "}`}>{item.number}</p>
                    </div>
                </td>
            ))}
        </tr>
    )
}