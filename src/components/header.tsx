import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Github, Mail } from "lucide-react"

interface GitHubProfile {
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

export function Header() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users/MatheusMottaGit")
        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error("Error fetching GitHub profile:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!profile) {
    return <div>Error loading profile</div>
  }

  return (
    <header className="w-full px-6">
      <Card className="max-w-6xl mx-auto">
        <CardHeader className="flex flex-row gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile.avatar_url} alt={profile.name} />
            <AvatarFallback>{profile.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-muted-foreground">{profile.bio}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="text-center">
              <p className="font-bold">{profile.public_repos}</p>
              <p className="text-sm text-muted-foreground">Repositórios</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{profile.followers}</p>
              <p className="text-sm text-muted-foreground">Seguidores</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{profile.following}</p>
              <p className="text-sm text-muted-foreground">Seguindo</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button asChild variant="outline">
              <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                <Github /> Ver perfil
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:matheusdomingues423@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail /> Contato
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </header>
  )
} 