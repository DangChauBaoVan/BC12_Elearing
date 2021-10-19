import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
//reducer
import userReducer from 'containers/admin/quanLyNguoiDung/module/userReducer';
import eduReducer from 'containers/admin/quanLyKhoaHoc/module/eduReducer';

const rootReducer = combineReducers({
    userReducer,
    eduReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export  {store,persistor};