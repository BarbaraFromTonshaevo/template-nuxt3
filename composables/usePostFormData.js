import ajax from "../ajax";

export const usePostFormData = async (formData) => {
    const axios = await ajax();
    const response = await axios.post(
      `/webform_rest/submit?_format=json`,
      formData
    );
    return response;
}
