import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { MdSpeed } from 'react-icons/md';

function RowPopup({ open, onClose, row }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { height: 350, overflowY: 'auto' },
      }}
    >
      <DialogContent>
        <div className="border-b border-gray-500 ">
          <Button
            className="!mb-2"
            variant="contained"
            startIcon={<PrintIcon />}
          >
            Print
          </Button>
        </div>
        <p className="flex items-center text-[16px] text-gray-500 my-2.5">
          <span className="mr-2">
            <MdSpeed />
          </span>
          Status Update
        </p>
        <div className=" flex flex-col gap-2">
          <Button variant="outlined" startIcon={<LocalShippingIcon />}>
            Send to RTS
          </Button>
          <Button variant="outlined" startIcon={<LocalShippingIcon />}>
            Send To Shipping
          </Button>
          <Button variant="outlined" startIcon={<LocalShippingIcon />}>
            Send To SteadFast
          </Button>
        </div>

        <div className="mt-4 flex gap-4">
          <Button onClick={onClose} color="error" variant="contained">
            Reject
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RowPopup;
