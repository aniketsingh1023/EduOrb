import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import DashboardStats from "@/components/dashboard/DashboardStats"
import RecentCourses from "@/components/dashboard/RecentCourses"
import RecommendedCourses from "@/components/dashboard/RecommendedCourses"
import UpcomingEvents from "@/components/dashboard/UpcomingEvents"
import LearningProgress from "@/components/dashboard/LearningProgress"

export const metadata: Metadata = {
  title: "Dashboard | EduOrb",
  description: "Your learning dashboard",
}

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <DashboardStats />
          <RecentCourses />
          <RecommendedCourses />
        </div>
        <div className="space-y-6">
          <UpcomingEvents />
          <LearningProgress />
        </div>
      </div>
    </div>
  )
}
