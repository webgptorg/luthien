"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Crown, Building, Zap } from 'lucide-react'

const pricingTiers = [
  {
    name: "Free Tier",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with your dev avatar",
    features: [
      "Website and GitHub chatbot",
      "Basic PR review automation",
      "Issue response templates", 
      "Community support",
      "Open source access"
    ],
    cta: "Start Free",
    popular: false,
    color: "border-dev-slate-600"
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "Full dev stack integration for serious developers",
    features: [
      "Everything in Free",
      "Full dev stack integration",
      "AI agentic mode",
      "Slack + email support",
      "Custom training data",
      "Priority support",
      "Advanced analytics"
    ],
    cta: "Start Pro Trial",
    popular: true,
    color: "border-dev-primary"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for teams and organizations",
    features: [
      "Everything in Pro",
      "Custom workflows",
      "Self-hosted deployments",
      "Team management",
      "SSO integration",
      "SLA guarantees",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    popular: false,
    color: "border-dev-warning"
  }
]

export function PricingSection() {
  console.log("Pricing section rendering")

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-dev-primary">Pricing</span>
          </h2>
          <p className="text-xl text-dev-slate-400 max-w-3xl mx-auto">
            Choose the plan that fits your development workflow. Start free, upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-dev-primary text-white px-4 py-1 text-sm">
                    <Crown size={12} className="mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`${tier.color} bg-dev-slate-800/50 hover:bg-dev-slate-800/70 transition-all duration-300 h-full relative overflow-hidden ${tier.popular ? 'scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dev-primary via-dev-success to-dev-warning"></div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-dev-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-dev-slate-400 mt-4">
                    {tier.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check size={16} className="text-dev-success flex-shrink-0" />
                        <span className="text-dev-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      tier.popular 
                        ? 'bg-dev-primary hover:bg-dev-primary/90 text-white' 
                        : 'bg-dev-slate-700 hover:bg-dev-slate-600 text-white border border-dev-slate-600'
                    }`}
                    onClick={() => {
                      console.log(`${tier.name} button clicked`)
                      if (tier.name === 'Enterprise') {
                        // Could add contact form logic here
                        window.open('mailto:hello@ptbk.io?subject=Enterprise Inquiry', '_blank')
                      } else {
                        window.open('https://ptbk.io/agent-oC0c35', '_blank')
                      }
                    }}
                  >
                    {tier.popular && <Zap className="mr-2 h-5 w-5" />}
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dev-slate-400 mb-4">
            All plans include open source access and community support
          </p>
          <p className="text-sm text-dev-slate-500">
            No hidden fees • Cancel anytime • 30-day money-back guarantee on Pro plan
          </p>
        </motion.div>
      </div>
    </section>
  )
}