import { createContext, useEffect, useRef, useState } from 'react';
import NewSearch from './NewSearch';
import OrderNav from './OrderNav';
import { DataGrid } from '@mui/x-data-grid';
import StatusButton from './StatusButton';
import handleRowsSelection from '../../../../logic/handleRowsSelection';
import { useReactToPrint } from 'react-to-print';
import Invoice from './Invoice';
import RowPopup from '../RowpopUp';

export default function OrderMangement({
  rows,
  columns,
  statusbuttons,
  value,
  handelChange,
  loading,
  ...option
}) {
  const rowsPrintRef = useRef();
  const [printRows, setPrintRows] = useState([]);
  const handlePrint = useReactToPrint({ contentRef: rowsPrintRef });
  const [page, setPage] = useState(1);

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCheckboxClick = ids => {
    if (ids.length === 0) return;

    const row = rows.find(r => r.id === ids[0]);
    setSelectedRow(row);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedRow(null);
  };

  const handleSteadFast = async () => {
    const sendCurrier = printRows?.map((currier, index) => ({
      invoice: currier?.currier?.invoice,
      recipient_name: currier?.currier?.customer_name,
      recipient_phone: currier?.currier?.phone,
      recipient_address: currier?.currier?.address,
      cod_amount: currier?.currier?.grand_total,
      note: currier?.currier?.note,
    }));

    const length = sendCurrier.length;

    const currier = length === 1 ? sendCurrier[0] : sendCurrier;
    console.log('response data:  ', currier);

    const url =
      length === 1
        ? `http://localhost:5000/api/steadfast/placing_order`
        : `http://localhost:5000/api/steadfast/bulk_order`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currier),
    });
    const data = await res.json();
    console.log('send currier:  ', sendCurrier);
  };

  const actionButtons = [
    {
      id: 1,
      name: 'PRINT',
      handleFunction: handlePrint,
    },
    {
      id: 2,
      name: 'SteadFast',
      handleFunction: handleSteadFast,
    },
  ];

  return (
    <div>
      <OrderNav />
      <div className="mt-4 bg-white text-left px-4">
        <div className="sticky top-19 z-49 bg-white border-b border-gray-100">
          <StatusButton statusbuttons={statusbuttons} />
          <div className="flex justify-between items-center">
            <NewSearch handelChange={handelChange} value={value} />
            <div className="mx-4">
              {actionButtons.map(action => (
                <button
                  className="text-black mx-4 bg-white border border-gray-200 p-1 w-[100px] rounded-[5px] drop-shadow-xl hover:text-green-700 transition-all  hover:drop-shadow"
                  onClick={action.handleFunction}
                  key={action?.id}
                >
                  {action?.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid
            {...option}
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 15, 25, 100]}
            getRowHeight={() => 'auto'}
            loading={loading}
            // onRowSelectionModelChange={selectionModel =>
            //   handleRowsSelection(selectionModel, rows, setPrintRows)
            // }

            checkboxSelection
            onRowSelectionModelChange={handleCheckboxClick}
            disableRowSelectionOnClick
            pagination
            paginationMode="server"
            initialState={{
              filter: {
                filterModel: {
                  items: [],
                },
                panel: {
                  open: false,
                },
              },
            }}
            sx={{
              '& .MuiDataGrid-cell': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // textAlign: 'center',
              },
              '& .MuiDataGrid-columnHeader': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          />
          {openPopup && (
            <RowPopup
              open={openPopup}
              onClose={handleClosePopup}
              row={selectedRow}
            />
          )}
        </div>
      </div>
      {/* printing info */}
      <div className="hidden">
        <div ref={rowsPrintRef} className={'bg-white'}>
          {printRows?.map((row, index) => (
            <Invoice printRow={row} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
