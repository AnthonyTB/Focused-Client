import Image from 'next/image'
import { useState } from 'react'

interface IProps {
    items: IBlock[]
}

interface IBlock {
    ImgSrc: string;
    Title: string;
    Link: string;
}

const Masonary: React.FC<IProps> = ({items}) => {
    const [limit, setLimit] = useState<number>(6)

    return (
        <div className="relative">
            <ul className="flex flex-row flex-wrap">
            {items.map((block: IBlock, idx: number) => {
                if (idx < limit) {
                        return <Block key={`news ${idx}`} {...block} />
                    } else {
                        return
                    }
                }
            )}
            </ul>
                { items.length > 6 && <button onClick={limit > 6 ? () => setLimit(6) : () => setLimit(999)} type="button" className="uppercase z-10 text-xs lg:absolute lg:-bottom-10 lg:left-1/2 text-white rounded border-2 border-accent py-1 px-2 font-black">{limit > 6 ? "hide" : "show more"}</button> }
        </div>
    )
}

const Block: React.FC<IBlock> = ({ImgSrc, Title, Link}) => {
    return (
        <li className="w-full sm:w-1/3 lg:w-1/4 relative m-2 Companies">
            <a href={Link} target="blank_">
            <Image 
                src={ImgSrc} 
                width={500} 
                height={300}
                alt="Background image"
                objectFit="cover"
            />
            <h2 className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 uppercase text-xl text-white font-black">{Title}</h2>
            </a>
        </li>
    )
}

export default Masonary