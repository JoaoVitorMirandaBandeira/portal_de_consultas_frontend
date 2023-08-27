import Image from "next/image"

const Loading = () => {
    return (
        <div className="bg-white bg-opacity-50 z-50 h-screen w-screen fixed flex justify-center items-center">
            <Image src="/rbGif.gif" alt='Gif logo de loading' width={80} height={80} />
        </div>
    )
}

export default Loading