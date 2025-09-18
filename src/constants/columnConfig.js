const columnCommonCofig = { sortable: false, width: 150 };

export const userTableColumns = [
  {
    field: 'username',
    headerName: 'Name',
    ...columnCommonCofig,
    flex: 1,
  },
  { field: 'email', headerName: 'Email', ...columnCommonCofig, flex: 1 },
  {
    field: 'phone',
    headerName: 'Phone',
    ...columnCommonCofig,
    flex: 1,
  },
  {
    field: 'role',
    headerName: 'Role',
    ...columnCommonCofig,
    flex: 1,
    renderCell: ({ row }) =>
      row.role === 'ADMIN' ? (
        <div
          style={{
            height: '34px',
            width: '100px',
            fontWeight: 600,
            backgroundColor: 'rgba(255, 0, 0, 0.6)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '16px',
          }}
        >
          Admin
        </div>
      ) : (
        <div
          style={{
            height: '34px',
            width: '100px',
            fontWeight: 600,
            backgroundColor: 'rgba(0, 0, 255, 0.6)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '16px',
          }}
        >
          User
        </div>
      ),
  },
  {
    field: 'isVerified',
    headerName: 'Is Verified',
    ...columnCommonCofig,
    flex: 1,
  },
];
