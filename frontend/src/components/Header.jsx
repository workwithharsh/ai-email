function Header() {
  return (
    <header className="py-4 px-3 shadow-md bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-red-500">AI</span>Email
        </div>

        {/* Title */}
        <div className="text-lg font-medium">
          <h1>Your AI-Powered Email Generator</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
