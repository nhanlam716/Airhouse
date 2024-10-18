import { Spinner } from "flowbite-react";

const LoadingOverlay = () => {
  return (
    <div className="text-center">
      <Spinner aria-label="Default status example" />
    </div>
  );
};

export { LoadingOverlay };
