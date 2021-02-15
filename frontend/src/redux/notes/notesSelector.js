import { createSelector } from 'reselect';

export const selectNotes = (state) => state.notes;

export const selectNotesArr = createSelector([selectNotes], (ans) => ans.notes);
