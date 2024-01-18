import React, { Dispatch, PropsWithChildren, useReducer } from "react";
import authReducer, { AuthAction } from "./authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
