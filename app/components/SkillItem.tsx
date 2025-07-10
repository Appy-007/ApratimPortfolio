import Image from "next/image"
import { StaticImageData } from "next/image"
type skillPropType={
    icon:string | StaticImageData,
    title:string,
    skillitems:string[]
}
export default function SkillItem({icon,title,skillitems}:skillPropType){
    return (
        <>
        <div className="w-60 border border-gray-300 rounded-md p-4 pt-12 hover:bg-pink-100/95 shadow shadow-pink-300">
            <Image src={icon} className="w-10" alt="skill_icon"/>
            <h1 className="text-xl font-bold py-2">{title}</h1>
            <ul className="list-disc pl-5">
                {skillitems.length >0 && skillitems.map((item)=><li key={item}>{item}</li>)}
            </ul>
            
        </div>
        </>
    )
}