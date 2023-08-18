import { UserButton } from "@clerk/nextjs";

export default function DashboardHomepage() {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}