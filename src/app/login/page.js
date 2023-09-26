"use client"
import { useRouter } from 'next/navigation';

const Login = () => {

    const router = useRouter();

    return (
        <>
            <div>Login</div>
            <br />
            <button onClick={() => router.push("/")}> Go to Home</button>
        </>
    )
}

export default Login;