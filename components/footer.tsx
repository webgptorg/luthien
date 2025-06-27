"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Github, Linkedin, MessageSquare, Mail } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  product: [
    { label: 'Get started', href: '/' },
    { label: 'Manifest', href: 'https://ptbk.io/manifest' },
    { label: 'Documentation', href: 'https://github.com/webgptorg/promptbook' },
    { label: 'Playground', href: 'https://promptbook.studio/miniapps/new' }
  ],
  company: [
    { label: 'AI Web, LLC', href: 'https://or-justice-cz.translate.goog/ias/ui/rejstrik-firma.vysledky?subjektId=1223693&typ=UPLNY&_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp' },
    { label: 'About Us', href: 'https://ptbk.io/about' },
    { label: 'Blog', href: 'https://ptbk.io/blog' }
  ],
  connect: [
    { label: 'GitHub', href: 'https://github.com/webgptorg/promptbook', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/promptbook', icon: Linkedin },
    { label: 'Discord', href: 'https://discord.gg/x3QWNaa89N', icon: MessageSquare },
    { label: 'More', href: '/contact', icon: Mail }
  ]
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)

  console.log("Footer component rendering")

  const handleSubscribe = () => {
    console.log("Newsletter subscription attempt:", { email, consent })
    if (!email || !consent) {
      alert('Please enter your email and consent to receive updates.')
      return
    }
    // Here you would typically integrate with your newsletter service
    alert('Thanks for subscribing! We\'ll keep you updated.')
    setEmail('')
    setConsent(false)
  }

  return (
    <footer className="bg-dev-slate-900/50 border-t border-dev-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-dev-slate-400 hover:text-dev-primary transition-colors duration-200"
                    onClick={() => console.log(`Footer link clicked: ${link.label}`)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-dev-slate-400 hover:text-dev-primary transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => console.log(`Footer link clicked: ${link.label}`)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-dev-slate-400 hover:text-dev-primary transition-colors duration-200 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => console.log(`Footer link clicked: ${link.label}`)}
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-dev-slate-400 text-sm block mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dev-slate-800 border-dev-slate-600 text-white placeholder:text-dev-slate-500 focus:border-dev-primary"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  className="border-dev-slate-600 data-[state=checked]:bg-dev-primary data-[state=checked]:border-dev-primary"
                />
                <label htmlFor="consent" className="text-dev-slate-400 text-sm leading-relaxed">
                  I consent to receive news and updates via email *
                </label>
              </div>

              <Button 
                onClick={handleSubscribe}
                className="w-full bg-dev-primary hover:bg-dev-primary/90 text-white"
                disabled={!email || !consent}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-dev-slate-700 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-dev-slate-400 text-sm">
            © 2025 Promptbook<br />
            All rights reserved.
          </div>

          {/* Technology Incubation */}
          <div className="text-center md:text-right">
            <div className="mb-4">
              <Image
                src="https://www.ptbk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCI-Technology-Incubation.6cc58993.png&w=828&q=75"
                alt="Technology Incubation logo"
                width={200}
                height={60}
                className="mx-auto md:ml-auto"
              />
            </div>
            <p className="text-dev-slate-500 text-xs max-w-md">
              This project was implemented with funding from the national budget 
              via the Ministry of Industry and Trade of the Czech Republic within the CzechInvest Technology Incubation programme.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}