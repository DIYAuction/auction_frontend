import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@radix-ui/themes/styles.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Theme } from "@radix-ui/themes";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Providers>
            <Navbar />
            <main className="min-h-[calc(100vh-190px)]">{children}</main>
          </Providers>
        </Theme>
      </body>
    </html>
  );
}

export default RootLayout;
