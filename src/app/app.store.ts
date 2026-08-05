import { Product } from "./models/product";
import { User } from "./models/user";
import { UserAuthState } from "./features/user/store/user.reducer";

export interface AppState {
     readonly products : Product[];
     readonly auth: UserAuthState;
}