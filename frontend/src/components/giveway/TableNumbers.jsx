export default function TableNumbers({ intents }) {
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Numero
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Celular
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {intents.map((intent, i) => (
                            <tr className="bg-white border-b" key={i}>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {intent.number}
                                </th>
                                <td className="px-6 py-4">
                                    {intent.name}
                                </td>
                                <td className="px-6 py-4">
                                    {intent.email}
                                </td>
                                <td className="px-6 py-4">
                                    {intent.phone}
                                </td>
                                <td className={`px-6 py-4 ${intent.status == 0 ? "" : "text-green-500"}`}>
                                    {intent.status == 0 ? "Pendiente" : "Pagado"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}