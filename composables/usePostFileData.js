import ajax from "../ajax";

export const usePostFileData = async (file, id) => {
  const axios = await ajax();
  console.log(file);
  console.log(file.name);
  const response = await axios.post(
    `/webform_rest/${id}/upload/file?_format=json`,
    file,
    {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/octet-stream",
        "Content-Disposition":
          `attachment; filename="` +
          encodeURIComponent(file.name) +
          `"; filename*=UTF-8''` +
          encodeURIComponent(file.name),
      },
    }
  );
  return response;
}