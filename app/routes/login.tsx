import { Link, Form, useActionData } from "@remix-run/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Login - Heartlink" },
    { name: "description", content: "Log in to your Heartlink account and find your perfect match." },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  
  const errors = {
    email: email ? null : "Email is required",
    password: password ? null : "Password is required",
  };
  
  const hasErrors = Object.values(errors).some(error => error !== null);
  
  if (hasErrors) {
    return { errors };
  }
  
  // In a real app, you would validate the user credentials here
  // For now, we'll just redirect to the dashboard
  return redirect("/dashboard");
}

export default function Login() {
  const actionData = useActionData<typeof action>();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Log in to your Heartlink account</p>
        </div>
        
        <Form method="post" className="space-y-6">
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
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
            />
            {actionData?.errors?.password && (
              <p className="text-red-500 text-sm mt-1">{actionData.errors.password}</p>
            )}
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Log In
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-purple-600 hover:text-purple-800 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
