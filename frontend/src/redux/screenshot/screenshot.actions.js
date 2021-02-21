import { ScreenshotActionTypes } from './screenshot.types';

export const addScreenshot = (shot) => ({
	type: ScreenshotActionTypes.ADD_SCREENSHOT,
	payload: shot,
});

export const deleteScreenshot = (shot) => ({
	type: ScreenshotActionTypes.DELETE_SCREENSHOT,
	payload: shot,
});
