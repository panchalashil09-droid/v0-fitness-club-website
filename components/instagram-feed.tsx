"use client"

import { motion } from "framer-motion"
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react"

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    likes: "1.2K",
    comments: "48",
  },
  {
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
    likes: "856",
    comments: "32",
  },
  {
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=400&fit=crop",
    likes: "1.5K",
    comments: "67",
  },
  {
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=400&fit=crop",
    likes: "923",
    comments: "41",
  },
  {
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=400&fit=crop",
    likes: "1.1K",
    comments: "55",
  },
  {
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=400&h=400&fit=crop",
    likes: "789",
    comments: "28",
  },
]

export function InstagramFeed() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-400/20 border border-pink-500/30 mb-4">
            <Instagram className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-medium text-pink-400">@assurefitness_club</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Follow Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">Instagram</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get daily workout tips, transformation stories, and behind-the-scenes content from our gym.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/assurefitness_club"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <div className="flex items-center gap-1 text-foreground">
                  <Heart className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-foreground">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/assurefitness_club"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25"
          >
            <Instagram className="w-5 h-5" />
            Follow @assurefitness_club
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-pink-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
