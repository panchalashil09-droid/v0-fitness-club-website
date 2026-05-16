"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Instagram, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "601 Shree Balaji Road, Ahmedabad, Gujarat 382330, India",
    link: "https://maps.google.com/?q=601+Shree+Balaji+Road+Ahmedabad+Gujarat+382330",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "098989 89533",
    link: "tel:+919898989533",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon-Sat: 5:30 AM - 11:00 PM | Sun: 7:00 AM - 11:00 AM",
    link: null,
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@assure_fitnessclub",
    link: "https://www.instagram.com/assure_fitnessclub",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construct WhatsApp message
    const whatsappMessage = `Hi, I'm ${formData.name}.\n\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/919898989533?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your fitness journey? Contact us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8493714694884!2d72.5714!3d23.0258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzMyLjkiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/919898989533"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+919898989533"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl border border-border p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  placeholder="+91 98989 89533"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border text-foreground"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="I'm interested in joining the gym..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border text-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={submitted}
              >
                {submitted ? (
                  "Redirecting to WhatsApp..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
