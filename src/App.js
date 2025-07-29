import './App.css';
import React from "react";

import ListComponent from './component/ListComponent'
import HeadComponent from "./component/HeadComponent";
import {Route, Routes} from "react-router-dom";
import AddComponent from "./component/AddComponent";
import DetailComponent from "./component/DetailComponent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux";
import LoginComponent from "./component/LoginComponent";
import {store} from "./redux/store/store";

function App() {

    return <>
        <Provider store={store}>
        <HeadComponent/>
        <Routes>
            <Route path={'/list'} element={<ListComponent/>}/>
            <Route path={'/add'} element={<AddComponent/>}/>
            <Route path={'/detail/:id'} element={<DetailComponent/>}/>
            <Route path={'/login'} element={<LoginComponent/>}/>
        </Routes>
        <ToastContainer/>
        </Provider>
    </>

}

export default App;
