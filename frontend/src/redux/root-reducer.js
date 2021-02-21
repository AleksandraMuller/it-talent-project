import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { screenshotReducer } from './screenshot/screenshot.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['screenshot'],
};

const rootReducer = combineReducers({
	screenshot: screenshotReducer,
});

export default persistReducer(persistConfig, rootReducer);
