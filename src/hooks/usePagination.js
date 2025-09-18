import { useState, useEffect } from 'react';

const usePagination = (fetchData) => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ rows: [], rowCount: 0 });

  const getQueryString = (params) => {
    return Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const params = { page: paginationModel.page + 1, pageSize: paginationModel.pageSize };
        const queryString = getQueryString(params);
        const data = await fetchData(queryString);
        setData({ rows: data.rows, rowCount: data.rowCount });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    getData();
  }, [paginationModel, fetchData]);

  return {
    paginationModel,
    setPaginationModel,
    loading,
    data,
  };
};

export default usePagination;
