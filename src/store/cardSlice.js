import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    add: (state, action) => {
      const exist = state.find(
        (value) => value.id === action.payload.id && value.color === action.payload.color
      );
      if (exist) {
        exist.count = Number(exist.count)
        exist.count += Number(action.payload.count);
      } else {
        state.push(action.payload);
      }
    },
    remove: (state, action) => {
      return state.filter(
        (value) => !(value.id === action.payload.id && value.color === action.payload.color)
      );
    },
    clear: (state) => {
      return [];
    },
    update: (state, action) => {
      state.forEach((value) => {
        if (value.id === action.payload.id && value.color === action.payload.color) {
          value.count = action.payload.count;
        }
      });
    },
  },
});

export default cardSlice.reducer;
export const { add, remove, update, clear } = cardSlice.actions;
