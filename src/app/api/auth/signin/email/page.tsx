export default async function SiginInEmailPage() {
    return (
        <div className="bg-white m-0 p-0 min-h-screen">
            <div className={`w-full bg-shinchan bg-cover bg-no-repeat min-h-screen flex items-center justify-center relative`}>
                <div className='max-w-[680px] bg-white sm:rounded-xl shadow-xl sm:mx-auto mx-0 sm:relative absolute top-0 right-0 left-0 h-full bg-opacity-80'>
                    <div className='sm:px-10 sm:py-8 px-3 py-2 flex flex-col items-center justify-center h-full w-full'>
                        <div className='flex items-center justify-between w-full sm:p-0 px-2 py-3'>
                            <h3 className='sm:text-xl text-start sm:mx-0 mx-auto text-lg font-[700] text-zinc-700'>
                                Register - User Information
                            </h3>
                        </div>

                        <form className='w-full mx-0 flex flex-col sm:justify-center gap-4 h-full'>
                            <label className='flex flex-col gap-2 '>
                                <span className='text-base font-[500] text-zinc-700'>
                                    Email
                                </span>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder='email@example.com'
                                    className='w-full rounded-lg border-2 border-solid border-gray-200 text-base px-3 py-2 outline-none'
                                />
                            </label>
                            <label className='flex flex-col gap-2 '>
                                <span className='text-base font-[500] text-zinc-700'>
                                    Password
                                </span>
                                <input
                                    name='password'
                                    type="password"
                                    placeholder=''
                                    className='w-full rounded-lg border-2 border-solid border-gray-200 text-base px-3 py-2 outline-none'
                                />
                            </label>
                            <label className='flex flex-col gap-2 '>
                                <span className='text-base font-[500] text-zinc-700'>
                                    Password - Double Check
                                </span>
                                <input
                                    name='password'
                                    type="password"
                                    placeholder=''
                                    className='w-full rounded-lg border-2 border-solid border-gray-200 text-base px-3 py-2 outline-none'
                                />
                            </label>
                            <label className='flex flex-col gap-2 '>
                                <span className='text-base font-[500] text-zinc-700'>
                                    User name (Optional)
                                </span>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder='Hima'
                                    className='w-full rounded-lg border-2 border-solid border-gray-200 text-base px-3 py-2 outline-none'
                                />
                            </label>
                            <div className='flex sm:flex-row flex-col items-center justify-around w-full sm:gap-2 gap-4'>
                                <label className='flex flex-col gap-2 w-full'>
                                    <span className='text-base font-[500] text-zinc-700'>
                                        Preferred Currency (Optional)
                                    </span>
                                    <input
                                        name='currency'
                                        type="text"
                                        placeholder='AUD'
                                        className='w-full rounded-lg border-2 border-solid border-gray-200 text-base px-3 py-2 outline-none'
                                    />
                                </label>
                                <label className='flex flex-col gap-2 w-full'>
                                    <span className='text-base font-[500] text-zinc-700'>
                                        Where you are (Optional)
                                    </span>
                                    <input
                                        name='location'
                                        type="text"
                                        placeholder='Australia'
                                        className='w-full rounded-lg border-2 border-solid border-gray-200 text-base px-3 py-2 outline-none'
                                    />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className='my-5 w-full hover:opacity-60 rounded-lg bg-gradient-to-r from-teal-400 to-green-500 px-5 py-2 text-white font-[700]'
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}