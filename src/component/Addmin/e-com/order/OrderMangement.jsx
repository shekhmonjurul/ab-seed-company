import { createContext, useEffect, useRef, useState } from "react";
import NewSearch from "./NewSearch";
import OrderNav from "./OrderNav";
import { DataGrid } from "@mui/x-data-grid";
import StatusButton from "./StatusButton";
import handleRowsSelection from "../../../../logic/handleRowsSelection";
import { useReactToPrint } from "react-to-print";
import Invoice from "./Invoice";



export default function OrderMangement({ rows, columns, statusbuttons, value, handelChange, loading, ...option }) {
    const rowsPrintRef = useRef()
    const [printRows, setPrintRows] = useState([])
    const handlePrint = useReactToPrint({ contentRef: rowsPrintRef })


    const handleSteadFast = () => { }

    const actionButtons = [
        {
            id: 1,
            name: "PRINT",
            handleFunction: handlePrint
        },
        {
            id: 2,
            name: "SteadFast",
            handleFunction: handleSteadFast
        }
    ]
    return (
        <div>
            <OrderNav />
            <div className="mt-4 bg-white text-left px-4">
                <div className="sticky top-19 z-49 bg-white border-b border-gray-100">
                    <StatusButton statusbuttons={statusbuttons} />
                    <div className="flex justify-between items-center">
                        <NewSearch
                            handelChange={handelChange}
                            value={value}
                        />
                        <div className="mx-4">
                            {
                                actionButtons.map(action => (
                                    <button
                                        className="text-black mx-4 bg-white border border-gray-200 p-1 w-[100px] rounded-[5px] drop-shadow-xl hover:text-green-700 transition-all  hover:drop-shadow"
                                        onClick={action.handleFunction}
                                        key={action?.id}
                                    >
                                        {action?.name}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10, 15, 25, 100]}
                        
                        getRowHeight={() => "auto"}
                        loading={loading}
                        onRowSelectionModelChange={(selectionModel) => handleRowsSelection(selectionModel, rows, setPrintRows)}
                        pagination
                        paginationMode="server"
                        {...option}
                        checkboxSelection
                        sx={{
                            '& .MuiDataGrid-cell': {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                                // textAlign: 'center',
                            },
                            '& .MuiDataGrid-columnHeader': {
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: "center",
                            },
                        }}
                    />
                </div>
            </div>
            {/* printing info */}
            <div className="hidden">
                <div ref={rowsPrintRef} className={"bg-white"}>
                    {
                        printRows?.map((row, index) => (
                            <Invoice printRow={row} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}