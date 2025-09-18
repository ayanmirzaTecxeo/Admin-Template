import { Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const CustomTable = ({
  loading,
  rows,
  columns,
  isServerSidePagination = false,
  paginationModel,
  setPaginationModel,
  rowCount,
}) => {
  const slots = {
    noRowsOverlay: () => (
      <Grid width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <Typography variant="body2">No records found</Typography>
      </Grid>
    ),
  };

  const pageSizeOptions = [5, 10, 20];
  return (
    <>
      {isServerSidePagination ? (
        <DataGrid
          rows={rows}
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnMenu
          getRowId={(row) => row._id}
          columns={columns}
          pagination
          loading={loading}
          paginationModel={paginationModel}
          pageSizeOptions={pageSizeOptions}
          rowCount={rowCount}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          slots={slots}
        />
      ) : (
        <DataGrid
          rows={rows}
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnMenu
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: pageSizeOptions[0] },
            },
          }}
          pageSizeOptions={pageSizeOptions}
          slots={slots}
        />
      )}
    </>
  );
};

export default CustomTable;
