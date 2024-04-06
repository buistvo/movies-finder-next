import { MoviesService } from '@/services/movies.service';
import './globals.css';
import { MovieTile } from '@/components/MovieTile/MovieTile';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { AppLogo } from '@/components/AppLogo/AppLogo';
import { useRouter, useSearchParams } from 'next/navigation';

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
