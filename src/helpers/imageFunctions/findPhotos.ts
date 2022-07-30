import { FileProps, GottenFileProps } from '../../interface';

function findPhotos(files: Array<GottenFileProps>) {
  let filteredPhotos = files.filter((file) => {
    const splittedFileUrl = file.file.split('.');
    const type = splittedFileUrl[splittedFileUrl.length - 1];
    return ['jpg', 'jpeg', 'png', 'heif', 'quicktime'].includes(type);
  });
  const photos: Array<FileProps> = [];
  filteredPhotos.forEach((element) => {
    const splittedFileUrl = element.file.split('.');
    const type = splittedFileUrl[splittedFileUrl.length - 1];
    photos.push({
      uri: element.file,
      type: 'image/' + type,
      name: splittedFileUrl[splittedFileUrl.length - 2],
    });
  });
  return photos;
}

export default findPhotos;
