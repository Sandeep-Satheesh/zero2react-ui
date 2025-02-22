import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useForm } from "react-hook-form";
import './login.css';
import { useTheme } from '../../context/themecontext';

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const getGoogleSignInTheme = () => {
        return useTheme().theme === 'dark' ? 'filled_black' : 'outline';
    }


    return (
        <div className="d-flex h-100 w-100 justify-content-center align-items-center flex-column">
            <h2 className="text-center mb-5">Sign in to Your Investments Dashboard</h2>
            <div className="card p-4 shadow-lg" style={{ width: "22rem" }}>
                <h2 className="text-center mb-4">Login</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control login-form-control"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Enter your email"
                        />
                        {errors.email && <div className="text-danger">Invalid Email!</div>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control login-form-control"
                            {...register("password", { required: "Password is required" })}
                            placeholder="Enter your password"
                        />
                        {errors.password && <div className="text-danger">Invalid Password!</div>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="login-form-control login-button w-100">
                        Login
                    </button>
                </form>
                <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_SIGNIN_CLIENT_ID}>
                        <h5 className="text-7xl mt-2 mb-2 font-weight-bold text-center">Or</h5>
                        <div className='google-login-button'>
                            <GoogleLogin
                                theme={getGoogleSignInTheme()} // Dark mode button
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                                useOneTap
                            />
                        </div>
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
}

export default Login;