import { useState } from 'react';
import './TryIt.style.css'
import { Check } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const TryIt = () => {
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError] = useState('not valid email');
    const [nameDirty, setNameDirty] = useState(false);
    const [domainDirty, setDomainDirty] = useState(false);
    const [companyDirty, setCompanyDirty] = useState(false);
    const [fieldError] = useState('required field');
    const [isChecked, setIsChecked] = useState(false);

    // const methods = useForm();
    // const onSubmit = methods.handleSubmit(data => {
    //     console.log(data)
    // })

    const emailHandler = (e: any) => {
        setEmail(e.target.value);
        const re = /^\S+@\S+\.\S+$/;
        (!re.test(String(e.target.value).toLowerCase())) ? setEmailDirty(true) : setEmailDirty(false);
    }

    return (
        <div>
            <form className="div-tryit flex justify-center absolute">
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
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Your name</label>
                            {(nameDirty && fieldError) && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{fieldError}</div>}
                        </div>
                        <input onBlur={e => setNameDirty(true)} className="border-2 border-stone-300 block py-2 pl-1 w-100"></input>
                    </div>
                    <div className="gap-4 mt-3">
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Work email:</label>
                            {(emailDirty && emailError) && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{emailError}</div>}
                        </div>
                        <input onChange={e => emailHandler(e)} className="border-2 border-stone-300 block py-2 pl-1 w-100" value={email}></input>
                    </div>
                    <div className="gap-4 mt-3">
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Company name:</label>
                            {(companyDirty) && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{fieldError}</div>}
                        </div>
                        <input onBlur={e => setCompanyDirty(true)} className="border-2 border-stone-300 block py-2 pl-1 w-100"></input>
                    </div>
                    <div className="gap-4 mt-3">
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Domain name:</label>
                            {(domainDirty) && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{fieldError}</div>}
                        </div>
                        <div className="flex justify-center">
                            <input onBlur={e => setDomainDirty(true)} className="border-2 border-stone-300 block py-2 w-96 pl-1"></input>
                            <div className="bg-slate-300 py-3 px-1 text-qms font-bold border-2 border-stone-300">.qms.cloud</div>
                        </div>
                        <div className="flex justify-start mt-3">
                            <input type="checkbox" value="I agree to Qameta Software Terms of use and Privacy Policy." className="w-5 h-5" />
                            <p className="text-qms font-medium ml-1">I agree to QMS Software Terms of use and Privacy Policy.</p>
                        </div>
                        <button type="submit" className="rounded-3xl left-1/2 mt-3 py-3 px-40 ml-2 text-qms font-bold bg-stone-800 text-white">Start my free trial</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default TryIt;