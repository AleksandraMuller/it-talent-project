import { ScreenshotActionTypes } from './screenshot.types';

export const addScreenshot = (shot) => ({
	type: ScreenshotActionTypes.ADD_SCREENSHOT,
	payload: shot,
});
