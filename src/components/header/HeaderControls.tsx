import './HeaderControls.style.css'

export const HeaderControls = () => {
    return (
        <header>
            <nav className="border-b-2 border-stone-600 h-16 control-header flex justify-between">
                <p className="text-4xl items-center p-3 control-header font-bold cursor-pointer">QMS</p>
                <div className="text-gray-500 flex justify-center items-center cursor-pointer controls">
                    <div className="hover:text-stone-900">
                        <a href="/features">Features</a>
                    </div>
                    <div className="hover:text-stone-900">
                        <a href="/team">Team</a>
                    </div>
                    <div className="hover:text-stone-900">
                        <a href="/pricing">Pricing</a>
                    </div>
                    <div className="hover:text-stone-900">
                        <a href="/company">Company</a>
                    </div>
                </div>
                <button className="rounded-3xl bg-stone-800 h-10 px-10 right-2 text-center text-white text-lg m-3 mx-8 font-bold">
                    <a href="/free-trial" className="block py-1">Try QMS</a>
                </button>
            </nav>
        </header>

    );
}

export default HeaderControls;