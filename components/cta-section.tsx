"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Zap, ArrowRight } from 'lucide-react'

export function CtaSection() {
  console.log("CTA section rendering")

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-dev-primary/5 via-dev-success/5 to-dev-warning/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dev-primary to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="text-dev-warning" size={24} />
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to reclaim your <span className="text-dev-primary">coding time</span>?
            </h2>
          </div>
          
          <p className="text-xl text-dev-slate-400 mb-12 max-w-2xl mx-auto">
            Start by importing your GitHub or Google data. You'll see a live preview of what it learns and how it talks like <em className="text-white">you</em>.
          </p>

          <div className="space-y-8">
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-dev-primary hover:bg-dev-primary/90 text-white px-12 py-6 text-xl rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-dev-primary/25"
                onClick={() => {
                  console.log("Main CTA clicked - redirecting to avatar creation")
                  window.open('https://ptbk.io/agent-oC0c35', '_blank')
                }}
              >
                <Zap className="mr-3 h-6 w-6" />
                Create your dev avatar
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>

            {/* Direct link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-dev-slate-400 text-sm mb-2">👉 Direct link:</p>
              <a 
                href="https://ptbk.io/agent-oC0c35"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dev-primary hover:text-dev-primary/80 font-mono text-lg underline underline-offset-4 transition-colors duration-200"
                onClick={() => console.log("Direct link clicked")}
              >
                https://ptbk.io/agent-oC0c35
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}