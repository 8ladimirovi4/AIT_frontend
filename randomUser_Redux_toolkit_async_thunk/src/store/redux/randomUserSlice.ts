import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from 'store/createAppSlice';
import { v4 } from 'uuid';
import { RandomUserAction, RandomUserState } from './types';
import { getRandomUserAPI } from './API';

const randomUserInitialState: RandomUserState = {
  data: {
    id: '',
    name: {
      first: '',
      last: '',
    },
    picture: {
      large: '',
    },
    email: '',
  },
  isLoading: false,
  error: undefined,
};

export const randomUsereSlice = createAppSlice({
  name: 'RANDOMUSER',
  initialState: randomUserInitialState,
  reducers: (create) => ({
    getRandomUser: create.asyncThunk(
      async (arg: any, { rejectWithValue }) => {
        const response = await getRandomUserAPI(rejectWithValue);
        return response;
      },
      {
        pending: (state: RandomUserState) => {
          state.isLoading = true;
          state.error = undefined;
        },
        fulfilled: (
          state: RandomUserState,
          action: PayloadAction<RandomUserAction>
        ) => {
          state.isLoading = false;
          state.data = action.payload.results[0];
          state.data.id = v4();
        },
        rejected: (state: RandomUserState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      }
    ),
  }),
  selectors: {
    randomUser: (state: RandomUserState) => state,
  },
});
export const randomUserSliceActions = randomUsereSlice.actions;
export const randomUserSliceSelectors = randomUsereSlice.selectors;
export default randomUsereSlice;
