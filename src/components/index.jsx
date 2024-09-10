import React from "react";
export default function Index() {
    return(
        <div>
            <div className="lg:py-3 flex lg:justify-center lg:items-center w-full bg-yellow-400 lg:text-sm text-[12px] fixed top-0 left-0 right-0">
                <p className="flex lg:flex-row flex-col py-1 lg:items-center lg:justify-center text-start lg:gap-1 w-[100%]">
            
                <div className="flex gap-2 text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="blue" className="lg:size-6 size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
                <h1 className="font-semibold">Igishya!</h1> <span>Umwaka wa mituweli 2024/2025</span>
                </div>


                <div className="flex lg:ps-0 ps-7 gap-1 lg:justify-center items-center self-start">
                <span>watangiye. Ishyurira umuryango wawe</span><a href="#" className="font-semibold underline self-end">hano</a>
                </div>
                
                </p>
                
            </div>

            <div className="flex flex-row lg:py-4 py-2 bg-blue-600 shadow-2xl lg:justify-around justify-between fixed top-[46px] left-0 right-0">
                <div className="lg:w-32 w-24 flex flex-row items-center shrink-0 lg:gap-0 gap-3 lg:ps-0 ps-2">
                <button className="lg:hidden block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></button>
                <img src="irembo-gov.svg" alt=""/>
                </div>

                <div className="flex flex-row gap-5 items-center text-white text-sm font-semibold">
                    <button className="lg:flex flex-row hidden py-2 px-4 gap-1 items-center hover:bg-blue-400 rounded-sm transition-all duration-100 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M480-144v-72h264v-528H480v-72h264q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H480Zm-72-168-51-51 81-81H144v-72h294l-81-81 51-51 168 168-168 168Z"/></svg><span>Kwinjira</span></button>

                    <button className="lg:flex flex-row hidden py-2 px-4 gap-1 items-center bg-blue-400 rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg><span>Shaka dosiye</span></button>

                    <button className="flex flex-row lg:hidden py-2 px-4 gap-1 items-center bg-blue-600 rounded-sm">Konti</button>

                <div className="lg:flex flex-row hidden items-center gap-2">
                    <img src="Rwanda.svg" alt="" className="h-7 rounded-full items-center justify-center" />
                    <button className="flex flex-row items-center"><span>Kinyarwanda</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> </svg></button>
                </div>
            </div>
            </div>
        </div>
    );
}