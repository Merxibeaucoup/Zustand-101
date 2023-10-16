import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

const MaReactTable = () => {
  const data = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Sara",
      age: 25,
    },
  ];
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
      },
    ],
    []
  );

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering
        enableRowActions
        enableExpanding
        enableEditing
        editDisplayMode="modal"
        enableColumnResizing
        // columnResizeMode="onChange"
        positionActionsColumn="last"
      />
    </div>
  );
};

export default MaReactTable;
