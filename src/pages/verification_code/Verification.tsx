import { useContext } from "react";
import "../../index.css"
import { RefreshCw } from 'lucide-react';

export const VerificationPage = () => {
    return (
        <div>
            <div className="flex justify-center mt-64 gap-2">
                <div className="flex justify-center gap-3 absolute top-52">
                    <p className="text-qms absolute mt-28 text-stone-400">We have sent a verification code to your email</p>
                    <p className="text-qms text-xl font-bold"> Please write the email code below</p>
                    <RefreshCw className="animate-spin" />
                </div>
                <input className="rounded-3xl border-2 border-stone-400 py-3 w-40 pl-3 text-qms text-center font-bold"></input>
                <button className="btn-qms px-10 py-1">
                    <a href="/free-trial">Verify</a>
                </button>
            </div>
        </div>
    );
}

export default VerificationPage;