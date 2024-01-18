interface Login {
  type: "Login";
  user: string;
}

interface Logout {
  type: "Logout";
}

export type AuthAction = Login | Logout;

export default function authReducer(user: string, action: AuthAction): string {
  switch (action.type) {
    case "Login":
      return action.user;
    case "Logout":
      return '';

    default:
      return user;
  }
}
