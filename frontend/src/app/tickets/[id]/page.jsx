import QrIntent from "@/components/giveway/QrIntent";
import Stepper from "@/components/giveway/Stepper";
import Image from "next/image";
import moment from "moment";
import "moment/locale/es"
import Link from "next/link";
moment.locale("es")

const getIntent = async (id) => {
    const { BACKEND_URI } = process.env;

    const res = await fetch(`${BACKEND_URI}/giveway/intent/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    return res.json();
}

export default async function Main({ params }) {
    const intent = await getIntent(params.id)

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-3 md:col-span-3 lg:col-span-2 h-screen">
                <Image className="h-screen object-cover" src="/autumn1080p.jpg" height={1080} width={1920} />
            </div>
            <div className="m-4 p-4 col-span-3 lg:col-span-1">
                <ol className="flex items-center w-full justify-between mb-4 sm:mb-5">
                    <li className="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${step >= 1 ? "bg-blue-100" : "bg-gray-100"}`}>
                            <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                            </svg>
                        </div>
                    </li>
                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 ${step >= 2 ? "bg-blue-100" : "bg-gray-100"}`}>
                            <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
                                <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
                            </svg>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 ${step >= 3 ? "bg-blue-100" : "bg-gray-100"}`}>
                            <svg className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                            </svg>
                        </div>
                    </li>
                </ol>
                <div className="shadow-md p-4 border">
                    <section className="text-gray-700 text-sm">
                        {intent.intent}
                    </section>
                    <section className="grid grid-cols-2 mb-4">
                        <div className="flex items-center text-base">
                            {moment(intent.createdAt).format("DD/MM/YYYY, h:mm:ss a")}
                        </div>
                        <div>
                            <Image src="/seitc.png" width={500} height={200} />
                        </div>
                    </section>
                    {/*  */}
                    <section className="mb-5 flex flex-wrap justify-between text-">
                        <div className="mr-2 mt-2 bg-gray-400 py-1 px-2 rounded-xl text-white">
                            {intent.name}
                        </div>
                        <div className="mr-2 mt-2 bg-gray-400 py-1 px-2 rounded-xl text-white">
                            {intent.phone}
                        </div>
                        <div className="mt-2 bg-gray-400 py-1 px-2 rounded-xl text-white">
                            {intent.email}
                        </div>
                    </section>
                    {/*  */}
                    <section className="mb-5">
                        <div className="font-bold">
                            Resumen
                        </div>
                        <div className="font-medium">
                            Boleto (número {intent.number}) . . . . . . . . . . . . . . . 100$
                        </div>
                    </section>
                    {/*  */}
                    <hr />
                    <section className="grid grid-cols-2">
                        <div>
                            <div>
                                <QrIntent id={intent.intent} />
                            </div>
                            <div>

                            </div>
                        </div>
                    </section>
                </div>
                <div className="mt-4">
                    <Link href="/" type="submit" className="text-white font-bold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Comprar otro boleto
                    </Link>
                </div>
            </div>
        </div>
    )
}