// @flow
import ApiHost from './apiHost';
import * as URL from './baseurl';

const userApi = new ApiHost(URL.BASE_URL);
export const api = userApi;
export const { get } = userApi;
export const { post } = userApi;
