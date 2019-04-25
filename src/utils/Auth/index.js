// @flow
import BackgroundTimer from 'react-native-background-timer';
import axios from 'axios';
import AsyncStorage from '../asyncStorage';
import type { IUserProfile, IAuthResult } from './types';
import { BASE_URL } from '../../api/baseurl';

type loginOptions = {
  email: string,
  password: string,
};
export default class Auth {
  static login(options: loginOptions, callback: () => void): void {
    axios
      .post(`${BASE_URL}/user/signin`, options)
      .then(res => res.data)
      .then(res => {
        console.log('after login');
        Auth.setSession(res);
        callback();
      })
      .catch(Auth.error);
  }

  static init = (callback: () => any, fallback: () => any) => {
    // we schedule the refresh call
    // this is the trigger of for the scheuldeRefresh-refresh mechanism

    // add code to handle inuse expiration
    console.log('init is called');

    Auth.isAuthenticated().then(bool => {
      if (bool) callback();
      else fallback();
    });
  };

  static async logout(callback?: () => void): Promise<void> {
    await Auth.clearSession();
    if (callback) callback();
  }

  static async isAuthenticated(): Promise<boolean> {
    // if we don't have a token, then we're not authenticated
    const token = await Auth.getToken();
    if (!token) {
      return false;
    }

    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = await Auth.getExpiresAt();
    if (!expiresAt) {
      return false;
    }

    return new Date().getTime() < expiresAt;
  }

  static async getToken(): Promise<string> {
    const value = await AsyncStorage.getItem('access_token');
    return value;
  }

  //   static refresh = (callback?: (success: boolean) => void) => {
  //     console.log('yet to be implemented');
  //   };

  static tid: boolean = false;

  static setSession(authResult: IAuthResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    Promise.all([
      AsyncStorage.setItem('access_token', authResult.token),
      AsyncStorage.setItem('expires_at', expiresAt),
    ]).then(() => {
      console.log('hi there');
    });
  }

  static error(err: any) {
    console.log(err);
  }

  static async clearSession(): Promise<void> {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('expires_at');
    // AsyncStorage.clear();login
  }

  static getExpiresIn = async (): Promise<number> => {
    const expiresAt = await Auth.getExpiresAt();

    if (expiresAt > -1) {
      return expiresAt - new Date().getTime();
    }

    return -1;
  };

  static getExpiresAt = async (): Promise<number> => {
    const expiresAtString = await AsyncStorage.getItem('expires_at');
    let expiresAt = -1;

    if (expiresAtString) {
      expiresAt = JSON.parse(expiresAtString);
    }

    return expiresAt;
  };
}
