import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;

// import { createStore } from "redux";

// const START_VALUE = {
//   counter: 5,
//   privacyToggle: false,
// };
// const counterReducer = (store = START_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     // return {
//     //   counter: store.counter + 1,
//     //   privacyToggle: store.privacyToggle,
//     // };
//     return {
//       ...store,
//       counter: store.counter + 1,
//     };
//   } else if (action.type === "DECREMENT") {
//     // return {
//     //   counter: store.counter - 1,
//     //   privacyToggle: store.privacyToggle,
//     // };
//     return {
//       ...store,
//       counter: store.counter - 1,
//     };
//   } else if (action.type === "ADD") {
//     // return {
//     //   counter: store.counter + Number(action.payload.num),
//     //   privacyToggle: store.privacyToggle,
//     // };
//     return {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "SUB") {
//     // return {
//     //   counter: store.counter - Number(action.payload.num),
//     //   privacyToggle: store.privacyToggle,
//     // };
//     return {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "PRIVACY") {
//     // return {
//     //   privacyToggle: !store.privacyToggle,
//     // };
//     return {
//       ...store,
//       privacyToggle: !store.privacyToggle,
//     };
//   }

//   return store;
// };
// const counterStore = createStore(counterReducer);

// export default counterStore;
