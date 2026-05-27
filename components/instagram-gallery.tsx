"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Instagram, ExternalLink } from "lucide-react"

export function InstagramGallery() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.async = true
    script.src = "//www.instagram.com/embed.js"
    script.onload = () => {
      setIsLoading(false)
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="instagram-gallery" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Follow Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            <span className="text-primary">Instagram</span> Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Check out our latest workout photos, member transformations, and gym updates
          </p>
        </motion.div>

        {/* Instagram Feed Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">@assurefitness_club</h3>
                <p className="text-muted-foreground">Daily workout videos, transformations & more</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/assurefitness_club"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
            >
              Follow Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Instagram Embeds Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Note: Replace these blockquote data-instgrm-permalink values with actual post URLs from the Instagram profile */}
          <div className="rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/assurefitness_club/"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: 1,
                maxWidth: 540,
                minWidth: 326,
                padding: 0,
                width: "100%",
              }}
            >
              <div style={{ padding: 16 }}>
                <a
                  href="https://www.instagram.com/assurefitness_club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: 0,
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <div></div>
                </a>
              </div>
            </blockquote>
          </div>

          {/* Placeholder Cards with Call to Action */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors flex items-center justify-center p-8 min-h-96"
          >
            <div className="text-center">
              <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-foreground font-semibold mb-2">Join Our Community</p>
              <p className="text-muted-foreground text-sm mb-6">Follow @assurefitness_club for daily fitness content</p>
              <a
                href="https://www.instagram.com/assurefitness_club"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Visit Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors flex items-center justify-center p-8 min-h-96"
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <p className="text-foreground font-semibold mb-2">Member Transformations</p>
              <p className="text-muted-foreground text-sm mb-6">See real results from our members</p>
              <a
                href="https://www.instagram.com/assurefitness_club"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View More
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors flex items-center justify-center p-8 min-h-96"
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <p className="text-foreground font-semibold mb-2">Daily Workout Videos</p>
              <p className="text-muted-foreground text-sm mb-6">Train with our expert instructors</p>
              <a
                href="https://www.instagram.com/assurefitness_club"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Follow Us
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Want to see more? Visit our Instagram profile to see all our latest posts, stories, and reels. Follow us to stay updated with daily content!
          </p>
          <a
            href="https://www.instagram.com/assurefitness_club"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            Follow @assurefitness_club on Instagram
          </a>
        </motion.div>
      </div>

      <style>{`
        .instagram-media {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        blockquote.instagram-media {
          min-width: 100%;
        }
      `}</style>
    </section>
  )
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
