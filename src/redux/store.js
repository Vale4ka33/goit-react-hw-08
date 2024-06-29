import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
  },
});

export default store;
