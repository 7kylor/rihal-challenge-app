import Navbar from "@/components/navbar/navbar";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-between p-4 mx-auto my-auto w-full">
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full h-full mt-16 my-10">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-md text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <p className="text-sm text-muted-foreground italic">
            This page an example of a 404 page
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
