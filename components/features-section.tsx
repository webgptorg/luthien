"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Brain, 
  MessageCircle, 
  Settings, 
  Code2, 
  Zap, 
  Shield,
  GitPullRequest,
  Users,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "It sounds like you.",
    description: "Your voice, your thinking, your patterns—fine-tuned by learning from your GitHub, Slack, and code history.",
    color: "text-dev-primary"
  },
  {
    icon: MessageCircle,
    title: "Use it anywhere you work.",
    description: "Drop it into your GitHub repo, Slack workspace, VSCode, or even use it on calls and demos.",
    color: "text-dev-success"
  },
  {
    icon: Settings,
    title: "Full control.",
    description: "You decide what it can do, see every interaction, and tweak its behavior using human language.",
    color: "text-dev-warning"
  },
  {
    icon: Code2,
    title: "Text-based, open, and dev-friendly.",
    description: "Everything runs on plain-text logic called Book, interpreted by the open-source PromptBook Engine. No no-code walls, no vendor lock-in.",
    color: "text-purple-400"
  },
  {
    icon: Zap,
    title: "Start in seconds.",
    description: "Import your GitHub, Google, or Slack data—or configure manually. It's up to you.",
    color: "text-dev-primary"
  },
  {
    icon: Shield,
    title: "Own it.",
    description: "It's open source. You can host it yourself or move your data anytime.",
    color: "text-dev-success"
  }
]

const useCases = [
  {
    icon: GitPullRequest,
    title: "Code reviews in your voice",
    description: "Automated PR reviews that match your style and standards"
  },
  {
    icon: MessageCircle,
    title: "Drafting commit messages or PR descriptions", 
    description: "Consistent, clear commit messages following your conventions"
  },
  {
    icon: Users,
    title: "Responding to issues or questions on GitHub",
    description: "Handle bug reports and feature requests professionally"
  },
  {
    icon: Clock,
    title: "Handling repetitive Slack threads",
    description: "Auto-respond to common questions and status updates"
  }
]

export function FeaturesSection() {
  console.log("Features section rendering")

  return (
    <section id="features" className="py-24 px-4 relative">
      {/* Use Cases */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Use Cases for <span className="text-dev-primary">Developers</span>
          </h2>
          <p className="text-xl text-dev-slate-400 max-w-3xl mx-auto">
            You don't need a hundred apps, tools, or dashboards. You need more <strong className="text-white">time</strong> to focus on meaningful development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dev-slate-800/50 border-dev-slate-700 hover:border-dev-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-dev-primary/10 text-dev-primary">
                      <useCase.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">
                        {useCase.title}
                      </h3>
                      <p className="text-dev-slate-400">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pain point callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-dev-slate-800/50 to-dev-slate-700/50 rounded-2xl p-8 border border-dev-slate-600"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Why it matters</h3>
          <p className="text-lg text-dev-slate-300 mb-6">
            Most devs spend 80% of their time on:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-dev-slate-400">
            <div className="space-y-2">
              <p>• Rewriting similar responses in PRs</p>
              <p>• Attending redundant standups</p>
            </div>
            <div className="space-y-2">
              <p>• Commenting on the same type of bugs</p>
              <p>• Chasing down specs or managing side channels</p>
            </div>
          </div>
          <p className="text-xl text-dev-primary mt-6 font-semibold">
            We flip that. Let your avatar take care of the busywork, so you can ship, think, and build.
          </p>
        </motion.div>
      </div>

      {/* Built for Engineers */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🔧 Built for <span className="text-dev-success">Engineers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dev-slate-800/30 border-dev-slate-700 hover:border-dev-primary/30 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-dev-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}