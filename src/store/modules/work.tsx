import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const URL = `http://localhost:8000/api/testGet`;

const work = createSlice({
  name: "work",
  initialState: {
    count: 0,
    users: [],
    status: false
  },
  reducers: {
    addWork(state, { type, payload }) {
      state.count = state.count + payload;
    },
    minusWork(state, { type, payload }) {
      state.count = state.count - payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncWithStatus.pending,
      (state) => {
        state.status = false
      })
      .addCase(addAsyncWithStatus.fulfilled, (state,
        action) => {
          state.status = true
          // console.log(action.payload);
          state.count = state.count + action.payload;
        })
        .addCase(addAsyncWithStatus.rejected, (state) => {
          state.status = false
        }),
      builder.addCase(getAsyncWithStatus.pending,
        (state) => {
          state.status = false
        })
        .addCase(getAsyncWithStatus.fulfilled, (state, action) => {
          state.status = true
          // console.log(action.payload);
          state.users = action.payload;
        })
        .addCase(getAsyncWithStatus.rejected, (state, action) => {
          state.status = true;
          console.log(action.error);
        })
  }
})
const { addWork, minusWork } = work.actions;

const worker = work.reducer;

const addAsyncWithStatus = createAsyncThunk(
  'counter/asyncCount',
  async (payload:number) => {
    const response = await asyncCount(payload);
    return response.data;
  }
)

const getAsyncWithStatus = createAsyncThunk(
  "counter/getUser",
  async () => {
    const response = await axios.get(URL);
    return response.data;
  }
)

export { addWork, minusWork, addAsyncWithStatus, getAsyncWithStatus }
export default worker;