import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Super duper",
    description: "Super duper app",
};

interface Props {
    children: React.ReactNode;
}

const RootLayout: React.FC<Props> = (props) => {
    return (
        <html lang="en">
            <body className={inter.className}>{props.children}</body>
        </html>
    );
};

export default RootLayout;
