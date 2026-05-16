"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What are the gym timings?",
    answer: "We are open Monday to Saturday from 5:30 AM to 11:00 PM, and on Sundays from 7:00 AM to 11:00 AM.",
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes! Our experienced trainers provide personalized guidance and can create custom workout plans based on your goals.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Absolutely! We offer a complimentary trial session so you can experience our facilities before committing to a membership.",
  },
  {
    question: "What facilities do you have?",
    answer: "We have a spacious two-floor gym with AC, premium imported equipment, cardio zone, boxing area, yoga studio, and much more.",
  },
  {
    question: "Are yoga and zumba sessions included in the membership?",
    answer: "Yes, yoga sessions on Tuesdays and Zumba sessions on Wednesdays and Fridays are included in quarterly and above memberships.",
  },
  {
    question: "Do you provide diet consultation?",
    answer: "Yes, we provide basic diet consultation with quarterly and above memberships to help you achieve your fitness goals faster.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 bg-card hover:bg-card/80 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 bg-card">
                      <p className="text-muted-foreground pl-8">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919898989533?text=Hi, I have a question about Assure Fitness Club."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
