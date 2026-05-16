"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Lost 15kg in 6 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    content: "Assure Fitness completely transformed my life. The trainers are incredibly knowledgeable and the equipment is world-class. I lost 15kg and gained so much confidence!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    content: "The yoga and zumba sessions are amazing! The atmosphere is so motivating and everyone is super supportive. Best gym in Ahmedabad without a doubt!",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Gained 10kg muscle",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    content: "The premium equipment and spacious workout area make training a pleasure. The loud music and AC environment keep me pumped throughout my workout!",
    rating: 5,
  },
  {
    name: "Neha Singh",
    role: "Working Professional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    content: "As a busy professional, I love the flexible hours. The gym is clean, hygienic, and the staff is always helpful. Highly recommend to everyone!",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    role: "Boxing Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    content: "The boxing section is fantastic! Quality kick bags and ample space. Combined with the intense music, it's the perfect place to release stress.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setAutoPlay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoPlay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-primary">Members</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories from real people who transformed their lives with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <p className="text-xl sm:text-2xl text-foreground mb-8 leading-relaxed">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{testimonials[current].name}</h4>
                  <p className="text-sm text-primary">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoPlay(false)
                    setCurrent(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
