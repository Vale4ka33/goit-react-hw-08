import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { authReduser } from "./auth/slice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
    auth: authReduser,
  },
});

export default store;
