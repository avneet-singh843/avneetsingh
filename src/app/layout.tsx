import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Avneet Singh",
  description:
    "Hire experienced Full Stack Developer (React, Node.js, TypeScript, MongoDB, Docker, AWS). Open for freelance projects & jobs. Expert in MERN Stack, UI/UX, cloud computing, & more. Explore my portfolio!",
  keywords:
    "Full Stack Developer New Delhi India, React Developer, Node.js Developer, TypeScript Developer, MongoDB Developer, Docker Expert, AWS, Open Source, Collaboration, Web Developer, Software Engineer, MERN Stack, JavaScript Developer, UI/UX, Serverless Architectures, Cloud Computing, DevOps, Software Development, Tech Blogger, Code Mentor, API Integration, PWA, Responsive Web Design, Scalable Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="Avneet Singh | Full Stack Developer in New Delhi, India | Expert in React, Node.js, TypeScript, MongoDB, Docker, AWS. Open for freelance projects & jobs. Explore my portfolio!"
      />
      <meta
        name="keywords"
        content="Full Stack Developer New Delhi India, React Developer, Node.js Developer, TypeScript Developer, MongoDB Developer, Docker Expert, AWS, Open Source, Collaboration, Web Developer, Software Engineer, MERN Stack, JavaScript Developer, UI/UX, Serverless Architectures, Cloud Computing, DevOps, Software Development, Tech Blogger, Code Mentor, API Integration, PWA, Responsive Web Design, Scalable Applications"
      />

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
