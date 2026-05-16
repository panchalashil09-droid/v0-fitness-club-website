"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Monthly",
    duration: "1 Month",
    price: "₹1,500",
    period: "/month",
    popular: false,
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "AC environment",
      "Basic guidance",
    ],
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    price: "₹4,000",
    period: "/quarter",
    popular: true,
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "AC environment",
      "Personal guidance",
      "Free yoga sessions",
      "Diet consultation",
    ],
  },
  {
    name: "Half-Yearly",
    duration: "6 Months",
    price: "₹7,000",
    period: "/6 months",
    popular: false,
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "AC environment",
      "Personal guidance",
      "Free yoga sessions",
      "Diet consultation",
      "Zumba sessions",
    ],
  },
  {
    name: "Annual",
    duration: "12 Months",
    price: "₹12,000",
    period: "/year",
    popular: false,
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "AC environment",
      "Personal guidance",
      "Free yoga sessions",
      "Diet consultation",
      "Zumba sessions",
      "Priority support",
      "Guest passes",
    ],
  },
]

export function MembershipSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="membership" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Membership Plans</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Flexible membership options to fit your fitness goals and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-6 rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-background border-primary"
                  : "bg-background border-border hover:border-primary/50"
              } ${hoveredIndex === index ? "-translate-y-2" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.duration}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                <a
                  href={`https://wa.me/919898989533?text=Hi, I'm interested in the ${plan.name} membership plan at Assure Fitness Club.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Free Trial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border border-primary/30 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Limited Time Offer</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Get a <span className="text-primary">FREE Trial</span> Session
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Experience our premium facilities before committing. No obligations, just pure fitness.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red">
            <a
              href="https://wa.me/919898989533?text=Hi, I would like to book a free trial session at Assure Fitness Club."
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Trial via WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
