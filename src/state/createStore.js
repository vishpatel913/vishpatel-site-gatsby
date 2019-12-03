import { createStore as reduxCreateStore } from "redux";

const TOGGLE_DARKMODE = "TOGGLE_DARKMODE";

const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

const initialState = {
  isDarkMode: false
};

const createStore = () => reduxCreateStore(app);
export default createStore;
