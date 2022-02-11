import { SendImageRequest } from '../../../api';
import { FileProps } from '../../../assets';

/**
 * The function send the shelf photo to the API
 * @param photo FileProps
 */
export async function sendPhoto(photo: FileProps) {
  const response: any = await SendImageRequest(photo);
  //TODO
  if (response) {
  }
}
