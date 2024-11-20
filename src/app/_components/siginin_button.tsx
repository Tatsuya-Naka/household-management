import { signIn } from "~/server/auth";

interface SigninbuttonProps {
    id: string;
    children: React.ReactNode;
}

export default async function SiginInButton({ id, children }: SigninbuttonProps) {

    return (
        <button type="submit"
            className="hover:bg-gray-100 w-full bg-transparent border-[1px] shadow-lg border-solid border-zinc-700 rounded-lg px-2 py-1.5 flex items-center"
            formAction={ async () => {
                "use server";
                await signIn(id);
            }}
        >
            {children}
        </button>
    )
}