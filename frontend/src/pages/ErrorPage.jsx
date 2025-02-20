import LinkButton from "../shared/LinkButton";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-700">
        Oops! The page you are looking for does not exist.
      </p>
      <LinkButton text="Go Back Home" to="/" className="mt-6" />
    </div>
  );
}

export default ErrorPage;
