"use client"

import { motion } from "framer-motion"
import { 
  Snowflake, 
  Building2, 
  Heart, 
  Target, 
  Music, 
  Fan,
  Maximize,
  Dumbbell,
  Users,
  Zap
} from "lucide-react"

const facilities = [
  { icon: Snowflake, title: "Air Conditioned", description: "Fully AC environment for comfortable workouts" },
  { icon: Building2, title: "Two Floor Setup", description: "Spacious two-floor gym with dedicated zones" },
  { icon: Heart, title: "Cardio Zone", description: "Large cardio area with multiple machines" },
  { icon: Target, title: "Boxing Area", description: "Dedicated boxing section with kick bags" },
  { icon: Zap, title: "Treadmills", description: "Multiple premium treadmills available" },
  { icon: Users, title: "Yoga Sessions", description: "Weekly yoga classes for flexibility" },
  { icon: Music, title: "Zumba Sessions", description: "Energetic zumba and aerobic classes" },
  { icon: Dumbbell, title: "Premium Equipment", description: "Imported world-class gym machines" },
  { icon: Music, title: "Loud Music System", description: "Premium speakers for motivation" },
  { icon: Fan, title: "Cooling Fans", description: "Huge industrial fans for airflow" },
  { icon: Maximize, title: "Spacious Area", description: "Large workout space for all activities" },
  { icon: Users, title: "Group Workouts", description: "Motivating group training sessions" },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute top-40 right-40 w-48 h-48 border border-accent rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Facilities</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            World-Class <span className="text-primary">Equipment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need for a complete fitness transformation under one roof.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <facility.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h4>
              <p className="text-muted-foreground text-sm">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Experience Our <span className="text-primary">Premium Facilities</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a free trial session and explore our world-class gym environment.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-red"
          >
            Book Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  )
}
