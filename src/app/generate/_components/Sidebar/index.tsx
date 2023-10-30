"use client";
import InputBox from "@/components/UI/Input";
import TextArea from "@/components/UI/TextArea";
import React, { useState } from "react";

const ImageResolutions = [
    {
        id: 1,
        size: "512 X 512"
    },
    {
        id: 2,
        size: "1024 X 1024"
    }
]

export default function GenerateSidebar() {
    const [resolution, setResolution] = useState("");

    const handleImageResolution = (resolution: string) => {
        setResolution(resolution)
    }

    console.log(resolution)
    return (
        <div className="flex-1 flex-Col gap-6 bg-primaryText opacity-90 text-white p-8 h-full relative">
            {/* Choose Style */}
            {/* Enter Prompt */}
            <TextArea
                title="Prompt"
                value="An intricate sandcastle on a tropical beach, photorealistic"
                placeholder="Enter your prompt"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            />
            <div className="flex-Row gap-6 flex-wrap">
                {/* Image Count */}
                <div className="flex-Col gap-3 w-full">
                    <InputBox title="Image Count" value="1" type="number" placeholder="Number of Images" onChange={() => { }} />
                </div>

                {/* Image Resolution */}
                <div className="flex-Col gap-3">
                    <p>Image Resolution</p>
                    <div className="flex-1 flex-Row gap-3 text-sm">
                        {
                            ImageResolutions.map(({ id, size }) => {
                                return (
                                    <button key={id} className={`outline-none border rounded-md p-4 bg-transparent border-primaryCTA ${size === resolution && "bg-primaryCTA"}`} onClick={() => handleImageResolution(size)}>{size}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Generate Button */}
            <div className="md:absolute bottom-0 left-0 right-0 md:px-8">
                <button className="w-full mb-4 cta-btn p-2 rounded-md hover:opacity-80">Generate</button>
            </div>
        </div>
    );
}
