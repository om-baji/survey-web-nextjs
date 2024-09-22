export default function ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          
        >
          <div className="flex justify-center items-center p-12">
          <h3 className="scroll-m-20  text-4xl font-semibold tracking-tight">
              Survey Website
            </h3>
          </div>
          {children}
        </body>
      </html>
    );
  }