import './TryIt.style.css'
import { Check } from 'lucide-react'

export const TryIt = () => {
    return (
        <div className="mt-10 border-2 items-center justify-center div-tryit flex gap-16 p-10 align-middle">
            <div className="text-qms pt-10 align-text-top">
                <p className="text-3xl font-bold">Try out QMS free for 14 days to speed up your testing</p>
                <br />
                <p className="text-lg font-medium">Get started with a fully functional QMS today — no obligation, no payment, and no credit card required.</p>
                <br />
                <div className="text-qms">
                    <div className="flex justify-start gap-2 ml-2">
                        <Check className="text-green-600" />
                        <p>Seamless, no-code integration into your favorite CI/CD</p>
                    </div>
                    <div className="flex justify-start gap-2 ml-2">
                        <Check className="text-green-600" />
                        <p>Test assertions automatic audit</p>
                    </div>
                    <div className="flex justify-start gap-2 ml-2 ">
                        <Check className="text-green-600" />
                        <p>Streamlined results capturing and analysis</p>
                    </div>
                </div>

            </div>

            <div className="text-qms pt-10">
                <div className="gap-4">
                    <label className="text-sm font-bold">Your name</label>
                    <input className="border-2 border-stone-300 block py-2 px-32"></input>
                </div>
                <div className="gap-4">
                    <label className="text-sm font-bold">Work email:</label>
                    <input className="border-2 border-stone-300 block py-2 px-32"></input>
                </div>
                <div className="gap-4">
                    <label className="text-sm font-bold">Company name:</label>
                    <input className="border-2 border-stone-300 block py-2 px-32"></input>
                </div>
                <div className="gap-4">
                    <label className="text-sm font-bold">Domain name:</label>
                    <div className="flex justify-center">
                        <input className="border-2 border-stone-300 block py-2 px-20"></input>
                        <div className="bg-slate-300 py-3 px-1 text-qms font-bold border-2 border-stone-300">.qms.cloud</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TryIt;