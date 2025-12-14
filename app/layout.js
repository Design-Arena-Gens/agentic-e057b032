export const metadata = {
  title: 'Futuristic Profile',
  description: 'Personal profile with a futuristic vibe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
