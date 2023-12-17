import { useState } from 'react';
import './TryIt.style.css'
import { Check } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ITryitForm } from './TryIt.interface'

export const TryIt = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ITryitForm>();
    const onSub: SubmitHandler<ITryitForm> = data => console.log(data);

    return (
        <div>
            <form className="div-tryit flex justify-center absolute" onSubmit={handleSubmit(onSub)}>
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
                            {errors?.name && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{errors.name.message}</div>}
                        </div>
                        <input {...register('name', { required: 'required field', maxLength: { value: 20, message: 'max length 20' } })} className="border-2 border-stone-300 block py-3 pl-2 w-100"></input>
                    </div>
                    <div className="gap-4 mt-5">
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Work email:</label>
                            {errors?.email && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{errors.email.message}</div>}
                        </div>
                        <input {...register('email', {
                            required: 'required field',
                            maxLength: { value: 20, message: 'max length 20' },
                            pattern: {
                                message: 'not valid email',
                                value: /^\S+@\S+\.\S+$/
                            }
                        })} className="border-2 border-stone-300 block py-3 pl-2 w-100"></input>
                    </div>
                    <div className="gap-4 mt-5">
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Company name:</label>
                            {errors?.companyName && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{errors.companyName.message}</div>}
                        </div>
                        <input {...register('companyName', {
                            required: 'required field',
                            maxLength: { value: 20, message: 'max length 20' }
                        })} className="border-2 border-stone-300 block py-3 pl-2 w-100"></input>
                    </div>
                    <div className="gap-4 mt-5">
                        <div className="flex gap-3 justify-start">
                            <label {...register('domain', {
                                required: 'required field',
                                maxLength: { value: 20, message: 'max length 20' }
                            })} className="text-base font-bold">Domain name:</label>
                            {errors?.domain && <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{errors.domain.message}</div>}
                        </div>
                        <div className="flex justify-center">
                            <input {...register('domain', {
                                required: 'required field',
                                maxLength: { value: 20, message: 'max length 20' }
                            })} className="border-2 border-stone-300 block py-3 w-96 pl-2"></input>
                            <div className="bg-slate-300 py-3 px-1 text-qms font-bold border-2 border-stone-300">.qms.cloud</div>
                        </div>
                        <div className="flex justify-start mt-5">
                            {errors.isAgree && <p className="text-red-600 text-lg absolute end-0 font-bold text-qms">*</p>}
                            <input {...register('isAgree', { required: true, value: false })} type="checkbox" value="I agree to Qameta Software Terms of use and Privacy Policy." className="w-5 h-5" />
                            <p className="text-qms font-medium ml-1">I agree to QMS Software Terms of use and Privacy Policy.</p>
                        </div>
                        <button type="submit" className="rounded-3xl left-1/2 mt-8 py-3 px-40 ml-2 text-qms font-bold bg-stone-800 text-white">Start my free trial</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default TryIt;