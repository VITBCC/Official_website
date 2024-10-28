"use client";
import React from "react";
const TicketFeature = ({ feature }) => {
  return (
    <div className="text-white py-2 px-4 border-[1px] border-solid border-white rounded-full flex flex-row justify-center items-center">
      <span className="text-xs">{feature}</span>
      </div>
  )
}
const features = ["Conference", "Lunch", "Priority Check-In", "Party Invites"]
const TicketCard = ({ title, description}) => {
  return (
    <div className="w-[32%] h-[400px] rounded-3xl overflow-hidden relative p-5 border-[1px] border-solid border-white bg-gradient">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 -z-10"
            src="/stark.png"
            alt="VIP Pass"
          />
          <div className="w-full h-full bg-black absolute top-0 left-0 -z-[9] opacity-30"></div>
          <div className="w-full text-white font-extrabold text-[40px] my-2">
            {title}
          </div>
          <div className="text-white font-regular text-[18px] text-balance mt-6">
            {description}
          </div>
          <div className="flex flex-wrap mt-6 gap-0.5">
            
            {features.map((feature) => (<TicketFeature feature={feature} />))}
            
          </div>
          <div className="absolute bottom-5 w-full">
            <div className="h-[1px] bg-white w-11/12 opacity-40 mb-4"></div>
            <div className="flex flex-row w-11/12 justify-between">
              <a
                // href="https://buy.copperx.io/payment/payment-link/bb6972ed-2b93-43d4-a463-32d1b03a0d2d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white h-[50px] w-[49%] border-[1px] border-solid border-white bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)] backdrop-blur-sm rounded-full flex flex-row justify-center items-center"
              >
                <span className="text-sm font-bold">Buy With Crypto</span>
              </a>
              <a
                // href="https://rzp.io/l/conf24Vipticket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white h-[50px] w-[49%] border-[1px] border-solid border-white bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)] backdrop-blur-sm rounded-full flex flex-row justify-center items-center"
              >
                <span className="text-sm font-bold">Buy With Fiat</span>
              </a>
            </div>
          </div>
        </div>
  )
}
const Tickets = () => {
  return (
    <div
      id="tickets"
      className="w-full flex flex-col items-center justify-between mt-[60px] bg-black p-4"
    >
      <div className="w-full flex flex-row items-center justify-between mb-5">
        <div className="w-full text-white font-extrabold text-[84px] my-2">
          Buy Tickets
        </div>
        <div className="text-white font-regular text-lg w-4/5 text-right text-balance">
          Secure your spot today for insightful sessions, networking, and
          exclusive events at India's premier chain-agnostic conference.
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        {/* Regular Pass */}
        <TicketCard title="External Participant" description="Get access to all conference sessions, networking events, and the after-party." />

        {/* VIP Pass */}
        <TicketCard title="Internal Participant" description="Get access to exclusive networking events, private sessions with speakers, and priority seating. Ideal for investors and VCs." />

        {/* VC Pass */}
        <TicketCard title="Company" description="Get access to exclusive networking events, private sessions with speakers, and priority seating. Ideal for investors and VCs." />
      </div>
    </div>
  );
};

export default Tickets;