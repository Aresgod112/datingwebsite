import { useState } from "react";
import { Link, Form, useActionData } from "@remix-run/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign Up - Heartlink" },
    { name: "description", content: "Create your Heartlink account and find your perfect match." },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const name = formData.get("name");
  const gender = formData.get("gender");
  const interestedIn = formData.get("interestedIn");
  
  const errors = {
    email: email ? null : "Email is required",
    password: password ? null : "Password is required",
    confirmPassword: confirmPassword === password ? null : "Passwords must match",
    name: name ? null : "Name is required",
    gender: gender ? null : "Gender is required",
    interestedIn: interestedIn ? null : "Please select who you're interested in",
  };
  
  const hasErrors = Object.values(errors).some(error => error !== null);
  
  if (hasErrors) {
    return { errors };
  }
  
  // In a real app, you would create the user in the database here
  // For now, we'll just redirect to the login page
  return { success: true };
}

export default function SignUp() {
  const actionData = useActionData<typeof action>();
  const [step, setStep] = useState(1);
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-600 mt-2">Join Heartlink and find your perfect match</p>
        </div>
        
        {actionData?.success ? (
          <div className="text-center">
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
              Account created successfully!
            </div>
            <Link 
              to="/login" 
              className="block w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Continue to Login
            </Link>
          </div>
        ) : (
          <Form method="post" className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="your@email.com"
                  />
                  {actionData?.errors?.email && (
                    <p className="text-red-500 text-sm mt-1">{actionData.errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Create a secure password"
                  />
                  {actionData?.errors?.password && (
                    <p className="text-red-500 text-sm mt-1">{actionData.errors.password}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Confirm your password"
                  />
                  {actionData?.errors?.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{actionData.errors.confirmPassword}</p>
                  )}
                </div>
                
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition"
                >
                  Next
                </button>
              </>
            )}
            
            {step === 2 && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your full name"
                  />
                  {actionData?.errors?.name && (
                    <p className="text-red-500 text-sm mt-1">{actionData.errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    I am a
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Man</option>
                    <option value="female">Woman</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="other">Other</option>
                  </select>
                  {actionData?.errors?.gender && (
                    <p className="text-red-500 text-sm mt-1">{actionData.errors.gender}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">
                    I am interested in
                  </label>
                  <select
                    id="interestedIn"
                    name="interestedIn"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select who you're interested in</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="everyone">Everyone</option>
                  </select>
                  {actionData?.errors?.interestedIn && (
                    <p className="text-red-500 text-sm mt-1">{actionData.errors.interestedIn}</p>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-1/2 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition"
                  >
                    Create Account
                  </button>
                </div>
              </>
            )}
            
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-600 hover:text-purple-800 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}
