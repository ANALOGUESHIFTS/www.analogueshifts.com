'use client'
import Group from '@/public/images/login/group.png'
import Avatar from '@/public/images/login/avatar.png'
import Image from 'next/image'
import ApplicationLogo from '@/components/application/application-logo'
import { useState } from 'react'
import Link from 'next/link'
import LoadingTwo from '@/components/ui/loading-spinner'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import FormInput from '@/components/application/form-input'

export default function ForgotPassword() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/forgot-password'

    // Handle Form Submit
    function submit(e) {
        e.preventDefault()
        const axios = require('axios')
        let data = JSON.stringify({
            email: email,
        })

        let config = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }

        setLoading(true)

        // Send a new Verification Code to user, and navigate to the reset password page
        axios
            .request(config)
            .then(response => {
                setLoading(false)
                Cookies.set('rest-password-email', email)
                router.push('/reset-password')
            })
            .catch(error => {
                setLoading(false)
                toast.error(
                    'An Error Occured, Please try again later',
                    toastConfig,
                )
            })
    }

    return (
        <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
            {loading && <LoadingTwo />}
            <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
                <div className="lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center">
                    <Image src={Group} alt="" className="absolute" />
                    <Image src={Avatar} alt="" />
                </div>
                <div className="lg:w-[450px] md:w-[350px] flex flex-col">
                    <ApplicationLogo />
                    <form
                        onSubmit={submit}
                        method="post"
                        className="pt-11 w-full flex flex-col">
                        <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                            Forgot your Password?
                        </p>
                        <p className="font-bold text-3xl text-[#292929] pb-5">
                            Enter your email address
                        </p>
                        <FormInput
                            icon="fa-solid fa-envelope"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            label="Email"
                            placeholder="Enter Email"
                            value={email}
                        />

                        <button
                            type="submit"
                            className="w-full bg-tremor-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-tremor-background-lightYellow/80 duration-300 h-12 rounded-2xl ">
                            Submit
                        </button>

                        <div className="w-full pt-2 flex justify-center items-center gap-1">
                            <p className="font-normal text-sm text-black/90">
                                Don't have an account?
                            </p>
                            <Link
                                href="/register"
                                className="font-normal text-sm text-tremor-background-darkYellow">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}