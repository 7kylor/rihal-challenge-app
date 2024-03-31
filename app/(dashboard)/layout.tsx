import Navbar from "@/components/navbar/navbar";

export default async function SetupLayouts({
  children: children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-start justify-between p-4 mx-auto my-auto w-full">
        <Navbar />
        {children}
      </div>
    </>
  );
}
