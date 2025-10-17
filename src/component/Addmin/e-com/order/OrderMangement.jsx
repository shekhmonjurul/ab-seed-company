import { useEffect, useRef, useState } from "react";
import NewSearch from "./NewSearch";
import OrderNav from "./OrderNav";
import { DataGrid } from "@mui/x-data-grid";
import StatusButton from "./StatusButton";
import handleRowsSelection from "../../../../logic/handleRowsSelection";
import { useReactToPrint } from "react-to-print";
import Invoice from "./Invoice";



export default function OrderMangement({ rows, columns, statusbuttons, value, handelChange }) {
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5
    })
    const rowsPrintRef = useRef()
    const [printRows, setPrintRows] = useState([])

    const handlePrint = useReactToPrint({ contentRef: rowsPrintRef })
    return (
        <div>
            <OrderNav />
            <div className="mt-4 bg-white text-left px-4">
                <StatusButton statusbuttons={statusbuttons} />
                <NewSearch
                    handelChange={handelChange}
                    value={value}
                />
                <button className="text-black bg-gray-200 p-1 w-[100px] rounded-[5px]  drop-shadow-2xl hover:bg-green-700 transition-all" onClick={handlePrint}>PRINT</button>
                <div>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 25, 50, 100]}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        pagination
                        page={5}
                        getRowHeight={() => "auto"}
                        pageSize={5}
                        // loading={true}
                        rowCount={5}
                        paginationMode="seiver"
                        onRowSelectionModelChange={(selectionModel) => handleRowsSelection(selectionModel, rows, setPrintRows)}
                        checkboxSelection
                    />
                </div>
            </div>
            {/* printing info */}
            <div className="">
                <div ref={rowsPrintRef} className={"bg-white"}>
                    <Invoice/>
                </div>
            </div>
        </div>
    )
}