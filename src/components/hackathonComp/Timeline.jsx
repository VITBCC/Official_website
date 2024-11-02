"use client";
import React from "react";

function Item({item}){
    return (
        <div className="text-white py-2 px-4 border-[1px] border-solid border-white rounded-full flex flex-row justify-center items-center">
            <span className="text-xs">{item}</span>
        </div>
    )
}


function Row({ date, title, items }) {
    return (
        <div className="w-full border-white border-[1px] bg-gradient rounded-full border-solid flex flex-row items-center justify-between p-5 mb-2 text-balance">
            <div className="text-white font-extrabold text-[32px] p-5">
                {date}
            </div>
            <div className="text-white font-extrabold text-[32px] p-5">
                {title}
            </div>
            <div className="flex flex-wrap gap-0.5 w-2/5 justify-end pr-5">
                {items && items.map((item, index) => (
                    <Item item={item} />
                ))}
            </div>
        </div>
    );
}

export default function Timeline() {
    const tempItems = ["Inauguration - 9:00 AM", "Partner Talks - 9:15 AM", "Hacking Begins - 10:30 AM", "Lunch - 02:30 PM", "Dinner - 09:30 PM", "Hacking Ends - 10:30 PM"];
    
    return (
        <div className="bg-black text-white min-h-screen font-sans p-4">
            <div id="timeline" className="w-full flex flex-col items-center justify-between mt-[60px]">
                <div className="w-full flex flex-row items-center justify-between mb-[30px]">
                    <div className="w-full text-white font-extrabold text-[84px] my-2">
                        Timeline
                    </div>
                    <div className="text-white font-regular text-lg w-4/5 text-right text-balance">
                        Secure your spot today for insightful sessions, networking, and exclusive events at India's premier chain-agnostic conference.
                    </div>
                </div>
                
                {/* Pass items here */}
                <Row date="9th November" title="Hackathon Day-1" items={tempItems}  />
                <Row date="10th November" title="Hackathon Day-2" items={tempItems}  />
                <Row date="11th November" title="Hackathon Day-3" items={tempItems}  />
            </div>
        </div>
    );
}