import Link from 'next/link';
import paths from '~/server/path';
import SavingsIcon from '@mui/icons-material/Savings';
import Hima from "../../../../../public/hima.png";
import Shinchan from "../../../../../public/kawaii_shinchan.png";
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

export default async function LoginPage() {
    return (
        <div className="bg-white m-0 p-0 min-h-screen text-center">
            {/* Header */}
            <header className="max-w-screen-2xl mx-auto border-b-2 border-solid border-gray-200 flex items-center h-[56px]">
                <div className='px-2 py-2 flex items-center mx-2'>
                    <Link
                        href={paths.default()}
                        className='cursor-pointer mr-4'
                    >
                        <SavingsIcon sx={{ fontSize: 32 }} className='text-zinc-700' />
                    </Link>
                    <h1 className="italic text-2xl font-[700] text-zinc-700 mr-8">
                        HAB
                    </h1>
                </div>
            </header>

            <div className="max-w-screen-xl lg:mx-auto md:mx-5 mx-0 my-0 flex flex-col items-center justify-center min-h-[calc(100vh-56px)]">
                <div className='flex items-center justify-center'>

                    <Image
                        src={Hima}
                        alt='Hima'
                        height={2000}
                        width={2000}
                        className='lg:w-[380px] sm:w-[250px] sm:inline-block hidden shrink-0'
                    />
                    <div className='border-none border-solid border-zinc-700 rounded-lg flex items-center justify-center max-w-[480px] lg:min-w-[480px] md:min-w-[400px] w-full'>
                        <div className='flex flex-col items-center w-full'>
                            <h3 className='text-xl font-[700] text-zinc-700'>
                                Login
                            </h3>
                            <div className='h-[1px] bg-gray-200 w-full my-5' />
                            <form className='flex flex-col items-center gap-2 w-full'>
                                {/* OAuth Service : Google, X, Apple */}
                                <div className='flex items-center justify-evenly w-full'>
                                    <label className='flex items-center flex-col gap-1'>
                                        <button className='hover:opacity-60 rounded-full bg-transparent sm:p-2.5 p-1.5 rounded-full border-2 border-solid border-gray-200'
                                            type="submit"
                                        >
                                            <FcGoogle size={32} className='' />
                                        </button>
                                        <span className='text-sm text-zinc-700'>Google</span>
                                    </label>
                                    <label className='flex items-center flex-col gap-1'>
                                        <button className='hover:opacity-60 rounded-full bg-transparent sm:p-2.5 p-1.5 rounded-full border-2 border-solid border-gray-200'
                                            type="submit"
                                        >
                                            <FaXTwitter size={32} className='' />
                                        </button>
                                        <span className='text-sm text-zinc-700'>X (Twitter)</span>
                                    </label>
                                    <label className='flex items-center flex-col gap-1'>
                                        <button className='hover:opacity-60 rounded-full bg-transparent sm:p-2.5 p-1.5 rounded-full border-2 border-solid border-gray-200'
                                            type="submit"
                                        >
                                            <FaApple size={32} className='' />
                                        </button>
                                        <span className='text-sm text-zinc-700'>Apple</span>
                                    </label>
                                </div>

                                <div className='flex items-center gap-5 w-80 my-2'>
                                    <div className='bg-gray-200 h-[1px] w-full' />
                                    <span className='text-zinc-700 text-base font-[500]'>or</span>
                                    <div className='bg-gray-200 h-[1px] w-full' />
                                </div>

                                <div className='flex flex-col gap-8 w-full'>
                                    <label className='flex flex-col items-start gap-2'>
                                        <span className='sm:text-base text-sm text-zinc-700'>Email</span>
                                        <input
                                            type="email"
                                            className='sm:text-lg text-base font-[300] border-[1px] border-zinc-700 border-solid w-full px-2 py-1 cursor-pointer sm:rounded-lg rounded-md outline-none'
                                            placeholder='email@example.com'
                                        />
                                    </label>
                                    <label className='flex flex-col items-start gap-2'>
                                        <span className='sm:text-base text-sm text-zinc-700'>Password</span>
                                        <input
                                            type="password"
                                            className='sm:text-lg text-base font-[300] border-[1px] border-zinc-700 border-solid w-full px-2 py-1 cursor-pointer sm:rounded-lg rounded-md outline-none'
                                            placeholder='Password...'
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className='w-full tracking-[1px] border-lg bg-sky-400 hover:bg-sky-200 sm:px-4 sm:py-3 px-2 py-1.5 rounded-md sm:text-lg text-base text-white font-[500]'
                                    >
                                        Login with Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Image
                        src={Shinchan}
                        alt='Hima'
                        height={2000}
                        width={2000}
                        className='lg:w-[380px] sm:w-[250px] sm:inline-block hidden shrink-0'
                    />
                </div>

                <div className='mt-10'>
                    <Link
                        href={paths.signinUrl()}
                        className='text-zinc-700 text-base font-[500] underline underline-offset-4 hover:text-teal-400'
                    >
                        Signin Page
                    </Link>
                </div>
            </div>
        </div>
    )
}