"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Github, 
  MessageSquare, 
  Mail, 
  Video, 
  FileText, 
  Bot,
  Crown,
  Building
} from 'lucide-react'

const integrations = [
  {
    icon: Github,
    title: "GitHub PR reviews and issue replies",
    tier: "free",
    description: "Automated code reviews and issue responses in your style"
  },
  {
    icon: MessageSquare,
    title: "Slack / Discord bot for answering questions",
    tier: "free", 
    description: "Handle team questions and status updates automatically"
  },
  {
    icon: Mail,
    title: "Email and chat integrations",
    tier: "pro",
    description: "Respond to stakeholder emails and support chats"
  },
  {
    icon: Video,
    title: "Audio/video avatar for demos",
    tier: "pro",
    description: "Present features and updates with AI-generated demos"
  },
  {
    icon: Bot,
    title: "Background agent auto-triage",
    tier: "pro",
    description: "Automatically categorize issues and write release notes"
  },
  {
    icon: Building,
    title: "Custom workflows & self-hosted",
    tier: "enterprise",
    description: "Tailored integrations and on-premise deployment"
  }
]

export function IntegrationsSection() {
  console.log("Integrations section rendering")

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'free': return 'bg-dev-success/20 text-dev-success border-dev-success/30'
      case 'pro': return 'bg-dev-primary/20 text-dev-primary border-dev-primary/30'
      case 'enterprise': return 'bg-dev-warning/20 text-dev-warning border-dev-warning/30'
      default: return 'bg-dev-slate-600/20 text-dev-slate-400 border-dev-slate-600/30'
    }
  }

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'pro': return <Crown size={12} />
      case 'enterprise': return <Building size={12} />
      default: return null
    }
  }

  return (
    <section className="py-24 px-4 bg-dev-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Integration <span className="text-dev-primary">Options</span>
          </h2>
          <p className="text-xl text-dev-slate-400 max-w-3xl mx-auto">
            Connect your avatar to the tools you already use, from GitHub to Slack to custom workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dev-slate-800/50 border-dev-slate-700 hover:border-dev-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-dev-primary/10 text-dev-primary">
                      <integration.icon size={24} />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${getTierColor(integration.tier)} flex items-center gap-1 text-xs`}
                    >
                      {getTierIcon(integration.tier)}
                      {integration.tier}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-white">
                    {integration.title}
                  </h3>
                  <p className="text-dev-slate-400 text-sm leading-relaxed">
                    {integration.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional features callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-dev-slate-800/50 to-dev-slate-700/50 border-dev-slate-600">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <FileText className="text-dev-success" size={32} />
                <h3 className="text-2xl font-bold text-white">More Use Cases</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <p className="text-dev-slate-300">• Generating boilerplate code or config files based on your habits</p>
                  <p className="text-dev-slate-300">• Interfacing with non-technical stakeholders on your behalf</p>
                </div>
                <div className="space-y-3">
                  <p className="text-dev-slate-300">• Debugging or triaging issues while you focus on deep work</p>
                  <p className="text-dev-slate-300">• Handling repetitive Slack threads or project updates</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}