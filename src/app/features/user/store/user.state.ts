import { AppState } from "src/app/app.store";
import { UserAuthState } from "../model/user.auth.state";

export interface UserState{
      auth: UserAuthState;
} 