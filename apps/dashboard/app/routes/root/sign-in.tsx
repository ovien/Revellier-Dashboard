import { Link, redirect } from "react-router"
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
    try {
        const user = await account.get();
        if (user.$id) return redirect('/');
    } catch (error) {
        console.log(error);
    }
}

const SignIn = () => {
    return (
        <main className="auth min-h-screen flex items-center justify-center bg-gray-50">
            <section className="w-full max-w-md glassmorphism rounded-lg shadow-lg min-h-[400px]">
                <div className="sign-in-card w-full h-full bg-white rounded-lg flex flex-col items-center justify-center px-6 py-12">
                    <header className="header text-center mb-8">
                        <Link to="/">
                            <h1 className="text-[50px] font-semibold italic text-dark-100">revellier</h1>
                        </Link>
                    </header>
                    <article className="text-center">
                        <h2 className="text-2xl font-semibold text-dark-100 mb-4">Where are we going today?</h2>
                        <p className="text-lg text-center text-gray-600 mb-6 leading-7">Wanderlust is one google sign-in away</p>
                        <ButtonComponent 
                            type="button" 
                            className="button-class h-11 w-full mb-4" 
                            onClick={loginWithGoogle}
                        >
                            <img src="/assets/icons/google.svg" alt="google" className="size-6" />
                            <span className="ml-2">Sign in with Google</span>
                        </ButtonComponent>
                        <span className="text-sm text-center text-gray-600 leading-7">
                            By signing in, you agree to our <Link to="/terms" className="text-blue-500">Terms of Service</Link> and <Link to="/privacy" className="text-blue-500">Privacy Policy</Link>
                        </span>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default SignIn