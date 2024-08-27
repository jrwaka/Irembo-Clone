import React from "react";
export default function Index() {
    return(
        <div>
            <div className="py-3 flex justify-center items-center text-center w-full bg-yellow-400 text-sm">
                <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="20px" fill="black"><path d="M192-216v-72h48v-240q0-87 53.5-153T432-763v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v240h48v72H192Zm288-276Zm-.21 396Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21ZM312-288h336v-240q0-70-49-119t-119-49q-70 0-119 49t-49 119v240Z"/></svg><b className="font-semibold">Igishya!</b> Umwaka wa mituweli 2024/2025 watangiye. Ishyurira umuryango wawe <b><u>hano</u></b></p>
            </div>

            <div className="flex flex-row py-4 bg-blue-600 shadow-xl justify-around">
                <div className="w-32 flex flex-row items-center">
                <img src="irembo-gov.svg" alt=""/>
                </div>

            <div className="flex flex-row gap-5 items-center text-white text-sm font-semibold">
                    <button className="flex flex-row py-2 px-4 gap-1 items-center bg-blue-400 rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M480-144v-72h264v-528H480v-72h264q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H480Zm-72-168-51-51 81-81H144v-72h294l-81-81 51-51 168 168-168 168Z"/></svg><span>Kwinjira</span></button>

                    <button className="flex flex-row py-2 px-4 gap-1 items-center bg-blue-400 rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg><span>Shaka dosiye</span></button>
                <div className="flex flex-row items-center gap-2">
                    <img src="Rwanda.svg" alt="" className="h-7 rounded-full items-center justify-center" />
                    <button className="flex flex-row items-center"><span>Kinyarwanda</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-4"> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> </svg></button>
                </div>
            </div>
            </div>
        </div>
    );
}