"use client";

import { MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "text-green-500/10",
    href: "/conversation"
  }
]

export default function DashboardHomepage() {
  return (
    <div>
      <div className = "mb-8 space-y-4">
        <h2 className = "text-2xl md: text-4xl font-bold text-center">
          Play with AI
        </h2>
        <p className = "text-muted-foreground font-light text-sm md: text-lg text-center">
          Explore the various experiences provided to you in this playground
        </p>
        </div>
        <div className = "px-4 md: px-20 lg: px-32 space-y-4">
        {tools.map((tool) => (
          <Card key = {tool.href}
          className = "p-4 border-black/5"
          >

          </Card>
        ))}
        </div>
    </div>
  )
}