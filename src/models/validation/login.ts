import { RegisterOptions } from 'react-hook-form';

export interface LoginValues {
  email: string;
  password: string;
}

export interface LoginValuesOption {
  email: RegisterOptions;
  password: RegisterOptions;
}
