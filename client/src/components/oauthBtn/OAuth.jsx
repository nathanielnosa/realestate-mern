import { signInSuccess } from '../../redux/user/userSlice';
import { app } from '../../firebase/firebase'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoogleOauth = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)
      // console.log(result);

      //sending the result to backend
      const res = await fetch('server/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL })
      })
      const data = await res.json()
      dispatch(signInSuccess(data))
      navigate('/profile')
    } catch (error) {
      console.log("could not sign-in with google", error);
    }
  }

  return (
    <div className="flex items-center justify-center text-[1.2rem] font-medium my-4 h-[8vh] text-[#fff] ">
      <button type="button" onClick={handleGoogleOauth} className="w-full h-full rounded-tl-lg rounded-br-lg bg-[#d5423a] dark:bg-[#13132e]"> Continue With Google</button>
    </div>
  )
}

export default OAuth