import api from 'src/api';
import { FileProps, IResponse } from 'src/interface';

const setProfilePicture = async (photo: FileProps): Promise<IResponse> => {
  const path = '/users/me/picture';
  const body = new FormData();
  body.append('file', photo);

  return await api.PUT(path, body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export default setProfilePicture;
