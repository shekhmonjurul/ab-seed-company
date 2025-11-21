import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function NewSearch({ handelChange, ...props }) {


    return (
        <div className="bg-[#ffffff] text-left p-4 text-black ">
            <label htmlFor="new-search" className='w-[300px] flex items-center'>
                <input
                    type="text"
                    placeholder="Filter Order......"
                    id="new-search"
                    className="w-full p-1 mr-4 border-gray-200 border-2 rounded-[5px] focus:outline-offset-3 focus:outline-2"
                    onChange={handelChange}
                    {...props}
                />
                <SearchIcon />
            </label>
        </div>
    )
}

