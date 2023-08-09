import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';

import ModalProvider from '@/components/ModalProvider';
import ToastProvider from '@/components/ToastProvider';
import ChatSupportProvider from '@/components/ChatSupportProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'D-prompt AI',
  description:
    'D-prompt-AI is a web based fullstack AI generation saas app platform that using artificial intelligence models to generate contents using prompt powered by modern powerful technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <ChatSupportProvider />
        <body className={inter.className}>
          <ModalProvider />
          {children}
          <ToastProvider />
        </body>
      </html>
    </ClerkProvider>
  );
}
