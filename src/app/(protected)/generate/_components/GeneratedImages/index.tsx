import { useGenerateImage } from "@/hooks/generateImage";
import Image from "next/image";
import React from "react";

export default function GeneratedImages() {
    const {
        imageDesc: { prompt, imageCount },
        isLoading,
        images,
    } = useGenerateImage();

    return (
        <div className="flex-[3] h-full  py-8 padding-x overflow-y-auto">
            {/* Prompt */}
            {(images.length >= 1 || isLoading) && <p>{prompt}</p>}
            {/* Images */}
            {!isLoading && images.length <= 0 && (
                <>
                    <p>Describe your art...</p>
                    <div className="flex-1 min-w-[256px] min-h-[256px] mobile:max-w-[256px] flex-center  gradient-border mt-3">
                        <Image
                            src="/assets/logo-2.webp"
                            width={120}
                            height={120}
                            alt="Logo"
                        />
                    </div>
                </>
            )}
            {isLoading ? (
                <div className="flex-Row gap-4 mt-3 flex-wrap">
                    {imageCount > 0 &&
                        Array(imageCount)
                            .fill(1)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 min-w-[256px] min-h-[256px] max-w-[256px] flex-center  gradient-border"
                                >
                                    <Image
                                        src="/assets/logo-2.webp"
                                        width={120}
                                        height={120}
                                        alt="Logo"
                                        className="animate-pulse "
                                    />
                                </div>
                            ))}
                </div>
            ) : (
                <div className="flex-Row gap-4 mt-3 flex-wrap">
                    {images.map((image: any, index) => (
                        <div
                            key={index}
                            className="flex-1 relative min-w-[256px] sm:max-w-[256px] min-h-[256px] rounded-lg overflow-hidden"
                        >
                            {/* <a
                                href={`${image}`}
                                className="relative top-0 right-0 z-10"
                                // download={`text2image_${index}.png`}
                                download
                            >
                                Download
                            </a> */}
                            <Image
                                key={index}
                                src={`${image}`}
                                alt={`Image ${index}`}
                                fill
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
