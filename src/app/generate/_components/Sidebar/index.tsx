import { generateImageAPI } from "@/apiUtils/generateImage";
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
        if (prompt === null || prompt === "") {
            alert("Please enter a prompt");
            return;
        }
        setIsLoading(true);
        try {
            const res = await generateImageAPI({ prompt, imageCount });
            if (res?.data) {
                const images = res.data.artifacts;
                console.log("Images,", images)
                setImages(images);
            }
        } catch (e: any) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="flex-1 flex-Col gap-6 bg-primaryText opacity-90 text-white p-8 h-full relative">
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
            <div className="flex-Row gap-6 flex-wrap">
                {/* Image Count */}
                <div className="flex-Col gap-3 w-full">
                    <InputBox
                        title="Image Count"
                        value={imageCount}
                        type="number"
                        placeholder="Number of Images"
                        onChange={handleValueChange}
                    />
                </div>


            </div>
            {/* Generate Button */}
            <div className="md:absolute bottom-0 left-0 right-0 md:px-8">
                <button onClick={generate} className="w-full mb-4 cta-btn p-2 rounded-md hover:opacity-80">
                    Generate
                </button>
            </div>
        </div>
    );
}
