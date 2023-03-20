import { LoginValuesOption } from '@/models/validation/login';

export const LOGIN_VALUES_OPTION: LoginValuesOption = {
  email: {
    required: {
      value: true,
      message: 'Emailを入力してください',
    },
  },
  password: {
    required: {
      value: true,
      message: 'パスワードを入力してください',
    },
  },
};
