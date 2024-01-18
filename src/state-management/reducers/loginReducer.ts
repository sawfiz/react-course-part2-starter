interface Login {
  type: "Login";
  user: string;
}

interface Logout {
  type: "Logout";
}

type Action = Login | Logout;

export default function loginReducer(user: string, action: Action): string {
  switch (action.type) {
    case "Login":
      return action.user;
    case "Logout":
      return '';

    default:
      return user;
  }
}
