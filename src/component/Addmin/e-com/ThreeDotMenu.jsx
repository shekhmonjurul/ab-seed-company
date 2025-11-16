import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditNoteIcon from '@mui/icons-material/EditNote';

function ThreeDotMenu({ row }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePrint = () => {
    console.log('Print', row);
    handleClose();
  };

  const handleEdit = () => {
    console.log('Edit', row);
    handleClose();
  };
  const handleRTS = () => {
    console.log('RTS', row);
    handleClose();
  };
  const handleNOTE = () => {
    console.log('NOTE', row);
    handleClose();
  };

  const handleDelete = () => {
    console.log('Delete', row);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handlePrint}>
          <PrintIcon fontSize="small" style={{ marginRight: 8 }} /> Print
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <EditIcon fontSize="small" style={{ marginRight: 8 }} /> Edit
        </MenuItem>
        <MenuItem onClick={handleRTS}>
          <OpenInNewIcon fontSize="small" style={{ marginRight: 8 }} /> RTS
        </MenuItem>
        <MenuItem onClick={handleNOTE}>
          <EditNoteIcon fontSize="small" style={{ marginRight: 8 }} /> Note
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteIcon fontSize="small" style={{ marginRight: 8 }} /> Delete
        </MenuItem>
      </Menu>
    </>
  );
}

export default ThreeDotMenu;
