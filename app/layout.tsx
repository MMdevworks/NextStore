import type { Metadata } from "next";
//font:
import { Inter } from "next/font/google";
import '@/assets/styles/globals.css';
import { APP_DESC, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({subsets: ['latin']});

//Use metadata set Ex 'Home | Nextstore' or default
export const metadata: Metadata = {
  title: {
    template: `%s | NextStore`,
    default: APP_NAME,
  },
  description: APP_DESC,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
