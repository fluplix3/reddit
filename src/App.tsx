import React, { useEffect, useState } from 'react';
import "./main.global.css";
import { hot } from 'react-hot-loader/root';
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/rootReducer';
import { saveToken } from './store/me/actions';
import thunk from 'redux-thunk';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        store.dispatch(saveToken() as any)
    }, [])

    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <Layout>
                        <Header />
                        <Content>
                            <Routes>
                                <Route path='/auth' element={<Navigate replace to='/posts/' />} />
                                <Route path='/' element={<Navigate replace to='/posts/' />} />
                                <Route path='/posts/*' element={<CardsList />} />
                                <Route path='*' element={<ErrorPage />} />
                            </Routes>
                        </Content>
                    </Layout >
                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);
