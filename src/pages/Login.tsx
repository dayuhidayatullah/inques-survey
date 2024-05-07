import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
interface Form {
  email: string;
  password: string;
  // name: string,
}
const Login = () => {
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const token = localStorage.access_token;
  console.info(token, "<<< token");
  useEffect(() => {
    if (token) {
      //   const me = await refreshMeData();
      //   if (me?.role?.toLowerCase() !== 'user') {
      //     await refreshMasterData();
      //   } else {
      //     store.setClientSelected(me);
      //     setClientSelected(me);
      //   }
      // e.preventDefault()
      // window.location.href = `/`;
      navigate("/");
    }
  });
  // else {
  // }

  // console.info(token, '<<< token')
  const handleChangeInput = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = async (event: any) => {
    event?.preventDefault();

    try {
      const request = await axios.post("/login", form);
      if (request.data) {
        localStorage.setItem("access_token", request.data.access_token);
        navigate("/");
        axios
          .get("/auction/private", {
            headers: { access_token: request.data.access_token },
          })
          .then((data) => {
            console.info(data);
          });
      }
    } catch (error) {
      console.info(error);
    }
  };
  return (
    <div className="font-sans h-screen">
      <div className="container mx-auto mt-[100px]">
        <div className="flex justify-center items-center shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] ">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-no-repeat"
              style={{
                backgroundImage: `url(https://www.surveylegend.com/wordpress/wp-content/uploads/2021/04/survey-testing.png)`,
              }}
            ></div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Login</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmitLogin}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    // type="email"
                    name="email"
                    onChange={(e) => handleChangeInput(e)}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    onChange={(e) => handleChangeInput(e)}
                    placeholder="******"
                  />
                  {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
                </div>
                <div className="mb-4">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="checkbox_id"
                  />
                  <label className="text-sm" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    // onClick={(e) => handleSubmit(e)}
                  >
                    Sign In
                  </button>
                </div>
                {/* <hr className="mb-6 border" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./register"
                  >
                    Create an Account!
                    </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
