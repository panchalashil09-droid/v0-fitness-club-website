"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const activities = [
  {
    day: "Tuesday",
    title: "Yoga Session",
    time: "6:00 AM - 7:00 AM",
    description: "Start your day with peaceful yoga to improve flexibility and mental clarity.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    day: "Wednesday",
    title: "Aerobic Zumba",
    time: "7:00 PM - 8:00 PM",
    description: "High-energy dance workout to burn calories and have fun!",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    day: "Friday",
    title: "Aerobic Zumba",
    time: "7:00 PM - 8:00 PM",
    description: "End your week with an energetic zumba session!",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    color: "from-violet-500/20 to-purple-500/20",
  },
]

const weeklyHours = [
  { day: "Monday", open: "5:30 AM", close: "11:00 PM", isOpen: true },
  { day: "Tuesday", open: "5:30 AM", close: "11:00 PM", isOpen: true },
  { day: "Wednesday", open: "5:30 AM", close: "11:00 PM", isOpen: true },
  { day: "Thursday", open: "5:30 AM", close: "11:00 PM", isOpen: true },
  { day: "Friday", open: "5:30 AM", close: "11:00 PM", isOpen: true },
  { day: "Saturday", open: "5:30 AM", close: "11:00 PM", isOpen: true },
  { day: "Sunday", open: "7:00 AM", close: "11:00 AM", isOpen: true },
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Weekly Activities</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Special <span className="text-primary">Sessions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our weekly yoga and zumba sessions for a complete fitness experience.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} to-transparent opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{activity.day}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{activity.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Opening Hours</h3>
              <p className="text-sm text-muted-foreground">We are open 7 days a week</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {weeklyHours.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl border transition-colors ${
                  schedule.day === "Sunday"
                    ? "bg-accent/10 border-accent/30"
                    : "bg-background border-border hover:border-primary/50"
                }`}
              >
                <div className="font-semibold text-foreground mb-2">{schedule.day}</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">{schedule.open}</span>
                  <span className="text-muted-foreground">-</span>
                  <span className="text-primary font-medium">{schedule.close}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
