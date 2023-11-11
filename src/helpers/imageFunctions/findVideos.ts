import { FileProps, GottenFileProps } from '../../interface';

function findVideos(files: Array<GottenFileProps>) {
  let filteredVideos = files.filter(file => {
    const splittedFileUrl = file.file.split('.');
    const type = splittedFileUrl[splittedFileUrl.length - 1];
    return ['avi', 'ogg', 'wmv', 'webm', 'mp4', 'mov', 'hevc'].includes(type);
  });
  const videos: Array<FileProps> = [];
  filteredVideos.forEach(element => {
    const splittedFileUrl = element.file.split('.');
    const type = splittedFileUrl[splittedFileUrl.length - 1];
    videos.push({
      uri: element.file,
      type: 'video/' + type,
      name: splittedFileUrl[splittedFileUrl.length - 2],
    });
  });
  return videos;
}
export default findVideos;
