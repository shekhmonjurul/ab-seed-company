import OrderMangement from '../../../../component/Addmin/e-com/order/OrderMangement';
import { useState, useEffect, useRef } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import ThreeDotMenu from '../../../../component/Addmin/e-com/ThreeDotMenu';

const columns = [
  { field: 'id', headerName: 'ID', width: 80, filterable: false },
  {
    field: 'ordered',
    headerName: 'Ordered Time',
    width: 200,
    filterable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    filterable: false,
  },
  { field: 'code', headerName: 'Code', width: 120 },
  { field: 'note', headerName: 'Note', width: 120 },
  {
    field: 'print',
    headerName: 'print',
    width: 120,
    renderCell: params => (
      <div>
        {params.row.print ? (
          <ClearIcon style={{ color: 'red' }} />
        ) : (
          <DoneIcon style={{ color: 'green' }} />
        )}
      </div>
    ),
  },
  {
    field: 'customer',
    headerName: 'Customer',
    width: 220,
    renderCell: params => (
      <div>
        <div>
          <b>{params.row.customer?.name}</b>
        </div>
        <div>{params.row.customer?.number}</div>
        <div>{params.row.customer?.address}</div>
      </div>
    ),
  },
  {
    field: 'products',
    headerName: 'Products',
    width: 250,
    renderCell: params => (
      <div>
        {params.row.products.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '9px',
              textAlign: 'justify',
              margin: '5px 0 5px 0',
            }}
          >
            <img
              src={item?.images[0]?.src}
              alt={item?.price}
              width="40"
              style={{
                marginRight: 10,
                borderRadius: 5,
              }}
            />
            {item?.name}
            <span>{item?.quantity}</span>
          </div>
        ))}
      </div>
    ),
  },
  { field: 'site', headerName: 'Site', width: 160 },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: params => {
      return params.row.action === 'threeDots' ? (
        <ThreeDotMenu row={params.row} />
      ) : null;
    },
  },
  //   {
  //     field: 'Action',
  //     headerName: 'Action',
  //     renderCell: params => (
  //       <div>
  //         {/* <select>
  //           <option value="Tags">Tags</option>
  //           {params.row.tags?.map((tag, index) => (
  //             <option value={tag} key={index}>
  //               {tag}
  //             </option>
  //           ))}
  //         </select> */}
  //       </div>
  //     ),
  //   },
];

const statusbuttons = [
  { name: 'Pending', number: 6, params: 'Pending' },
  { name: 'RTS', number: 100, params: 'RTS' },
  { name: 'Shipped', number: 468, params: 'Shipped' },
  { name: 'Delivered', number: 20895, params: 'Delivered' },
  { name: 'Pending_Return', number: 77, params: 'Pending_Return' },
  { name: 'Returned', number: 1859, params: 'Returned' },
  { name: 'Partial', number: 25, params: 'Partial' },
  { name: 'Cancelled', number: 380, params: 'Cancelled' },
  { name: 'Pending_Cancel', number: 0, params: 'Pending_Cancel' },
  { name: 'Preorder', number: 26, params: 'Preorder' },
  { name: 'Lost', number: 0, params: 'Lost' },
];

const initialOrders = [
  {
    id: 1001,
    ordered: '2025-01-05 10:32 AM',
    status: 'Pending',
    code: 'ABX102',
    note: 'Handle carefully',
    print: false,
    customer: {
      name: 'Shawon Ahmed',
      number: '01711000000',
      address: 'Mirpur, Dhaka',
    },
    products: [
      {
        name: 'T-Shirt Premium Cotton',
        quantity: 2,
        price: 350,
        images: [{ src: 'https://via.placeholder.com/80x80.png?text=Tshirt' }],
      },
      {
        name: 'Sneaker Casual',
        quantity: 1,
        price: 1200,
        images: [{ src: 'https://via.placeholder.com/80x80.png?text=Shoes' }],
      },
    ],
    site: 'daraz',
    action: 'threeDots',
  },

  {
    id: 1002,
    ordered: '2025-01-06 02:10 PM',
    status: 'RTS',
    code: 'CDX550',
    note: 'Carefully',
    print: true,
    customer: {
      name: 'Nayem Hasan',
      number: '01899000000',
      address: 'Uttara, Dhaka',
    },
    products: [
      {
        name: 'Analog Watch',
        quantity: 1,
        price: 950,
        images: [{ src: 'https://via.placeholder.com/80x80.png?text=Watch' }],
      },
    ],
    site: 'own-site',
    action: 'threeDots',
  },

  {
    id: 1003,
    ordered: '2025-01-07 09:44 AM',
    status: 'Delivered',
    code: 'EFX330',
    note: 'Paid online',
    print: false,
    customer: {
      name: 'Sabbir Hossain',
      number: '01688000000',
      address: 'Banani, Dhaka',
    },
    products: [
      {
        name: 'Wireless Earbuds',
        quantity: 1,
        price: 1450,
        images: [{ src: 'https://via.placeholder.com/80x80.png?text=Earbuds' }],
      },
      {
        name: 'Charging Cable',
        quantity: 1,
        price: 250,
        images: [{ src: 'https://via.placeholder.com/80x80.png?text=Cable' }],
      },
    ],
    site: 'shopify',
    action: 'threeDots',
  },
];

export default function WebOrder() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  // const [rows, setRows] = useState([])
  // const [filter, setFilter] = useState([])
  const [rows, setRows] = useState(initialOrders);
  const [filter, setFilter] = useState(initialOrders);
  const [rowCount, setRowCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  useEffect(() => {
    setRows(initialOrders);
    setFilter(initialOrders);
    setLoading(false);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchOrders = async () => {
      setLoading(true);
      try {
        setLoading(true);
        const page = paginationModel.page + 1;
        console.log('page: ', page);
        const limit = paginationModel.pageSize;
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/orders?page=${page}&limit=${limit}`,
          { signal }
        );
        const result = await res.json();
        setRowCount(Number(result?.rowCount) || 1);
        const orders =
          result?.data?.map((order, index) => {
            const customer = {
              name: order?.customer_name,
              number: order?.phone,
              address: order?.address,
            };
            const data = {
              id: order?.invoice || index + 1,
              ordered: order?.created_at,
              status: order?.orderStatus,
              customer: customer,
              note: order?.note,
              products: order?.items,
              tags: ['Monjurul Islam', 'Korim', 'Rohim'],
              site: order?.site,
              code: order?.code,
              currier: {
                ...order,
              },
            };
            return data;
          }) || [];

        setRows(orders);
        setFilter(orders);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Fetch orders failed:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();

    return () => controller.abort();
  }, [paginationModel.page, paginationModel.pageSize]);

  useEffect(() => {
    if (search) {
      const filterRow = rows.filter(data => {
        const idMatch = !isNaN(search) && data.id === Number(search);
        const phoneMatch = data.customer.number === search;
        return idMatch || phoneMatch;
      });

      setFilter(filterRow);
      setLoading(filterRow.length === 0);
    } else {
      setFilter(rows);
      setLoading(false);
    }

    return () => {
      console.log('unmount component');
    };
  }, [search, rows]);

  const handelChange = e => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <div className="relative">
      <OrderMangement
        sx={{
          height: '80vh',
          overflowY: 'auto',
        }}
        rows={filter}
        columns={columns}
        statusbuttons={statusbuttons}
        handelChange={handelChange}
        value={search}
        loading={loading}
        rowCount={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
      {console.log('pagintion moud: ', paginationModel)}
    </div>
  );
}
