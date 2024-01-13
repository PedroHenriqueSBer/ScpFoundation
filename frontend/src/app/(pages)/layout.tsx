import { Header } from "../components/navHeader"
import { Auth } from "./auth"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Auth />
      <Header />
      {children}
    </>

  )
}
