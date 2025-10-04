import { drsight } from "@/assets"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <div className=" bg-amazing_blue flex flex-row p-4 rounded-full border border-red-500 text-white max-h-[80px]">
            <div className="bg-rose-500 rounded-xl flex flex-col justify-center items-center pt-4 pb-2">
                <span className="uppercase flex text-red-300 justify-center items-center px-2">@ahroniy</span>
                <Link href="/">
                    <Image
                        src={drsight}
                        height={50}
                        width={50}
                        alt="logo"
                        className="bg-amazing_blue border-2 border-red-500 rounded-full"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Logo
