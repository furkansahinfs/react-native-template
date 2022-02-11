import { FileProps } from '../../../assets';
import api from '../../index';

const sendImage = async (photo: FileProps) => {
  const path = '/image';
  const body = new FormData();
  body.append('image', photo);

  return await api
    .POST(path, body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((result: any) => {
      if (result.status === 200) {
        return true;
      } else {
        return false;
      }
    });
};

export default sendImage;
