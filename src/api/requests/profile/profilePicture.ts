import { FileProps } from '../../../assets';
import api from '../../index';

const profilePicture = async (photo: FileProps) => {
  const path = '/users/me/picture';
  const body = new FormData();
  body.append('file', photo);

  return await api
    .PUT(path, body, {
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

export default profilePicture;
