export default function Footer() {
  return (
    <footer className="bg-[#295943] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h2 className="text-lg font-semibold mb-4">Social Links</h2>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-white p-1 rounded-full cursor-pointer">
            <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
          </div>
          <div className="bg-white p-1 rounded-full cursor-pointer">
            <img src="/facebook.png" alt="Facebook" className="w-10 h-10" />
          </div>
          <div className="bg-white p-1 rounded-full cursor-pointer">
            <img src="/twitter.png" alt="Twitter" className="w-10 h-10" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
           <p className="cursor-pointer">Privacy and Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
            <p className="cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}