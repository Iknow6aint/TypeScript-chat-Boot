import Image from "next/image";
import { useCallback, useState } from "react";
import AuthForm from "./components/AuthForm";


type Variant = 'LOGIN' | 'REGISTER';
const Auth = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState<Variant>('LOGIN');

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);
    return (
        <div
            className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
      "
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    height="48"
                    width="48"
                    className="mx-auto w-auto"
                    src="/images/logo.png"
                    alt="Logo"
                />
                <h2
                    className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
                >
                    Sign in to your account
                </h2>
            </div>
            <AuthForm />
        </div>
    )
}

export default Auth;
