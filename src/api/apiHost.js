// @flow
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import asyncStorage from '../utils/asyncStorage';

export default class ApiHost {
  axios: AxiosInstance;

  url: string;

  get: (url: string, options?: AxiosRequestConfig) => Promise<AxiosResponse>;

  post: (
    url: string,
    data: { [key: string]: any },
    options?: any
  ) => Promise<any>;

  // not best but fast
  static get token(): Promise<string> {
    return asyncStorage
      .getItem('access_token')
      .then(tkn => tkn)
      .catch(() => {
        return '';
      });
  }

  constructor(url: string) {
    this.axios = axios.create({});
    this.url = url;
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  get(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._fetch(url, options || {});
  }

  post(url: string, data: { [key: string]: any }, options?: any) {
    return this._withBody('POST', url, data, options);
  }

  delete(path: string, data: { [key: string]: any }, options?: any) {
    return this._withBody('DELETE', path, data, options);
  }

  _absUrl(relativePath: string): string {
    return this.url + relativePath;
  }

  async _fetch(
    url: string,
    options: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const token = await ApiHost.token;
    return this.axios
      .request({
        ...options,
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${await token}`,
          ...options.headers,
        },
        url: this._absUrl(url),
      })
      .then(res => {
        if (res.status === 401) {
          console.log('login expired');
        }

        return res;
      });
  }

  _withBody(
    method: string,
    url: string,
    data: { [key: string]: any },
    options: any = {}
  ): Promise<AxiosResponse> {
    return this._fetch(url, {
      ...options,
      data,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
      method,
    });
  }
}
