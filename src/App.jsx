
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeNameOfuserAction } from './redux/reducers/userAciton'
import { changeNameOfUser, getUserNameFromApi } from './redux/reducers/userReducer'
import { useEffect, useLayoutEffect } from 'react'
import { useGetAllPostQuery, useGetPostWithIdQuery, usePostUsingMutation } from './redux/apis/user_api'

// router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact'

function App() {
  const dispatch = useDispatch()
  const stateChe = useSelector((state) => state);
  console.log("STATE", stateChe)
  // const dataFromApi = useGetPostWithIdQuery(15);
  // console.log("DATA FROM API ", dataFromApi);

  const sdasd = useGetAllPostQuery();
  console.log("DATA FROM API ", sdasd);


  // mutation

  const [postUsing, { isLoading }] = usePostUsingMutation();

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     title: e.target.title.value,
  //     body: e.target.body.value,
  //     userId: 1,
  //   };
  //   await postUsing(data).unwrap();
  // };

  // useEffect(() => {
  //   dispatch(getUserNameFromApi("Shreeraj-Parmar"));
  // }, [])

  // console.log(name,age)
  const changeName = async() => {
    // dispatch({
    //   type:"changeNameOfUser",
    //   payload:"Hello world"
    // })
    // dispatch(changeNameOfUser("Hello world"))
    let payload = {
      name: "hello",
      id: 444,
    }
    await postUsing(payload)


  }

  return (
    <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <div>
      <button onClick={changeName}>Change name</button>
    </div>
  </Router>
  )
}

export default App
