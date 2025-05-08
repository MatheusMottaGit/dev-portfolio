import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code2, Briefcase, GraduationCap } from "lucide-react"

interface Skill {
  name: string
  category: "frontend" | "backend" | "database" | "devops" | "mobile"
}

interface Education {
  degree: string
  institution: string
  period: string
}

const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "REST APIs", category: "backend" },

  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "SQL", category: "database" },
  { name: "Firebase", category: "database" },

  { name: "Linux", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "AWS S3", category: "devops" },

  { name: "React Native", category: "mobile" },
]

const education: Education[] = [
  {
    degree: "Bacharelado em Sistemas de Informação (Cursando)",
    institution: "Fundação Oswaldo Aranha - UniFOA",
    period: "Ago 2023 - Atual",
  },
  {
    degree: "Técnico em Informática para Internet",
    institution: "FAETEC - Fundação de Apoio à Escola Técnica",
    period: "Fev 2019 - Dez 2021",
  }
]

export function About() {
  return (
    <div className="w-full px-6">
      <Card className="max-w-6xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Sobre mim</h2>
              <p className="text-muted-foreground">
                Com mais de 4 anos de experiência, atuo na área como Desenvolvedor Web, com foco em PHP/Laravel, também com conhecimentos em Javascript, Node.js, React Native, SQL, Git, Docker, Linux. Constantemente busco me manter interessado em aprender "até a cauda" dos processos que estou inserido, e sempre entregar soluções eficientes, de acordo com as necessidades desejadas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Habilidades Técnicas</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["frontend", "backend", "database", "devops", "mobile"].map((category) => (
                  <div key={category} className="flex flex-col gap-2">
                    <h4 className="font-medium capitalize text-sm text-muted-foreground">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter(skill => skill.category === category)
                        .map(skill => (
                          <Badge key={skill.name} variant="secondary">
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Experiências</h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <h4 className="font-medium">Desenvolvedor Backend PHP/Laravel</h4>
                  <p className="text-sm text-muted-foreground">
                    ABEVD - Associação Brasileira de Empresas de Vendas Diretas · Freelance · Mar 2025 – o momento · Remoto
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    <li>Desenvolvimento de API RESTful com MySQL para sistema de premiação baseado em categorias.</li>
                    <li>Implementação de autenticação com Laravel Sanctum.</li>
                    <li>Uso de API Resources, Form Requests e Service Layers para organização da API.</li>
                    <li>Arquitetura MVC com Eloquent ORM, Laravel UI, Blade e Bootstrap.</li>
                    <li>Controle de versionamento com Git.</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-medium">Desenvolvedor PHP/Laravel</h4>
                  <p className="text-sm text-muted-foreground">
                    Brasidata - Consultoria em Tecnologia e Informação · Dez 2023 – Dez 2024 · Remoto
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    <li>Desenvolvimento de interfaces com Laravel Blade e JavaScript moderno.</li>
                    <li>Integração com APIs REST usando Livewire, TailwindCSS, AlpineJS e Flowbite.</li>
                    <li>Criação de APIs RESTful com autenticação via Laravel Sanctum e sessões.</li>
                    <li>Uso consistente de arquitetura MVC, Service Layers, API Resources e Form Requests.</li>
                    <li>Ambientes configurados com Docker, PostgreSQL e Linux.</li>
                    <li>Controle de versionamento com Git/GitHub e participação em onboarding técnico.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Formações</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 