"use client"

import { motion } from "framer-motion"
import { 
  Dumbbell, 
  Wind, 
  Building2, 
  Heart, 
  Target, 
  Flame, 
  Users,
  CheckCircle 
} from "lucide-react"

const features = [
  "Spacious two-floor gym",
  "Fully air-conditioned environment",
  "Huge industrial cooling fans",
  "Premium imported gym machines",
  "Large cardio workout area",
  "Multiple treadmills",
  "Boxing section with kick bags",
  "Loud premium music speakers",
  "Clean and hygienic environment",
  "Beginner-friendly atmosphere",
]

const trainingCategories = [
  { icon: Flame, title: "Weight Loss", description: "Burn fat effectively with our specialized programs" },
  { icon: Dumbbell, title: "Muscle Gain", description: "Build strength and mass with expert guidance" },
  { icon: Target, title: "Strength Training", description: "Increase power and endurance systematically" },
  { icon: Heart, title: "Cardio Fitness", description: "Improve cardiovascular health and stamina" },
  { icon: Wind, title: "Functional Workouts", description: "Enhance everyday movement and flexibility" },
  { icon: Users, title: "Group Workouts", description: "Motivating sessions with fellow fitness enthusiasts" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Why Choose <span className="text-primary">Assure Fitness</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience a premium fitness environment designed to help you achieve your goals 
            with world-class equipment and professional guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
                  alt="Gym interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=500&fit=crop"
                  alt="Workout equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=500&fit=crop"
                  alt="Training session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=400&fit=crop"
                  alt="Cardio area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Premium Facilities for Your <span className="text-primary">Success</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Training Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Training <span className="text-primary">Programs</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{category.title}</h4>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
