import React from "react";
import { AnimatedBeamMultipleOutputDemo } from "../actions/page";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function HowItWork() {
    return (
        <div className="md:w-full w-screen bg-[#110F0F] flex md:flex-row flex-col items-center justify-around text-white p-6 font-mono">
            <div className="w-screen md:w-1/2 space-y-6 md:p-0 p-3 ">
                <div className="font-bold text-4xl">
                    How It Works?
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full space-y-3 ">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Connect your GitHub and Vercel account.</AccordionTrigger>
                            <AccordionContent>
                                Select the option to log in via GitHub and authenticate using OAuth and after that connect the Vercel account.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Upload Project Folder</AccordionTrigger>
                            <AccordionContent>
                                Choose the project folder from the local system. The application will read and prepare the files for upload.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Fill in Required Descriptions</AccordionTrigger>
                            <AccordionContent>
                                Complete the pop-up form by entering the project name, description, and selecting the repository's visibility (public or private).
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Get Links for GitHub Repo and Vercel URL</AccordionTrigger>
                            <AccordionContent>
                                Obtain the links for the newly created GitHub repository and the deployed Vercel project.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="md:w-1/2 w-screen">
                <AnimatedBeamMultipleOutputDemo />
            </div>

        </div>
    );
}