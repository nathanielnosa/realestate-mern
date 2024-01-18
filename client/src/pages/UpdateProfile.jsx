import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { useEffect, useState, useRef } from 'react';
import { app } from '../firebase/firebase';

const UpdateProfile = () => {
  const { currentUser } = useSelector((state) => state.user)
  const fileRef = useRef(null)
  const [file, setFile] = useState(undefined)

  const [filePercent, setFilePercent] = useState(0)
  const [fileError, setFileError] = useState(false)
  const [formData, setFormData] = useState({})

  console.log(filePercent);

  useEffect(() => {
    if (file) {
      handleProfileImage(file)
    }
  }, [file]);

  const handleProfileImage = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePercent(Math.round(progress));
    },
      (error) => {
        setFileError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setFormData({ ...formData, avatar: downloadURL }))
      }
    )
  };


  return (
    <section id="profile" className="py-8 bg-[#fcfcfd] dark:bg-[#000] h-screen">
      <div className="text-center">
        <h3 className='text-[1.5rem] flex items-center justify-center gap-x-2 text-[#000037] dark:text-[#fff]'><FaUserCircle /> Update Profile</h3>

        <div className="px-5 flex md-flex-row py-3 w-[60%] mx-auto  items-center gap-4  justify-center border rounded-md my-[3rem]">
          <div className="">
            <div className="mx-auto hover:cursor-pointer relative border overflow-hidden rounded-full drop-shadow-md shadow-md h-[150px] w-[150px]">
              <input type="file" ref={fileRef} hidden accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
              <img src={formData.avatar || currentUser.avatar} alt="profile" className='w-full h-full' onClick={() => fileRef.current.click()} />
            </div>
            {
              <p>

                {
                  fileError ?
                    (
                      <span className='text-[red]'>Error loading image (Image must be less than 2mb)</span>
                    )
                    :
                    filePercent > 0 && filePercent < 100 ?
                      (
                        <span className='text-[gray]'>{`Uploading ${filePercent}% `}</span>
                      )
                      :
                      filePercent === 100 ?
                        (
                          <span className='text-[seagreen]'>Image uploaded successfully</span>
                        )

                        : (
                          ""
                        )
                }

              </p>
            }
          </div>
          <div className="w-full">
            <form action="">
              <div className="form-group my-2">
                <input type="text" name='username' className="rounded-md w-[80%] h-[6vh] border border-[#000037] placeholder:text-[1.3rem] px-3 bg-transparent focus:outline-none dark:border-[#fff] dark:text-[#fff]" placeholder='Username' />
              </div>
              <div className="form-group my-2">
                <input type="email" name='email' className="rounded-md w-[80%] h-[6vh] border border-[#000037] placeholder:text-[1.3rem] px-3 bg-transparent focus:outline-none dark:border-[#fff] dark:text-[#fff]" placeholder='Email' />
              </div>
              <div className="form-group my-2">
                <input type="password" name='password' className="rounded-md w-[80%] h-[6vh] border border-[#000037] placeholder:text-[1.3rem] px-3 bg-transparent focus:outline-none dark:border-[#fff] dark:text-[#fff]" placeholder='Password' />
              </div>

              <div className="form-group my-2">
                <input type="submit" value="Submit" className="rounded-md w-[80%] h-[6vh]  bg-[#000037] placeholder:text-[1.3rem] px-3 text-[#fff] focus:outline-none dark:border-[#fff] dark:text-[#fff] cursor-pointer" />
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpdateProfile