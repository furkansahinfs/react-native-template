import { SendImageRequest } from '../../../api';
import { FileProps } from '../../../interface';
import { Toast } from '../../../components';

/**
 * The function send the shelf photo to the API
 * @param photos Array<FileProps>
 */
export async function sendPhoto(photos: Array<FileProps>) {
  const response: any = await SendImageRequest(photos);
  if (typeof response === 'string' || response instanceof String) {
    Toast(response.toString(), false);
  } else {
    Toast(JSON.stringify(response), true);
  }
}
