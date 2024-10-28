export const usePostForm = async (formJSON, successCallback, errorCallback) => {
  if (formJSON.file) {
    usePostFileData(formJSON.file, formJSON["webform_id"])
      .then((res) => {
        console.log(res.fid);
        if (res.data.fid[0]) {
          let fid = res.data.fid[0].value;
          formJSON.file = fid;
          usePostFormData(formJSON)
            .then((res) => {
              if (res) {
                successCallback();
              } else {
                errorCallback("Не получилось отправить файл 1");
              }
            })
            .catch((e) => {
              errorCallback( 'usePostFormData after File: ' + e.message);
            });
        } else {
          errorCallback("Не получилось отправить файл 2");
        }
      })
      .catch((e) => {
        errorCallback('usePostFileData: ' + e.message);
      });
  } else {
    usePostFormData(formJSON)
      .then((res) => {
        if (res) {
          successCallback();
        } else {
          errorCallback("Не получилось отправить файл 1");
        }
      })
      .catch((e) => {
        errorCallback('usePostFormData: ' + e.message);
      });
  }
};
