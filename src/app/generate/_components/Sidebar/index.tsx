import { generateImageAPI } from "@/apiUtils/generateImage";
import CTAButton from "@/components/UI/CTAButton";
import InputBox from "@/components/UI/Input";
import TextArea from "@/components/UI/TextArea";
import { useGenerateImage } from "@/hooks/generateImage";

export default function GenerateSidebar() {
    const { imageDesc: { prompt, imageCount }, setImageDesc, setIsLoading, setImages } = useGenerateImage();

    const handleValueChange = (e: any) => {
        setImageDesc({
            prompt,
            imageCount: parseInt(e.target.value)
        })
    }

    const handlePromptChange = (e: any) => {
        setImageDesc({
            prompt: e.target.value,
            imageCount
        })
    }

    const generate = async () => {
        if (prompt === null || prompt === "" || imageCount <= 0 || !imageCount) {
            alert("Please enter a prompt");
            return;
        }
        setIsLoading(true);
        try {
            const res = await generateImageAPI({ prompt, imageCount });
            if (res?.data) {
                const images = res.data.data;
                setImages(images);
            }
        } catch (e: any) {
            throw new Error("Image generation request failed", e)
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="flex-1 flex-Col gap-6 bg-black  p-8 h-full relative">
            {/* Enter Prompt */}
            <TextArea
                title={
                    <>
                        <div>
                            <span className="text-primaryCTA">Describe</span> what you want
                        </div>
                    </>
                }
                value={prompt}
                placeholder="Enter your prompt"
                onChange={handlePromptChange}
            />
            {/* Image Count */}
            <InputBox
                title="Image Count"
                value={imageCount}
                type="number"
                placeholder="Number of Images"
                onChange={handleValueChange}
            />
            {/* Generate Button */}
            <div className="md:absolute bottom-0 left-0 right-0 md:px-8">
                <CTAButton title="Generate" onClick={generate} />
            </div>
        </div>
    );
}
