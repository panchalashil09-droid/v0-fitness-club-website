"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("promo-dismissed")
      if (!dismissed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("promo-dismissed", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative max-w-md w-full bg-card rounded-3xl border border-primary/30 p-8 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                Get a <span className="text-primary">FREE Trial</span>!
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience our premium gym facilities with a complimentary trial session. 
                No commitment required!
              </p>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href="https://wa.me/919898989533?text=Hi, I would like to book a free trial session at Assure Fitness Club."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Free Trial
                  </a>
                </Button>
                <button
                  onClick={handleDismiss}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
