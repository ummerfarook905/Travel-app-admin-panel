// pages/login.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FaUserAlt, FaLock, FaSpinner } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/InputField';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { login,isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    rememberMe: Yup.boolean()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setLoginError('');
    
    try {
      await login(data.email, data.password, data.rememberMe);
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#00493E] to-[#006B56] px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm transition-all hover:shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome Back</h2>
        
        {loginError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            type="email"
            name="email"
            register={register}
            error={errors.email}
            icon={<FaUserAlt />}
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            register={register}
            error={errors.password}
            icon={<FaLock />}
            showPasswordToggle={true}
            onTogglePassword={() => setShowPassword((prev) => !prev)}
            showPassword={showPassword}
          />

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")}
              className="w-4 h-4 text-[#00493E] rounded focus:ring-[#00493E]"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-600 text-sm">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00493E] text-white py-3 rounded-lg font-medium hover:bg-[#006B56] 
                      disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;