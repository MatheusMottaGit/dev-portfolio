<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Linkedin, Twitter, Mail, Instagram, ExternalLink } from 'lucide-vue-next'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/MatheusMottaGit',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matheus-domingues-motta-918438257/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/eu_o_mottta',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/omotta.dev',
    icon: Instagram,
  },
  {
    name: 'Gmail',
    url: 'mailto:matheusdomingues423@gmail.com',
    icon: Mail,
  },
]

const projects = [
  {
    name: 'Lumi',
    description: 'Projeto pessoal para facilitar o processo de posts carousel no Instagram For Business/Creator (Meta API, ChatGPT, AWS S3, GD Image).',
    url: 'https://lumi-xi.vercel.app/',
    image: lumiImage,
    technologies: ['VueJS', 'TailwindCSS', 'PHP', 'Laravel', 'PostgreSQL'],
  },
  {
    name: 'SPA Intentions',
    description: 'Plataforma para facilidade de registro de intenções dos fiéis para os horários de missa, para a minha paróquia.',
    url: 'https://github.com/MatheusMottaGit/spa-intentions',
    image: spaImage,
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'VueJS', 'Docker'],
  },
]

import premioAbevdImage from '@/assets/Attached_image.png'
import dashboardCorridasImage from '@/assets/Attached_image2.png'
import lumiImage from '@/assets/Attached_image3.png'
import spaImage from '@/assets/Attached_image4.png'

const professionalProjects = [
  {
    name: 'Prêmio ABEVD - 2025',
    description: 'ABEVD é uma organização sem fins lucrativos, com o objetivo de promover o crescimento de vendas diretas no Brasil. Para a aplicação de uma premiação por parte de empresas em projetos, desenvolvi o Backend da aplicação.',
    features: [
      'Cadastro de projetos e suas notas',
      'Processos de avaliação de projetos (únicos ou múltiplos) por jurados',
      'Notificações por e-mail (registro de usuário, troca de senhas)',
    ],
    url: 'https://premio-abevd.vercel.app',
    image: premioAbevdImage,
    technologies: ['PHP', 'Laravel', 'MySQL', 'Mailtrap'],
  },
  {
    name: 'Move Já!',
    description: 'Sistema de gestão e monitoramento de corridas com dashboard completo. Desenvolvi a interface da aplicação incluindo fluxo de autenticação "Role Based", gerenciamento de motoristas e passageiros, tarifas, notificações, corridas e relatórios de viagem.',
    url: 'https://move-ja-painel.vercel.app',
    image: dashboardCorridasImage,
    technologies: ['ReactJS', 'TailwindCSS', 'TypeScript', 'Tanstack Query'],
  },
]
</script>

<template>
  <div class="min-h-screen w-full flex flex-col overflow-x-hidden">
    <!-- Left Side - Profile Section (Dark Background) -->
    <!-- Mobile: Full width, stacked on top. Desktop: 1/3 width, fixed left -->
    <div class="w-full bg-zinc-900 flex flex-col items-center py-12 px-6 sm:py-16 sm:px-8 md:py-12 md:px-12 space-y-6 sm:space-y-8 min-h-screen md:sticky md:top-0 md:h-screen md:overflow-y-auto">
      <!-- Avatar - Responsive sizes -->
      <Avatar class="h-28 w-28 xs:h-32 xs:w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 border-2 border-white/20 ring-2 ring-white/10">
        <AvatarImage src="https://github.com/MatheusMottaGit.png" alt="Matheus Motta" />
        <AvatarFallback class="text-xl xs:text-2xl sm:text-3xl md:text-3xl font-semibold bg-zinc-800 text-white">MM</AvatarFallback>
      </Avatar>

      <!-- Social Links - Vertical Stack, responsive spacing -->
      <div class="flex items-center gap-3 sm:gap-4">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          :target="link.name === 'Gmail' ? '_self' : '_blank'"
          :rel="link.name === 'Gmail' ? '' : 'noopener noreferrer'"
          class="p-2.5 sm:p-3 md:p-3 rounded-full border border-white/30 hover:border-white/50 transition-all hover:bg-white/10 active:scale-95 touch-manipulation"
          :aria-label="link.name"
        >
          <component :is="link.icon" class="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 text-white" />
        </a>
      </div>

      <!-- Text Section - Responsive typography -->
      <div class="flex flex-col items-center space-y-2 text-center px-4 sm:px-6">
        <h1 class="text-base xs:text-lg sm:text-xl md:text-xl font-normal text-white/90">
          Desenvolvedor Full-Stack
        </h1>
        <h2 class="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold wrap-break-word">
          <span class="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Matheus</span>
          <span class="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Motta</span>
        </h2>
      </div>

      <!-- Language Badges -->
      <div class="flex flex-wrap items-center justify-center gap-2 px-4 sm:px-6 mt-4 w-96">
        <Badge
          v-for="language in ['php', 'laravel', 'nodejs', 'sql', 'postgresql', 'mysql', 'vuejs', 'docker', 'aws']"
          :key="language"
        >
          {{ language }}
        </Badge>
      </div>

      <!-- Description Section -->
      <div class="w-full max-w-2xl px-4 sm:px-6 md:px-8 mt-4">
        <p class="text-sm xs:text-base sm:text-base md:text-lg text-white/80 leading-relaxed text-center">
          Desenvolvedor Full-Stack com mais de 3 anos de experiência. Gosto de pensar em problemas reais para resolver. Tenho o hábito de investigar e descobrir o funcionamento das ferramentas que uso, sempre buscando entender como tudo funciona. Acredito que aprender e continuar evoluindo é fundamental para crescer como profissional.
        </p>
      </div>

      <!-- Professional Projects Section -->
      <div class="w-full max-w-2xl px-4 sm:px-6 md:px-8 mt-8 sm:mt-12">
        <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">
          Projetos profissionais
        </h3>
        <div class="space-y-4 sm:space-y-6">
          <Card
            v-for="project in professionalProjects"
            :key="project.name"
          >
            <!-- Project Image -->
            <div v-if="project.image" class="rounded-t-xl overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.name"
                class="w-full h-auto object-cover"
              />
            </div>
            
            <CardHeader>
              <div class="flex items-start justify-between gap-3">
                <CardTitle>
                  {{ project.name }}
                </CardTitle>
                <a
                  v-if="project.url && project.url !== '#'"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="shrink-0 mt-0.5"
                >
                  <ExternalLink class="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </CardHeader>
            
            <CardContent>
              <!-- Project Description -->
              <p class="text-xs sm:text-sm leading-relaxed mb-3">
                {{ project.description }}
              </p>
              
              <!-- Features List -->
              <div v-if="project.features && project.features.length > 0" class="mb-3">
                <ul class="space-y-2">
                  <li
                    v-for="(feature, index) in project.features"
                    :key="index"
                    class="text-xs sm:text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span class="mt-1.5 shrink-0">•</span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Technologies Badges -->
              <div v-if="project.technologies && project.technologies.length > 0" class="flex flex-wrap gap-2">
                <Badge
                  v-for="tech in project.technologies"
                  :key="tech"
                >
                  {{ tech }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <!-- Personal Projects Section -->
      <div class="w-full max-w-2xl px-4 sm:px-6 md:px-8 mt-8 sm:mt-12">
        <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">
          Meus projetos pessoais
        </h3>
        <div class="space-y-4 sm:space-y-6">
          <a
            v-for="project in projects"
            :key="project.name"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <Card>
              <!-- Project Image -->
              <div v-if="project.image" class="rounded-t-xl overflow-hidden">
                <img 
                  :src="project.image" 
                  :alt="project.name"
                  class="w-full h-auto object-cover"
                />
              </div>
              
              <CardHeader>
                <div class="flex items-start justify-between gap-3">
                  <CardTitle>
                    {{ project.name }}
                  </CardTitle>
                  <ExternalLink class="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-0.5" />
                </div>
              </CardHeader>
              <CardContent>
                <p class="text-xs sm:text-sm leading-relaxed mb-3">
                  {{ project.description }}
                </p>
                <div v-if="project.technologies.length > 0" class="flex flex-wrap gap-2">
                  <Badge
                    v-for="tech in project.technologies"
                    :key="tech"
                    variant="outline"
                  >
                    {{ tech }}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
