import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth"
import paths from "~/server/path";

export default async function Home() {
    const session = await auth();

    if (!session) {
        redirect(paths.default());
    }

    return (
        <div>
            Home Page
            <Link
                href={paths.signOutUrl()}
                className="text-base ml-2 hover:underline underline-offset-4 hover:text-teal-400 text-black"
            >
                Signout
            </Link>

            {session.user.id}
        </div>
    )
}