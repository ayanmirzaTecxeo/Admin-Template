import moment from 'moment';
import { toast } from 'react-toastify';

export const constants = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  pending: 'PENDING',
  joined: 'JOINED',
};
export const showSuccessTost = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showErrorTost = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showDate = (date) => moment(date).format('MMMM D, YYYY');
