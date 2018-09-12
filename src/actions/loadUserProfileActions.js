import { postRequestApi } from '../constant/callApi';
import { API } from '../constant/api';

export const loadUserProfile = (data = {}) => {
  return async (dispatch) => {
    let result = await postRequestApi(API.LOAD_USER_PROFILE, data, dispatch);

    if (result) {
      dispatch({
        type: 'LOAD_USER_PROFILE',
        payload: result,
      });
    }
    return result;
  };
};
