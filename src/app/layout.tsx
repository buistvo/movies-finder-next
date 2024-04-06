import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="bg-workspace">{children}</div>
      </body>
    </html>
  );
}
