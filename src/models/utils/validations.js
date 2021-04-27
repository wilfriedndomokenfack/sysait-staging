const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
export const email = (val) =>
  emailPattern.test(val) || $t('validAddress');
export const required = (val) => !!val || $t('required');