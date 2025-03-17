
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { changeNameOfuserAction } from './redux/reducers/userAciton'
import { changeNameOfUser, getUserNameFromApi } from './redux/reducers/userReducer'
import { useEffect, useLayoutEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const {user_info} = useSelector((state) => state)
  console.log("Store DaTa ",user_info)

  useEffect(() => {
    dispatch(getUserNameFromApi("Shreeraj-Parma"));
  }, [])

  // console.log(name,age)
  const changeName = () => {
    // dispatch({
    //   type:"changeNameOfUser",
    //   payload:"Hello world"
    // })
    dispatch(changeNameOfUser("Hello world"))
  }

  return (
    <>
      <div>
        name :  {user_info.name}  
      </div>
      <button onClick={changeName}>Change name</button>
    </>
  )
}

export default App
