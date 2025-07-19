export default function Footer(){
    return (
        <>
        <div className="flex max-md:flex-col-reverse items-center justify-between mx-4 px-6 pt-4 border-t mb-10 border-gray-800 ">
            <div>
                <p className="text-gray-600 font-bold">Created by: Apratim @2025</p>
            </div>
            <div className="flex max-sm:gap-2 max-sm:pb-4 gap-4 text-sm text-gray-600">
                <p> <a href="https://github.com/Appy-007" target="_blank">Github</a></p>
                <p><a href="https://leetcode.com/u/Apratim07/" target="_blank">LeetCode</a></p>
                <p><a href="https://www.geeksforgeeks.org/user/apratimraha23/" target="_blank">GFG</a></p>
                <p><a href="https://www.naukri.com/code360/profile/Appy007" target="_blank">Coding Ninja</a></p>

            </div>
        </div>
        </>
    )
}