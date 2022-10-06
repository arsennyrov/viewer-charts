import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { sunset } from '../../colors';

export interface ChartsState {
  type: string;
  color: string[];
  id: string;
  active: boolean;
}

const initialState: ChartsState[] = [
  {
    type: "pie",
    color: sunset,
    id: "1",
    active: false,
  },
  {
    type: "column",
    color: sunset,
    id: "2",
    active: false,
  },
  {
    type: "pie",
    color: sunset,
    id: "3",
    active: false,
  },
  {
    type: "spline",
    color: sunset,
    id: "4",
    active: false,
  },
  {
    type: "spline",
    color: sunset,
    id: "5",
    active: false,
  },
  {
    type: "area",
    color: sunset,
    id: "6",
    active: false,
  },
];

export const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addNewChart: (state, action) => {
      console.log('action', action.payload);
      state.push(action.payload)
    },
    deleteChart: (state, action) => {
      const idx = state.findIndex((el) => {
        return el.id === action.payload
      })
      idx !== -1 && state.splice(idx, 1)
    },
    editChart: (state, action) => {
      const idx = state.findIndex(el => el.id === action.payload.activeId)
      const newItem =  {
              ...state[action.payload.activeId],
              type: action.payload.type,
              color: action.payload.color,
              id: action.payload.activeId,
            };
      idx !== -1 && state.splice(idx, 1, newItem)
    }
  },
});

export const { addNewChart, deleteChart, editChart } = chartsSlice.actions;

export const selectCharts = (state: RootState) => state.charts;

export default chartsSlice.reducer;
