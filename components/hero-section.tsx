"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Code, GitBranch, MessageSquare, Zap } from 'lucide-react'

const genericCode = `// Generic AI Code
function UserProfile({ userId }) {
  const [user, setUser] = useState()
  
  useEffect(() => {
    fetch('/api/user/' + userId)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [userId])
  
  if (!user) return <div>Loading...</div>
  
  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      marginBottom: '10px'
    }}>
      <img 
        src={user.avatar} 
        style={{width: '50px', height: '50px', borderRadius: '50%'}}
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span style={{
        background: user.isActive ? 'green' : 'red',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px'
      }}>
        {user.isActive ? 'Active' : 'Inactive'}
      </span>
      <br />
      <button 
        onClick={() => alert('Edit clicked')}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Edit Profile
      </button>
    </div>
  )
}`

const personalizedCode = `/**
 * User profile component using our design system
 * @param userId - User identifier for data fetching
 * @param onEdit - Callback when user clicks edit
 */
interface UserProfileProps {
  userId: string
  onEdit: (user: User) => void
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  userId, 
  onEdit 
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    console.log("Fetching user profile:", userId)
    
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`)
        if (!response.ok) throw new Error('Failed to fetch user')
        
        const userData = await response.json()
        setUser(userData)
        console.log("User profile loaded:", userData.id)
      } catch (error) {
        console.error("Failed to load user:", error)
        toast.error("Failed to load user profile")
      } finally {
        setLoading(false)
      }
    }
    
    fetchUser()
  }, [userId])
  
  if (loading) return <UserProfileSkeleton />
  if (!user) return <UserProfileError />
  
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 ring-2 ring-border">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <Badge variant={user.isActive ? "default" : "secondary"}>
              {user.isActive ? "Active" : "Inactive"}
            </Badge>
          </div>
          
          <p className="text-muted-foreground">{user.email}</p>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onEdit(user)}
            className="mt-3"
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </Card>
  )
}`

export function HeroSection() {
  console.log("Hero section mounted with code comparison")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-dev-primary animate-float">
        <Code size={24} />
      </div>
      <div className="absolute top-32 right-16 text-dev-success animate-float" style={{ animationDelay: '2s' }}>
        <GitBranch size={20} />
      </div>
      <div className="absolute bottom-32 left-20 text-dev-warning animate-float" style={{ animationDelay: '4s' }}>
        <MessageSquare size={22} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Build Your Personal
              <span className="block bg-gradient-to-r from-dev-primary via-dev-success to-dev-warning bg-clip-text text-transparent">
                Developer AI Avatar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-dev-slate-400 max-w-4xl mx-auto leading-relaxed">
              Create a developer-first AI avatar that understands how you code, how you think, 
              and how you communicate in pull requests, issue threads, and dev chats.
            </p>
          </div>

          {/* Code comparison demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Generic AI Code */}
              <div className="code-block text-left relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4 text-dev-slate-400">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm">generic-ai.jsx</span>
                  <span className="ml-auto text-xs bg-dev-slate-700 px-2 py-1 rounded">Before</span>
                </div>
                <pre className="text-red-300 font-mono text-xs leading-relaxed min-h-[500px] overflow-x-auto whitespace-pre-wrap">
{genericCode}
                </pre>
              </div>

              {/* Your AI Twin's Code */}
              <div className="code-block text-left relative overflow-hidden border-dev-primary/50">
                <div className="flex items-center gap-2 mb-4 text-dev-slate-400">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm">user-profile.tsx</span>
                  <span className="ml-auto text-xs bg-dev-primary px-2 py-1 rounded text-white">After</span>
                </div>
                <pre className="text-dev-primary font-mono text-xs leading-relaxed min-h-[500px] overflow-x-auto whitespace-pre-wrap">
{personalizedCode}
                </pre>
              </div>
            </div>
            
            {/* Explanation */}
            <div className="mt-6 text-center">
              <p className="text-dev-slate-400 text-sm">
                Configure your AI programming twin in our website, then plug it into editors like 
                <span className="text-dev-primary"> Cursor, GitHub Copilot, Cline, Lovable, Macaly</span>
                <br />
                It will program in your style, respect your rules, and use your design system components.
              </p>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-dev-primary hover:bg-dev-primary/90 text-white px-8 py-4 text-lg rounded-xl"
              onClick={() => {
                console.log("Create avatar button clicked")
                window.open('https://ptbk.io/agent-oC0c35', '_blank')
              }}
            >
              <Zap className="mr-2 h-5 w-5" />
              Create your dev avatar
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-dev-slate-600 text-dev-slate-300 hover:bg-dev-slate-800 px-8 py-4 text-lg rounded-xl"
              onClick={() => {
                console.log("Learn more clicked, scrolling to features")
                const featuresSection = document.getElementById('features')
                featuresSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              See how it works
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-12 text-dev-slate-400 text-sm"
          >
            <p>
              You'll see a live preview of what it learns and how it talks like <em>you</em>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}