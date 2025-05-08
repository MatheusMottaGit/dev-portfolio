import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Star, Github, SquareArrowOutUpLeft } from "lucide-react"
import { Badge } from "./ui/badge"

interface StarredRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  owner: {
    login: string
  }
  topics: string[]
}

type Tag = "web" | "api" | "mobile" | "fullstack" | "other"

function getRepoTag(repo: StarredRepo): Tag {
  const topics = repo.topics || []
  
  if (topics.includes("web")) return "web"
  if (topics.includes("api")) return "api"
  if (topics.includes("mobile")) return "mobile"
  if (topics.includes("fullstack")) return "fullstack"
  
  return "other"
}

export function StarredRepos() {
  const [repos, setRepos] = useState<StarredRepo[]>([])
  const [selectedTag, setSelectedTag] = useState<Tag | "all">("all")

  useEffect(() => {
    const fetchStarredRepos = async () => {
      const response = await fetch("https://api.github.com/users/MatheusMottaGit/starred")
      const data: StarredRepo[] = await response.json()
      const starredRepos = data.filter(repo => repo.owner.login === "MatheusMottaGit")
      setRepos(starredRepos)
    }

    fetchStarredRepos()
  }, [])

  const filteredRepos = selectedTag === "all" 
    ? repos 
    : repos.filter(repo => getRepoTag(repo) === selectedTag)

  const tags: Tag[] = ["web", "api", "mobile", "fullstack"]

  return (
    <Card className="max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Principais projetos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            variant={selectedTag === "all" ? "default" : "outline"}
            onClick={() => setSelectedTag("all")}
            className="whitespace-nowrap"
          >
            Todos
          </Button>
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className={`whitespace-nowrap capitalize`}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo) => (
            <Card key={repo.id}>
              <CardContent className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{repo.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-amber-300 stroke-none" />
                        {repo.stargazers_count}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {repo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.map(topic => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <Button asChild variant="outline" size="sm">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Ver repositório
                      </a>
                    </Button>
                    {
                      repo.topics.includes('api') ? (
                        <Button variant="ghost" size="sm">
                          <SquareArrowOutUpLeft className="h-4 w-4" />
                          Ver API
                        </Button>
                      ) : repo.topics.includes('web') ? (
                        <Button variant="ghost" size="sm">
                          <SquareArrowOutUpLeft className="h-4 w-4" />
                          Ver página
                        </Button>
                      ) : <></>
                    }
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 