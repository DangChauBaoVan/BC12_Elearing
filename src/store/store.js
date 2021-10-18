import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import loginReducer from 'containers/shared/Auth/Login/module/reducer';

const rootReducer = combineReducers({
    loginReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["loginReducer"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export  {store,persistor};