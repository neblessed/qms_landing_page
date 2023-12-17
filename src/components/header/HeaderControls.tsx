import './HeaderControls.style.css'

export const HeaderControls = () => {
    return (
        <header>
            <nav className="border-b-2 border-stone-600 h-16 control-header flex justify-center">
                <p className="flex absolute text-4xl items-center start-0 p-3 control-header font-bold">QMS</p>
                <div className="flex items-center relative gap-11 justify-center text-xl text-gray-500 font-medium">
                    <div className="hover:text-stone-900 cursor-pointer">Features</div>
                    <div className="hover:text-stone-900 cursor-pointer">Customers</div>
                    <div className="hover:text-stone-900 cursor-pointer">Buisness</div>
                    <div className="hover:text-stone-900 cursor-pointer">Pricing</div>
                    <div className="hover:text-stone-900 cursor-pointer">Company</div>
                </div>
                <button className="rounded-3xl bg-stone-800 h-10 px-10 right-2 text-center absolute text-white text-lg m-3 mx-8 font-bold">
                    <a>Try QMS</a>
                </button>
            </nav>
        </header>

    );
}

export default HeaderControls;