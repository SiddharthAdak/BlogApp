import './App.css'
import Write from './pages/Write'
import Home from './pages/Home';
import Navbar from "./components/Navbar"
import { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import { createContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getBlogs } from './service/blogApi';
import { useDispatch, useSelector } from "react-redux";
import { addBlogs, addUser } from './store/actions';
import Post from "./pages/Post"
import Login from './pages/Login';
import Signup from './pages/Signup';
import { checkUser } from './service/userApi';
import UpdatePost from './pages/UpdatePost';
import MyBlogs from './pages/MyBlogs';
export const UserContext = createContext();
function App() {
  const user = useSelector(state => state.setUser);

  const dispatch = useDispatch();
  useEffect(() => {
    findUser();
    
  }, [])
  useEffect(()=>{
    
    if(user){
      
      getAllBlogs(user.token);
    }
  }, [user])
  const getAllBlogs = async(token) =>{
    let response = await getBlogs(token);
    if (response.status === 200) {
      dispatch(addBlogs(response.data))
    }
    else{
      console.log(response)
    }
  }

  const findUser = async() =>{
    let response = await checkUser();
    if (response.status === 200) {
      dispatch(addUser(response.data));
    }
    else{
      console.log(response)
    }
  }




  const [state, setState] = useState(false);
  return (
    <div className="App">
    <UserContext.Provider
      value = {{state,
      setState,
      }}
    >
      <Navbar />
      <Sidebar />
    </UserContext.Provider>
    <Routes>
      <Route path = "/" element = { user ? <Home /> : <Navigate to = "/Login" />} />
      <Route path = "/Write" element = { user ? <Write /> : <Navigate to = "/Login" />} />
      
      <Route path = "/:_id" element = { user ? <Post /> : <Navigate to = "/Login" />} />
      <Route path = "/Login" element = { !user ? <Login /> : <Navigate to = "/" />} />
      <Route path = "/Signup" element = { !user ? <Signup /> : <Navigate to = "/" />} />
      <Route path = "/Update" element = { user ? <UpdatePost /> : <Navigate to = "/Login" />} />
      <Route path = "/myblogs" element = { user ? <MyBlogs /> : <Navigate to = "/Login" />} />
    </Routes>
    </div>
  );
}

export default App
