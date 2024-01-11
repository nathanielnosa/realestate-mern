import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import image from '../assets/signup/house.avif'
const SignUp = () => {
    const loaderStyle = (<div className="flex items-center justify-center"><div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"> </div><span className="mx-2">Loading</span></div>)

    const navigate = useNavigate()
    // get data
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    // erro & loader
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }


    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const { username, email, password } = data
        if (username && email && password) {
            const fetchData = await fetch('/server/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            const res = await fetchData.json()
            if (res.success === false) {
                setLoading(false)
                setError(res.message)
                return;
            }
            setLoading(false)
            setError(null)
            setData({
                username: "",
                email: "",
                password: ""
            });
            navigate("/sign-in")
        } else {
            setLoading(false);
            setError("Fields cannot be empty");
        }
    }

    return (
        <main className="bg-[#fcfcfd] dark:bg-[#111111] h-[screen] px-3 overflow-y-auto">
            <div id="signup" className="flex rounded-md overflow-hidden  my-[5.23rem] w-[70vw] mx-auto">
                <div className="rounded-md w-[50%] md:max-w-[40vw] mx-auto bg-[#f2f2f3] dark:bg-[#000]">
                    <div className="text-center my-2">
                        <h3 className="text-[2.5rem] font-extrabold text-[#000037] dark:text-white">Register</h3>
                        <p className="text-[1.1rem]  text-[#8a8a8a] my-3 font-bold dark:text-white">Get Start With Us</p>
                    </div>
                    <div className="px-6 my-[2.7rem]">
                        {error && <p className="text-[#ff5e49] font-semibold text-[.95rem] capitalize">*{error}</p>}
                        <form onSubmit={handleOnSubmit}>
                            <div className="my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#fff] dark:bg-[#111111]">
                                <input type="text" className="h-full w-full bg-transparent px-[1rem] focus:outline-none placeholder:text-[#8a8a8a] dark:placeholder:text-[#fff]  placeholder:text-[1.3rem] text-[1.2rem]  text-[#8a8a8a] dark:text-[#fff]" placeholder="Username" name="username" value={data.username} onChange={handleOnChange} />
                            </div>
                            <div className="my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#fff] dark:bg-[#111111]">
                                <input type="email" className="h-full w-full bg-transparent px-[1rem] focus:outline-none placeholder:text-[#8a8a8a] dark:placeholder:text-[#fff]  placeholder:text-[1.3rem] text-[1.2rem]  text-[#8a8a8a] dark:text-[#fff]" placeholder="Email" name="email" value={data.email} onChange={handleOnChange} />
                            </div>
                            <div className="my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#fff] dark:bg-[#111111]">
                                <input type="password" className="h-full w-full bg-transparent px-[1rem] focus:outline-none placeholder:text-[#8a8a8a] dark:placeholder:text-[#fff]  placeholder:text-[1.3rem] text-[1.2rem]  text-[#8a8a8a] dark:text-[#fff]" placeholder="Password" name="password" value={data.password} onChange={handleOnChange} />
                            </div>
                            <div className="flex items-center justify-center text-[1.2rem] font-medium my-4 h-[8vh] text-[#fff] ">
                                <button disabled={loading} type="submit" className="w-full h-full rounded-tl-lg  rounded-br-lg bg-[#000037] dark:bg-[#13132e] hover:bg-[#20204d] disabled:opacity-80 ">{loading ? loaderStyle : "Register"}</button>
                            </div>
                            <div className="flex items-center justify-center text-[1.2rem] font-medium my-4 h-[8vh] text-[#fff] ">
                                <button type="submit" className="w-full h-full rounded-tl-lg rounded-br-lg bg-[#d5423a] dark:bg-[#13132e]"> Continue With Google</button>
                            </div>

                        </form>
                        <p className="font-semibold py-4 dark:text-[#fff]">Have an Account? <Link to={"/sign-in"} >Log In</Link></p>
                    </div>
                </div>
                <div className="img w-[50%] bg-[#000]">
                    <img src={image} alt="signup image" className="h-full opacity-[.5]" />
                </div>
            </div>
        </main>
    )
}

export default SignUp