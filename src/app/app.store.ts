import { Product } from "./features/product/model/product";
import { User } from "./features/user/model/user";
import { UserAuthState } from "./features/user/store/user.reducer";

export interface AppState {
     readonly products : Product[];
     readonly auth: UserAuthState;
}