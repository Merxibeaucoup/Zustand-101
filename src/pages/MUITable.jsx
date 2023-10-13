import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../components/styles.css";
import { useState } from "react";

const MUITable = () => {
  const rows = [
    { id: 1, firstName: "John", lastName: "Doe", age: 30, status: "success" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 25, status: "error" },
    //add more rows here use real names and age of celebrities
    {
      id: 3,
      firstName: "XXX",
      lastName: "Johnson",
      age: 35,
      status: "success",
    },
    { id: 4, firstName: "XXX", lastName: "Williams", age: 40, status: "error" },
    { id: 5, firstName: "XXX", lastName: "Brown", age: 45, status: "success" },
    { id: 6, firstName: "XXX", lastName: "Jones", age: 50, status: "error" },
    { id: 7, firstName: "XXX", lastName: "Miller", age: 55, status: "success" },
    { id: 8, firstName: "XXX", lastName: "Davis", age: 60, status: "error" },
    { id: 9, firstName: "XXX", lastName: "Garcia", age: 65, status: "success" },
    {
      id: 10,
      firstName: "XXX",
      lastName: "Martinez",
      age: 70,
      status: "error",
    },
    {
      id: 11,
      firstName: "XXX",
      lastName: "Rodriguez",
      age: 75,
      status: "success",
    },
    { id: 12, firstName: "XXX", lastName: "Lopez", age: 80, status: "error" },
    {
      id: 13,
      firstName: "XXX",
      lastName: "Gonzalez",
      age: 85,
      status: "success",
    },
    { id: 14, firstName: "XXX", lastName: "Wilson", age: 90, status: "passed" },
  ];

  const columns = [
    // { field: "id", headerName: "ID", flex: 1 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const { value } = params;
        const statusColor = {
          success: "#4caf50", // Green color for success status
          error: "#f44336", // Red color for error status
          passed: "#ff9800",
          // Add more status colors as needed
        };

        return <span style={{ color: statusColor[value] }}>▪️{value}</span>;
      },
    },
  ];

  const getRowClassName = (params) => {
    return params.row.id % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <div
      style={{
        height: "max-content",
        width: "100%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowClassName={getRowClassName}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        // checkboxSelection
      />
    </div>
  );
};

export default MUITable;
