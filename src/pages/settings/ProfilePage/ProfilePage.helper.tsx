import { SendImageRequest } from '@src/api';
import { Toast } from '@src/components';
import { FileProps } from '@src/interface';

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
