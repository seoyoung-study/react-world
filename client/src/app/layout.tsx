import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'React World',
  description: 'Generated by seoyoung',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}