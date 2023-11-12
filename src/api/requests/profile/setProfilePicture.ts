import { API } from '@src/api/serverConnections';
import { FileProps, IResponse } from '@src/interface';

const setProfilePicture = async (photo: FileProps): Promise<IResponse> => {
  const path = '/users/me/picture';
  const body = new FormData();
  body.append('file', photo);

  return await API.PUT(path, body, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export default setProfilePicture;
