import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction1} from "../redux/action/action";


function HeadComponent (){
    const account1 = useSelector(state=> state.login);
    const dispatch = useDispatch()
    const handelLogout =()=>{
        dispatch(logoutAction1());
    }
        return <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className={'nav-link'} to={"/list"}>List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={'nav-link'} to={"/add"}>Add</Link>
                            </li>
                            <li className="nav-item">
                                {!account1&& <Link to={"/login"}>Login</Link>}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger ">{account1?.username}</a>
                            </li>
                            <li className="nav-item">
                                {account1&& <button onClick={handelLogout} className="btn btn-link ">Logout</button>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
}

export default HeadComponent;