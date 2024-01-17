interface Action {
  type: "INCREMENT" | "RESET";
}

export default function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;

    default:
      return state;
  }
}