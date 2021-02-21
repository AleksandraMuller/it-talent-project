import { ScreenshotActionTypes } from './screenshot.types';
import { addAnswerToArray } from './screenshot.utils';

const INITIAL_STATE = {
	screenshots: [],
};

export const screenshotReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ScreenshotActionTypes.ADD_SCREENSHOT:
			return {
				...state,
				screenshots: addAnswerToArray(state.screenshots, action.payload),
			};

		default:
			return state;
	}
};
