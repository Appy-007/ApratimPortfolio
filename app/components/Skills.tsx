import { assets } from "@/assests/assets"
import SkillItem from "./SkillItem"
export default function Skills(){
    const skills=[
        {
            icon:assets.graphics_icon,
            title:'Frontend',
            skillitems:['Nextjs','Reactjs','JavaScript','TypeScript','Tailwind','HTML']
        },
        {
            icon:assets.web_icon,
            title:'Backend',
            skillitems:['Nestjs','Nodejs','Express','REST API','Web Sockets']
        },
        {
            icon:assets.dbicon,
            title:'Database',
            skillitems:['MongoDB','Postgres',]
        },
        {
            icon:assets.codingprofileicon,
            title:'Coding Platforms',
            skillitems:['Leetcode','GFG','CodeStudio',]
        },

    ]
    return (
        <>
        <div id='skills' className="scroll-mt-20 flex flex-col items-center mb-20  dark:bg-darkTheme dark:text-stone-200 font-Ovo">
            <h1 className="text-4xl">My Skills</h1>
            <div className="flex gap-2 w-full justify-center mt-8 flex-wrap">
                {skills.map((item)=><SkillItem key={item.title} title={item.title} icon={item.icon} skillitems={item.skillitems} />)}
            </div>
        </div>
        </>
    )
}