"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919898989533?text=Hi, I'm interested in joining Assure Fitness Club."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
