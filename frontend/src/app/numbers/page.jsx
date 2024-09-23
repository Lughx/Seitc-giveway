import TableNumbers from "@/components/giveway/TableNumbers";

const getIntents = async (id) => {
    const { BACKEND_URI } = process.env;

    const res = await fetch(`${BACKEND_URI}/giveway/intents`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    return res.json();
}

export default async function Main() {
    const intents = await getIntents()
    
    return (
        <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1 mt-4">
            <TableNumbers intents={intents} />
        </div>
    )
}