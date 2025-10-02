import { useEffect, useState } from "react";
import NewSearch from "./NewSearch";
import OrderNav from "./OrderNav";
import { DataGrid } from "@mui/x-data-grid";
import StatusButton from "./StatusButton";



export default function OrderMangement({ rows, columns, statusbuttons, value, handelChange}) {
    return (
        <div>
            <OrderNav />
            <div className="mt-4 bg-white text-left px-4">
                <StatusButton statusbuttons={statusbuttons} />
                <NewSearch
                    handelChange={handelChange}
                    value={value}
                />
                <div>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowHeight={() => 'auto'}
                        hideFooter
                    />
                </div>
            </div>
        </div>
    )
}