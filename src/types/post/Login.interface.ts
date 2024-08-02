import { User } from '@/types/User.interface';

export interface LogInForm {
  email: string;
  password: string;
}

export interface LogInResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
