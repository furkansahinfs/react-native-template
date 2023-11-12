import { SendImageRequest } from '@src/api';
import { Toast } from '@src/components';
import { FileProps } from '@src/interface';

/**
 * The function send the shelf photo to the API
 * @param photos Array<FileProps>
 */
export async function sendPhoto(photos: Array<FileProps>) {
  const response = await SendImageRequest(photos);
  if (response.success) {
    Toast(response.data, false);
  } else {
    Toast(response.error as string, true);
  }
}
