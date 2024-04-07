import './globals.css';
import { AppLogo } from '@/components/AppLogo/AppLogo';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div>
          <div>{children}</div>
        </div>
        <footer className="bg-workspace-footer">
          <AppLogo />
        </footer>
      </body>
    </html>
  );
}
