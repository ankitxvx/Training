

export default function Header() {
    return (
        <>
            <div className="navbar flex justify-between items-center p-4">
                <div className="flex  justify-center align-center items-center md:order-2">
                    <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
                        <div className="line h-0.5 w-6 my-1 bg-black "></div>
                        <div className="line h-0.5 w-6 my-1 bg-black "></div>
                        <div className="line h-0.5 w-6 my-1 bg-black "></div>
                        <div className="line h-0.5 w-6 my-1 bg-black "></div>
                    </div>
                    <div className="search md:hidden w-5 mr-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </div>
                </div>
                <div className="logo text-center flex  md:order-1">
                    <div className="p-4 w-[60%] md:w-[10vw]  "><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" /></div>
                    <div className="feature w-fit md:w-auto mt-4 md:bg-white md:translate-x-0    bg-gray-300 md:flex md:static absolute inset-0 md:mx-4 md:space-x-4 -translate-x-96">
                        <div className="fitem">Microsoft 365</div>
                        <div className="fitem">Teams</div>
                        <div className="fitem">Copilot</div>
                        <div className="fitem">Windows</div>
                        <div className="fitem">SurfaceXbox</div>
                        <div className="fitem">Support</div>
                    </div>
                </div>

                <div className="cart md:order-3 flex space-x-4">
                    <div>
                        All Microsoft
                    </div>
                    <div className="search hidden md:block">  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}
