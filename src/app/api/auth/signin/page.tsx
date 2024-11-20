import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';
import paths from '~/server/path';
import SavingsIcon from '@mui/icons-material/Savings';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import SiginInButton from '~/app/_components/siginin_button';

export default async function SignInPage() {
    const getIcon = (id: string) => {
        switch (id) {
            case "google":
                return <FcGoogle size={32} className='mr-2' />
            case "twitter":
                return <FaXTwitter size={32} className='mr-2' />
            case "apple":
                return <FaApple size={32} className='mr-2' />
            default:
                return null;
        }
    };

    return (
        <div className="bg-white m-0 p-0 min-h-screen">
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
            <div className={`w-full grid md:grid-cols-[auto_680px] bg-shinchan bg-cover bg-no-repeat h-[calc(100vh-56px)]`}>
                <div className="float-left md:inline-block hidden">
                    {/* Image or git of this app */}
                </div>
                <div className="flex flex-col items-center justify-center  bg-white shadow-xl rounded-lg sm:mx-auto sm:my-auto sm:min-w-[480px] mx-0 py-5 px-5">
                    <h3 className="text-xl font-[700] text-zinc-700 mb-2">
                        Signin
                    </h3>
                    <div className='h-[1px] bg-gray-200 w-full my-2' />
                    <div className="w-full">
                        <form className="px-2 py-3 flex-col items-center gap-2">
                            <ul className="">
                                <li className="mb-4">
                                    <Link href={paths.signinWithEmail()} className="hover:bg-gray-100 w-full bg-transparent border-[1px] shadow-lg border-solid border-zinc-700 rounded-lg px-2 py-1.5 flex items-center">
                                        <EmailOutlinedIcon sx={{ fontSize: 32 }} className='text-zinc-700 mr-2' />
                                        <span className='text-center mx-auto'>Signin with Email</span>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <SiginInButton id="google">
                                        {getIcon("google")}
                                        <span className='text-center mx-auto'>Signin with Google</span>
                                    </SiginInButton>
                                </li>
                                <li className="mb-4">
                                    <SiginInButton id="twitter">
                                        {getIcon("twitter")}
                                        <span className='text-center mx-auto'>Signin with X (Twitter)</span>
                                    </SiginInButton>
                                </li>
                                <li className="">
                                    <SiginInButton id="apple">
                                        {getIcon("apple")}
                                        <span className='text-center mx-auto'>Signin with Apple</span>
                                    </SiginInButton>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className='h-[1px] bg-gray-200 w-full my-2' />
                    <div className='my-10'>
                        <Link
                            href={paths.loginUrl()}
                            className='text-zinc-700 text-base font-[500] underline underline-offset-4 hover:text-teal-400'
                        >
                            Login Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}