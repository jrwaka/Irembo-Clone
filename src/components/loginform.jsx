import React, { useState } from "react";

const Loginform = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData({
            ...formData, [name]: value  
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.email.trim()) {
            validationErrors.email = "Shyiramo email yawe";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email ushyizemo ntabwo ibaho";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Shyiramo ijambo banga ryawe";
        } else if (formData.password.length < 8) {
            validationErrors.password = "Ijambo banga rigomba kuba rifite byibuze inyuguti 8";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Ifishi yatanzwe neza!");
        }
    };

    return (
        <div className="lg:mt-40 mt-4">
            <div className="flex flex-row m-20 justify-center items-center">
                <div className="lg:flex flex-row hidden bg-gradient-to-t from-blue-500 to-blue-600 w-[38rem] h-screen rounded-l-md">
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

                <div className="bg-white justify-center items-center w-[26rem] h-screen rounded-r-md shadow-2xl">
                    <form onSubmit={handleSubmit} className="lg:py-24 py-20 lg:px-10 px-14 flex flex-col gap-4">
                        <h1 className="font-semibold text-lg/[18px]">Gufungura konti</h1>
                        <h1 className="text-sm/[16px] flex">Email yawe <span className="text-red-600">*</span></h1>

                        <input
                            type="text"
                            name="email"  // Added name attribute
                            className="border-2 border-gray-200 rounded-md h-10 px-2 lg:text-sm/[16px] text-[12px] hover:shadow-lg transition-all duration-150 ease-in-out"
                            placeholder="Shyiramo email yawe"
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-600 text-sm/[16px]">{errors.email}</p>}

                        <h1 className="text-sm/[16px] flex">Ijambo banga <span className="text-red-600">*</span></h1>

                        <input
                            type="password"
                            name="password"  // Added name attribute
                            className="border-2 border-gray-200 rounded-md h-10 px-2 lg:text-sm/[16px] text-[12px] hover:shadow-lg transition-all duration-150 ease-in-out"
                            placeholder="Shyiramo ijambo banga"
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-600 text-sm/[16px]">{errors.password}</p>}

                        <button type="submit" className="rounded-md h-10 px-2 bg-blue-400 text-white text-sm/[16px]">Iyandikishe</button>
                        <h1 className="text-sm/[24px]">Mu kwiyandikisha, uremeza gukoresha <a href="#" className="text-blue-600">amabwiriza</a> mashya ya IremboGov harimo n'ayo <a href="#" className="text-blue-600">kurinda amakuru </a>bwite.</h1>
                        <h1 className="text-sm/[24px]">Usanzwe ufite konti? <a href="#" className="text-blue-600 hover:underline">Injira</a></h1>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Loginform;
