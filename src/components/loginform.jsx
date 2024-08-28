import React from "react";
export default function Loginform() {
    return(
        <div className="mt-48">
            <div className="flex flex-row m-20 justify-center items-center">
                <div className="bg-gradient-to-t from-blue-500 to-blue-600 w-[38rem] h-screen rounded-l-md">
                    <div className="p-20 flex flex-col gap-6">
                    <h1 className="font-semibold text-white text-5xl">Gufungura konti</h1>
                    <h1 className="font-normal text-white text-wrap text-lg">Kurikiza aya mabwiriza yo kwiyandikisha kugirango udufashe kugufungurira konti</h1>
                    <div className="flex flex-row gap-10">
                    <span className="rounded-3xl w-6 h-6 bg-white text-center text-sm text-blue-500"><p>1</p></span>
                    <h1 className="text-white text-sm/[16px] font-semibold">Ohereza amakuru asabwa</h1>
                    </div>

                    <div className="flex flex-row gap-10">
                    <span className="rounded-3xl w-6 h-6 bg-blue-400 text-center text-sm text-white"><p>2</p></span>
                    <h1 className="text-white text-sm/[16px] font-semibold">Isuzuma rya konti</h1>
                    </div>

                    <div className="flex flex-row gap-10">
                    <span className="rounded-3xl w-6 h-6 bg-blue-400 text-center text-sm text-white"><p>3</p></span>
                    <h1 className="text-white text-sm/[16px] font-semibold">Shyiramwo ijambo ry'ibanga ryawe</h1>
                    </div>
                    </div>
                    <div className="flex flex-row px-36 py-[8rem]">
                        <img src="reset-pwd-footer.svg" alt="" />
                    </div>
                </div>

                <div className="bg-white justify-center items-center w-[25rem] h-screen rounded-r-md shadow-2xl">
                    <div className="py-24 px-10 flex flex-col gap-4">
                        <h1 className="font-semibold text-lg/[18px]">Gufungura konti</h1>
                        <h1 className="text-sm/[16px] flex">Nomero y'indangamuntu <h1 className="text-red-600">*</h1></h1>
                        <input type="text" className="border-2 border-gray-200 rounded-md h-10 px-2 text-sm/[16px] hover:shadow-lg transition-all duration-150 ease-in-out" placeholder="Shyiramo nomero y'indangamuntu"/>
                        <h1 className="text-sm/[16px] flex">Nomero ya telefoni (Rwanda) <h1 className="text-red-600">*</h1></h1>
                        <input type="password" className="border-2 border-gray-200 rounded-md h-10 px-2 text-sm/[16px] hover:shadow-lg transition-all duration-150 ease-in-out" placeholder="Andika Nomero ya Telefoni"/>
                        <button className="rounded-md h-10 px-2 bg-blue-400 text-white text-sm/[16px]">Iyandikishe</button>
                        <h1 className="text-sm/[24px]">Mu kwiyandikisha, uremeza gukoresha <a href="#" className="text-blue-600"> amabwiriza</a> mashya ya IremboGov harimo n'ayo <a href="#" className="text-blue-600">kurinda amakuru </a>bwite.</h1>

                        <h1 className="text-sm/[24px]">Usanzwe ufite konti? <a href="#" className="text-blue-600 hover:underline">Injira</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
    }