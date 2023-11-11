import api from 'src/api';
import { FileProps, IResponse } from 'src/interface';

const sendImage = async (photos: Array<FileProps>): Promise<IResponse> => {
  const path = '/rentals';
  const formData = new FormData();
  photos.forEach(element => {
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

  return await api.POST(path, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export default sendImage;
