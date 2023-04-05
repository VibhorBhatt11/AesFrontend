import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Block } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import SubmitButton from '../../components/SubmitButton'
import ClearButton from '../../components/ClearButton'
import {Box, Grid, Button} from '@mui/material';
import Layout from "../../components/Layout"

const columns = [

  {
    field: 'first',
    headerName: 'TestCase #',
    width: 140,
  },
  {
    field: 'second',
    headerName: 'ReturnCode',
    width: 140,
  },
  {
    field: 'third',
    headerName: 'ReturnCodeDesc',
    width: 140,
  },
  {
    field: 'fourth',
    headerName: 'ResponseX12',
    width: 500,
  },
  {
    field: 'fifth',
    headerName: 'Status',
    width: 140,
  },
  {
    field: 'sixth',
    headerName: 'TrackingID',
    width: 140,
  }
];

const initialRows = [
  {
    id: 1,
    first: '1',
    second: '000',
    third: 'Success',
    fourth:'drwersfdstwtrfsgewterwst3ete~sfwrfdssfwe~w4refssfsf~',
    fifth:'Pass',
    sixth:'22354650887'
    

  },
  {
    id: 2,
    first: '2',
    second: '000',
    third: 'Success',
    fourth:'drwersfdstwtrfsgewterwst3ete~sfwrfdssfwe~w4refssfsf~',
    fifth:'Fail',
    sixth:'4583598309583'
  }
];

export default function RowContextMenu() {

  const [rows, setRows] = React.useState(initialRows);
  const [selectedRow, setSelectedRow] = React.useState();

  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setSelectedRow(Number(event.currentTarget.getAttribute('data-id')));
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const convertToUppercase = () => {
    const newRows = rows.map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          first: row.first.toUpperCase(),
          last: row.last.toUpperCase(),
        };
      }
      return row;
    });
    setRows(newRows);
    handleClose();
  };

  const convertToLowercase = () => {
    const newRows = rows.map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          first: row.first.toLowerCase(),
          last: row.last.toLowerCase(),
        };
      }
      return row;
    });
    setRows(newRows);
    handleClose();
  };

  return (
    <Layout>
      <div style={{ height: 400, width: '100%' }}>
        <h1 > Execute Single Request</h1>
        <Grid item xs={12} md={6} rowSpacing="2" columnSpacing="2">
          <TextField required
            id="filled basic"
            size = "large"
            label="Paste your X12 here"
            defaultValue=""
            variant="filled"                           
            sx={{width: '100%'}} />
          <SubmitButton></SubmitButton>
          <ClearButton></ClearButton>
        </Grid>    
        <DataGrid
          columns={columns}
          rows={rows}
          slotProps={{
            row: {
              onContextMenu: handleContextMenu,
              style: { cursor: 'context-menu' },
            },
          }}
        />
        <Menu
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
          slotProps={{
            root: {
              onContextMenu: (e) => {
                e.preventDefault();
                handleClose();
              },
            },
          }}
        >
          <MenuItem onClick={convertToUppercase}>UPPERCASE</MenuItem>
          <MenuItem onClick={convertToLowercase}>lowercase</MenuItem>
        </Menu>
      </div>
    </Layout>
  );
}