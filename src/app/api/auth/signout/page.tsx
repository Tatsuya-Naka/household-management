import { redirect } from "next/navigation";
import { auth, signOut } from "~/server/auth";
import paths from "~/server/path";

export default async function SignOutPage() {
    const session = await auth();

    if (!session) {
        redirect(paths.default());
    }

    return (
        <div className="">
            <form
                action={async() => {
                    "use server";
                    await signOut();
                }}
            >
                <button
                    type="submit"
                    className="rounded-lg px-2 py-1 bg-green-400 text-white text-base"
                >
                    Signout
                </button>
            </form>
        </div>
    )
}