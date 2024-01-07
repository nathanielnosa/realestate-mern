import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <main className="bg-[#fcfcfd] dark:bg-[#111111] h-[screen] overflow-y-auto">
            <div id="signup" className="">
                <div className="rounded-md max-w-[40vw] my-[5.23rem] mx-auto bg-[#f2f2f3] dark:bg-[#000]">
                    <div className="text-center my-2">
                        <h3 className="text-[2.5rem] font-extrabold text-[#000037] dark:text-white">Register</h3>
                        <p className="text-[1.1rem]  text-[#8a8a8a] my-3 font-bold dark:text-white">Get Start With Us</p>
                    </div>
                    <div className="px-6 my-[2.7rem]">
                        <form >
                            <div className="my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#fff] dark:bg-[#111111]">
                                <input type="text" className="h-full w-full bg-transparent px-[1rem] focus:outline-none placeholder:text-[#8a8a8a] dark:placeholder:text-[#fff]  placeholder:text-[1.3rem] text-[1.2rem]  text-[#8a8a8a] dark:text-[#fff]" placeholder="Username" />
                            </div>
                            <div className="my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#fff] dark:bg-[#111111]">
                                <input type="email" className="h-full w-full bg-transparent px-[1rem] focus:outline-none placeholder:text-[#8a8a8a] dark:placeholder:text-[#fff]  placeholder:text-[1.3rem] text-[1.2rem]  text-[#8a8a8a] dark:text-[#fff]" placeholder="Email" />
                            </div>
                            <div className="my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#fff] dark:bg-[#111111]">
                                <input type="password" className="h-full w-full bg-transparent px-[1rem] focus:outline-none placeholder:text-[#8a8a8a] dark:placeholder:text-[#fff]  placeholder:text-[1.3rem] text-[1.2rem]  text-[#8a8a8a] dark:text-[#fff]" placeholder="Password" />
                            </div>
                            <div className="flex items-center justify-center text-[1.2rem] font-medium my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#000037] text-[#fff] dark:bg-[#13132e]">
                                <button type="submit" className="w-full h-full"> Register</button>
                            </div>
                            <div className="flex items-center justify-center text-[1.2rem] font-medium my-4 h-[8vh] rounded-tl-lg rounded-br-lg bg-[#d5423a] text-[#fff] dark:bg-[#13132e]">
                                <button type="submit" className="w-full h-full"> Continue With Google</button>
                            </div>

                        </form>
                        <p className="font-semibold py-4 dark:text-[#fff]">Have an Account? <Link to={"/sign-in"} >Log In</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp