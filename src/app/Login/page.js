"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8003/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  const handleRegister = async () => {
    const response = await fetch(
      "http://localhost:8003/api/v1/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <div className="bg-gradient dark flex flex-col md:flex-row min-h-screen items-center p-8 md:p-24 justify-center ">
      <div className="flex flex-col justify-center text-center items-center md:w-1/2 p-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          {isLogin ? "Sign In to VIT BCC" : "Register to VIT BCC"}
        </h2>
        <p className="text-white">
          {isLogin ? (
            <div>
              If you don't have an account you can{" "}
              <p

                className="text-blue-400 cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Register here!
              </p>
            </div>
          ) : (
            <div>
              Already have an account?{" "}
              <p
                className="text-blue-400 cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Back to Login
              </p>
            </div>
          )}
        </p>
      </div>
      <div className="relative mt-8 md:mt-0 w-48 h-48 md:w-[650px] md:h-[550px]">
        <Image src="/boyPic.svg" alt="logo" fill={true} />
      </div>

      <div className="flex flex-col w-full md:w-1/2 p-8 md:p-12 text-right">
        {!isLogin && (
          <div className="flex flex-col mb-2">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border bg-[#EAF0F7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
        )}
        <div className="flex flex-col mb-2">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border bg-[#EAF0F7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border bg-[#EAF0F7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          {isLogin && (
            <a href="" className="text-sm text-blue-400 mt-2">
              Recover Password?
            </a>
          )}
        </div>
        <button
          onClick={isLogin ? handleLogin : handleRegister}
          className="w-full py-3 bg-[#4461F2] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 md:mt-12 mb-8"
        >
          {isLogin ? "Sign In" : "Register"}
        </button>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// // import { FcGoogle } from "react-icons/fc";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     const response = await fetch("http://localhost:4000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();
//   };

//   return (
//     <div className="bg-gradient dark flex flex-col md:flex-row min-h-screen items-center p-8 md:p-24 justify-center ">
//       <div className="flex flex-col justify-center text-center items-center md:w-1/2 p-8">
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Sign In to VIT BCC
//         </h2>
//         <p className="text-white">
//           If you don't have an account you can{" "}
//           <a href="#" className="text-blue-400">
//             Register here!
//           </a>
//         </p>
//       </div>
//       <div className="relative mt-8 md:mt-0 w-48 h-48 md:w-[650px] md:h-[550px]">
//         <Image src="/boyPic.svg" alt="logo" fill={true} />
//       </div>
//       <div className="flex flex-col w-full md:w-1/2 p-8 md:p-12 text-right">
//         <div className="flex flex-col mb-2">
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-4 border bg-[#EAF0F7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="flex flex-col mb-4">
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-4 border bg-[#EAF0F7] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <a href="#" className="text-sm text-blue-400 mt-2">
//             Recover Password?
//           </a>
//         </div>
//         <button
//           onClick={handleLogin}
//           className="w-full py-3 bg-[#4461F2] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 md:mt-12 mb-8"
//         >
//           Sign In
//         </button>
//       </div>
//     </div>
//   );
// }

{
  /* <div className="flex items-center justify-center my-4">
      <hr className="w-1/4 border border-gray-300" />
      <span className="text-white m-2">Or continue with</span>
      <hr className="w-1/4 border border-gray-300" />
    </div> */
}
{
  /* <div className="flex justify-center space-x-4">
      <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <FcGoogle className="w-6 h-6" />
      </button>
    </div> */
}