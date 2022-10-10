type State =
  | { state: "RAIA_LOGO" }
  | { state: "TITLE" }
  | { state: "MAIN" }
  | { state: "ENDING" }
  | { state: "CREDIT" }

type Action =
  | { type: "MOVE_SCENE" }
  | { type: "TO_TITLE" }
  | { type: "TO_MAIN" }
  | { type: "TO_ENDING" }
  | { type: "TO_CREDIT" }

const reducer = (state: State, action: Action): State => {
  switch (state.state) {
    case "RAIA_LOGO":
      switch (action.type) {
        case "TO_TITLE":
          return { state: "TITLE" }
      }
      break;

    case "TITLE":
      switch (action.type) {
        case "TO_MAIN":
          return { state: "MAIN" }
      }
      break;
    
    case "MAIN":
      switch (action.type) {
        case "TO_ENDING":
          return { state: "ENDING" }
      }
      break;

    case "ENDING":
      switch (action.type) {
        case "TO_CREDIT":
          return { state: "CREDIT" }
      }
      break;

    case "CREDIT":
      switch (action.type) {
        case "TO_TITLE":
          return { state: "TITLE" }
      }
      break;
  }

  return state
}

export {
  reducer,
}