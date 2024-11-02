"use client"
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
export default function JoinUs() {
    const [email, setEmail] = useState("");

    async function submit() {
        const response = await fetch("https://bcc-backend.vercel.app/api/v1/users/ping",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, purpose: "Work" }),
            });

        const data = await response.json();

        if (data?.success) {
            setEmail("");
            toast.success(data?.message);

        } else {
            toast.error("Something went wrong");
            console.error("Error uploading project:", error);
        }
    }
    return (
        <div className="bg-[#110F0F] flex items-center justify-center md:p-10 p-6 w-screen md:w-full font-mono">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="bg-yellow-500 flex flex-col justify-center items-center w-screen md:w-full">
                <div className="flex items-center flex-col gap-y-7 md:p-6 p-3 mt-10 text-center">
                    <h2 className="text-3xl font-bold">Want to work with us?</h2>
                    <p>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. </p>
                    <div className="flex md:flex-row flex-col md:gap-x-3 gap-y-5 justify-center items-center">
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="p-3 border-2 border-solid text-black bg-white border-[#A1AEBF] focus:outline-none focus:border-black rounded-full w-80" />
                        <button className="bg-black rounded-full p-3 text-white font-bold w-24" onClick={() => submit()}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}