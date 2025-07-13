import Image, { StaticImageData } from "next/image"
type InfoType={
    title:string,
    icon:string | StaticImageData,
    description:string,
}

export default function Info({title,icon,description}:InfoType){
    return(
        <>
        <div className="w-1/2  lg:w-1/3 py-6 px-4 text-gray-600 border border-gray-700 rounded-md shadow-lg shadow-gray-900 hover:-translate-y-1 duration-500">
            <Image src={icon} alt='Info_icon' className="w-7 pb-4"/>
            <h1 className="font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
        </div>
        </>
    )
}