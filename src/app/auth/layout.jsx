export const metadata = {
  title: "Auth | My App",
};

export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Authentication</h1>
        {children}
      </div>
    </div>
  );
}
