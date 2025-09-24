import { useEffect, useState } from "react";
import NewSearch from "./NewSearch";
import OrderNav from "./OrderNav";
import { DataGrid } from "@mui/x-data-grid";
import StatusButton from "./StatusButton";



export default function OrderMangement({ rows, columns, statusbuttons }) {
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState(rows)
    const handelChange = (event) => {
        const input = event.target.value
        setSearch(input)

    }
    useEffect(() => {
        if (search) {
            const filterorder = rows.filter((row) => row.id === parseInt(search) || row.customer.phonenumber === search)
            setOrder(filterorder)

        } else {
            setOrder(rows)
        }
    }, [search])
    return (
        <div>
            <OrderNav />
            <div className="mt-4 bg-white text-left px-4">
                <StatusButton statusbuttons={statusbuttons} />
                <NewSearch
                    handelChange={handelChange}
                    value={search}
                />

                <div>
                    <DataGrid
                        rows={order}
                        columns={columns}
                        getRowHeight={() => 'auto'}
                        hideFooter
                    />
                </div>
            </div>
        </div>
    )
}