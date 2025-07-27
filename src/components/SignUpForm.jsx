export default function Signup() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* === Signup Section === */}
      <section className="min-h-screen w-full bg-gradient-to-br from-[#dff1ff] via-[#e8ddff] to-[#f8e1e7] flex items-center justify-center pt-[64px]">
        <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 w-full max-w-md mx-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-700 mt-5">
            Already have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}