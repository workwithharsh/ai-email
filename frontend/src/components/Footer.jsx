function Footer() {
  return (
    <footer className="bg-white text-center py-6 shadow-inner mt-8">
      <div className="container mx-auto">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-red-500">workwithharsh</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
