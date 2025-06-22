"use client";

import CircularText from "@/components/home/CircularText";

const Hero = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-1/2 flex-col items-center justify-center pl-5 text-center">
                <CircularText text="Alfredo's Glass Services" />
            </div>
        
        </div>
    );
};

export default Hero;