// @flow
export const emailTest = (mail: string): string => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(mail).toLowerCase())) {
    return '';
  }
  return 'Email is invalid';
};

export const passwordTest = (password: string): string => {
  if (password.length > 0) return '';
  return 'Password cannot be empty';
};
