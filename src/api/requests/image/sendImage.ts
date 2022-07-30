import { FileProps, IResponse } from '../../../interface';
import api from '../../index';

const sendImage = async (photos: Array<FileProps>) => {
  const path = '/rentals';
  const formData = new FormData();
  photos.forEach((element) => {
    formData.append('files', element);
  });

  const obj = {
    address: 'ASD',
    name: 'ASD',
    type: 'ASD',
  };

  formData.append('body', {
    string: JSON.stringify(obj),
    type: 'application/json',
  });

  return await api
    .POST(path, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((result: IResponse) => {
      if (result.success) {
        return result.data;
      } else {
        return result.error;
      }
    });
};

export default sendImage;
