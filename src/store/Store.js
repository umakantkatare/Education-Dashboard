import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
export default store;

// import { configureStore } from "@reduxjs/toolkit";

// import authSliceReducer from "./AuthSlice";

// const store = configureStore({
//   reducer: {
//     auth: authSliceReducer,
//   },
//   devTools: true,
// });

// export default store;
