import './App.css'
import { lazy, Suspense } from 'react';
const Write = lazy(() => import('./pages/Write'));
import Home from "./pages/Home";
import Login from "./pages/Login"
const Post = lazy(() => import('./pages/Post'));
const Signup = lazy(() => import('./pages/Signup'));
const UpdatePost = lazy(() => import('./pages/UpdatePost'));
const MyBlogs = lazy(() => import('./pages/MyBlogs'));
const Bookmarks = lazy(() => import('./pages/Bookmarks'));
import Navbar from "./components/Navbar"
import { useEffect, useState } from 'react';
import Sidebar from "./components/Sidebar";
import { Route, Routes, Navigate } from 'react-router-dom';
import { getBlogs } from './service/blogApi';
import { useDispatch, useSelector } from "react-redux";
import { addBlogs, addUser } from './store/actions';
import { checkUser } from './service/userApi';


function App() {
  const user = useSelector(state => state.setUser);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    findUser();
  }, [])

  // useEffect(() => {
  //   if(user){
      
  //   }
  // }, [user])
  const getAllBlogs = async(token) =>{
    let response = await getBlogs(token);
    if (response.status === 200) {
      dispatch(addBlogs(response.data))
      setIsLoading(false);
    }
    else{
      console.log(response)
      setIsLoading(false);
    }
  }

  const findUser = async() =>{
    let response = await checkUser();
    if (response?.status === 200) {
      dispatch(addUser(response.data));
      getAllBlogs();
    }
    else{
      console.log(response)
      getAllBlogs();
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    <Suspense fallback = {<h1 className = "suspense_loading">loading...</h1>}>
    {!isLoading ?
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Write" element = { (user ? <Write /> : (<Navigate to = "/Login" />))} />
        <Route path = "/:_id" element = { <Post /> } />
        <Route path = "/Login" element = { !user ? <Login /> : <Navigate to = "/" />} />
        <Route path = "/Signup" element = { !user ? <Signup /> : <Navigate to = "/" />} />
        <Route path = "/Update" element = { user ? <UpdatePost /> : <Navigate to = "/Login" />} />
        <Route path = "/myblogs" element = { user ? <MyBlogs /> : <Navigate to = "/Login" />} />
        <Route path = "/bookmarks" element = { user ? <Bookmarks /> : <Navigate to = "/Login" />} />
      </Routes>:<h1 className = "suspense_loading">loading...</h1>}
    </Suspense>
    </div>
  );
}

export default App
