"use client"
import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    const handleSignUp = async () => {
        const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
        
    };
    
    return(
      <div className="flex text-center flex-col md:flex-row min-h-screen items-center p-8 md:p-24 justify-center bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="flex flex-col w-full md:w-1/3  p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-[#EAF0F7] mb-4">Register Here</h2>

        <div className="flex flex-col mb-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border bg-[#EAF0F7] text-[#677185] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border bg-[#EAF0F7] text-[#677185] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            type="password"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border bg-[#EAF0F7] text-[#677185] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          onClick={handleSignUp}
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign Up
        </button>
        <div className="flex items-center justify-center my-4">
          <hr className="w-1/4 border border-[#EAF0F7]" />
          <span className="text-[#EAF0F7] m-2">Or continue with</span>
          <hr className="w-1/4 border border-[#EAF0F7]" />
        </div>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
            <FcGoogle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    );
}