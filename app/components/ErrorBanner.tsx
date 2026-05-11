
interface ErrorBannerProps {
  error?: string;
}

const ErrorBanner = ({ error }: Readonly<ErrorBannerProps>) => {
  return (
    <div className="bg-red-500 text-white p-2">
      <p>{error}</p>
    </div>
  );
};

export default ErrorBanner;