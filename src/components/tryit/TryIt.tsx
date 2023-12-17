import { useState } from 'react';
import './TryIt.style.css'
import { Check } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ITryitForm } from './TryIt.interface'

export const TryIt = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ITryitForm>();
    const onSub: SubmitHandler<ITryitForm> = data => {
        console.log(data);
    };

    const InputErrorComponent = ({ message }: any) => {
        return (
            <div className="text-red-600 text-sm absolute end-0 font-bold text-qms">{message}</div>
        );
    }

    return (
        <div>
            <form className="div-tryit flex justify-center absolute" onSubmit={handleSubmit(onSub)}>
                <div className="text-qms pt-10 align-text-top mr-20">
                    <p className="text-4xl font-bold">Try out QMS free for 14 days to speed up your testing</p>
                    <br />
                    <p className="text-xl font-medium">Get started with a fully functional QMS today — no obligation, no payment, and no credit card required.</p>
                    <br />
                    <div className="text-qms text-xl">
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
                            {errors?.name && <InputErrorComponent message={errors.name.message} />}
                        </div>
                        <input {...register('name', { required: 'required field', maxLength: { value: 20, message: 'max length 20' } })} className="border-2 border-stone-300 block py-3 pl-2 w-100"></input>
                    </div>
                    <div className="gap-4 mt-5">
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Work email:</label>
                            {errors?.email && <InputErrorComponent message={errors.email.message} />}
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
                            {errors?.companyName && <InputErrorComponent message={errors.companyName.message} />}
                        </div>
                        <input {...register('companyName', {
                            required: 'required field',
                            maxLength: { value: 20, message: 'max length 20' }
                        })} className="border-2 border-stone-300 block py-3 pl-2 w-100"></input>
                    </div>
                    <div className="gap-4 mt-5">
                        <div className="flex gap-3 justify-start">
                            <label className="text-base font-bold">Domain name:</label>
                            {errors?.domain && <InputErrorComponent message={errors.domain.message} />}
                        </div>
                        <div className="flex justify-center border-stone-300 border-2 w-100">
                            <input {...register('domain', {
                                required: 'required field',
                                maxLength: { value: 20, message: 'max length 20' }
                            })} className="block py-3 pl-2"></input>
                            <div className="bg-stone-100 py-3 font-bold text-stone-500 w-30 text-center absolute right-0 border-r-2 border-stone-300 text-qms text-qms">.qms.cloud</div>
                        </div>
                        <div className="flex justify-start mt-5 gap-3 text-qms">
                            <input {...register('isAgree', { required: '*', value: false })} type="checkbox" className="w-5 h-5" />
                            {errors.isAgree && <InputErrorComponent message={errors.isAgree.message} />}
                            <p className="font-medium">I agree to QMS Software Terms of use and Privacy Policy.</p>
                        </div>
                        <button type="submit" className="rounded-3xl left-1/2 mt-8 py-3 px-40 ml-2 text-qms font-bold bg-stone-800 text-white">Start my free trial</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default TryIt;