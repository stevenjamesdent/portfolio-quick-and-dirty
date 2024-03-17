import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/styles/core/index.scss";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const font = Poppins({
	subsets: ["latin"],
	variable: '--font-primary',
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Steven Dent - UI Engineer",
  description: "UI Engineer with 10+ years experience, available for hire",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<div className="page min-h-screen flex flex-col">
					<Navigation
						items={[
							{ href: 'https://linkedin.com/in/stevenjdent', target: '_blank', title: 'Connect on LinkedIn', active: false },
							{ href: '/CV_Steven_James_Dent_UI_Engineer.pdf', title: 'Download my CV', active: false }
						]}
					/>

					<div className="flex-grow flex flex-col">{children}</div>

					<Footer />
				</div>
			</body>
		</html>
	);
}