import { User } from 'src/app/features/user/model/user';

export interface UserAuthState {
    user: User | null;
    userError: string | '';
}