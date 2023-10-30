import React, { createContext, useState } from "react";

type ImageDescription = {
    prompt: string;
    imageCount: number;
}

const initialValue: ImageDescription = {
    prompt: "award winning photograph of white unicorn running across clouds in sky that is pink in color with realistic shadows and mist ",
    imageCount: 1
}

export const GenerateContext = createContext<{
    imageDesc: ImageDescription;
    setImageDesc: React.Dispatch<React.SetStateAction<ImageDescription>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    images: object[],
    setImages: React.Dispatch<React.SetStateAction<object[]>>;
}>({
    imageDesc: initialValue,
    setImageDesc: () => { },
    isLoading: false,
    setIsLoading: () => { },
    images: [],
    setImages: () => { }
});

const GenerateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [imageDesc, setImageDesc] = useState<ImageDescription>(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState<object[]>([]);

    return (
        <GenerateContext.Provider value={{ imageDesc, setImageDesc, isLoading, setIsLoading, images, setImages }}>
            {children}
        </GenerateContext.Provider>
    )
}

export default GenerateContextProvider;
