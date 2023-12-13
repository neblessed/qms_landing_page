import './HeaderControls.style.css'

export const HeaderControls = () => {
    return (
        <header>
            <nav className="border-b-2 border-stone-600 h-16 control-header flex justify-center">
                <p className="flex absolute text-3xl items-center start-0 p-3 control-header">QMS</p>
                <div className="flex items-center relative gap-11 justify-center text-xl text-gray-500 font-medium">
                    <div>Features</div>
                    <div>Customers</div>
                    <div>Buisness</div>
                    <div>Pricing</div>
                    <div>Company</div>
                </div>
            </nav>
        </header>

    );
}

export default HeaderControls;