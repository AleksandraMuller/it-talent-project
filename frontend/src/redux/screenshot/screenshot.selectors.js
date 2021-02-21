import { createSelector } from 'reselect';

export const selectShots = (state) => state.screenshot;

export const selectShotsArr = createSelector(
	[selectShots],
	(ans) => ans.screenshots
);
