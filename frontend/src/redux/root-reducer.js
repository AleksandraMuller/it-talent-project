import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { notesReducer } from './notes/notesReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
	timeout: null,
};

const rootReducer = combineReducers({
	notes: notesReducer,
});

export default persistReducer(persistConfig, rootReducer);
