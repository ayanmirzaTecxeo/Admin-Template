import { Container, Grid } from '@mui/material';
import usePagination from 'src/hooks/usePagination';
import CustomTable from 'src/components/table/table';
import TabTitle from 'src/components/tabTitle/tabTitle';
import { GET_USER } from 'src/apiService/apiDeclaration';
import PageHeader from 'src/components/pageHeader/PageHeader';
import { userTableColumns } from 'src/constants/columnConfig';

const UserPage = () => {
  const { paginationModel, setPaginationModel, loading, data } = usePagination(GET_USER);
  console.log(data);

  return (
    <Container>
      <Grid container spacing={2}>
        <TabTitle title={'Users'} />
        <Grid item xs={12}>
          <PageHeader pageTitle={'Users'} />
        </Grid>
        <Grid item xs={12}>
          <CustomTable
            loading={loading}
            isServerSidePagination
            paginationModel={paginationModel}
            setPaginationModel={setPaginationModel}
            columns={userTableColumns}
            rows={data.rows}
            rowCount={data.rowCount}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPage;
