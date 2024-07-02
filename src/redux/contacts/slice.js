import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";
import { selectNameFilter } from "../filters/selectors";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.loading = false;
        state.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== actions.payload
        );
      })
      .addCase(deleteContact.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.items.push(actions.payload);
      })
      .addCase(addContact.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      }),
});



export const contactsReducer = contactsSlice.reducer;
