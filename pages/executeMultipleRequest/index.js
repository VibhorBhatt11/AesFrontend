// import ExecuteMultiReqTable from "@/components/ExecuteMultiReqTable";
// import React from "react";
// import { DataGrid } from '@mui/x-data-grid';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';


// export default function RowContextMenu() {
//     const [rows, setRows] = React.useState(initialRows);
//     const [selectedRow, setSelectedRow] = React.useState();
  
//     const [contextMenu, setContextMenu] = React.useState(null);
  
//     const handleContextMenu = (event) => {
//       event.preventDefault();
//       setSelectedRow(Number(event.currentTarget.getAttribute('data-id')));
//       setContextMenu(
//         contextMenu === null
//           ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
//           : null,
//       );
//     };
  
//     const handleClose = () => {
//       setContextMenu(null);
//     };
  
//     const convertToUppercase = () => {
//       const newRows = rows.map((row) => {
//         if (row.id === selectedRow) {
//           return {
//             ...row,
//             first: row.first.toUpperCase(),
//             last: row.last.toUpperCase(),
//           };
//         }
//         return row;
//       });
//       setRows(newRows);
//       handleClose();
//     };
  
//     const convertToLowercase = () => {
//       const newRows = rows.map((row) => {
//         if (row.id === selectedRow) {
//           return {
//             ...row,
//             first: row.first.toLowerCase(),
//             last: row.last.toLowerCase(),
//           };
//         }
//         return row;
//       });
//       setRows(newRows);
//       handleClose();
//     }
// }