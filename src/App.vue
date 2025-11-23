<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-vue-next'

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
    technologies: ['VueJS', 'TailwindCSS', 'PHP', 'Laravel', 'PostgreSQL'],
  },
  {
    name: 'SPA Intentions',
    description: 'Plataforma para facilidade de registro de intenções dos fiéis para os horários de missa, para a minha paróquia.',
    url: 'https://github.com/MatheusMottaGit/spa-intentions',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'VueJS', 'Docker'],
  },
]

import premioAbevdImage from '@/assets/Attached_image.png'

const professionalProjects = [
  {
    name: 'Prêmio ABEVD - 2025',
    description: 'Aplicação de premiação por empresas de projetos sociais. Desenvolvi o backend (API) da aplicação em desenvolvimento colaborativo.',
    url: 'https://premio-abevd.vercel.app',
    image: premioAbevdImage,
    technologies: ['PHP', 'Laravel', 'MySQL', 'Mailtrap'],
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
          <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Matheus</span>
          <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Motta</span>
        </h2>
      </div>

      <!-- Language Badges -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 mt-4 sm:mt-6">
        <Badge
          v-for="language in ['php', 'laravel', 'nodejs', 'sql', 'postgresql', 'vuejs', 'docker', 'aws']"
          :key="language"
          variant="outline"
          class="text-xs sm:text-sm font-mono text-white/90 bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30"
        >
          {{ language }}
        </Badge>
      </div>

      <!-- Description Section -->
      <div class="w-full max-w-2xl px-4 sm:px-6 md:px-8 mt-4 sm:mt-6">
        <p class="text-sm xs:text-base sm:text-base md:text-lg text-white/80 leading-relaxed text-center">
          Desenvolvedor Full-Stack com mais de 3 anos de experiência. Gosto de pensar em problemas reais para tentar resolver. Tenho o hábito de investigar e descobrir o funcionamento das ferramentas que uso, sempre buscando entender como tudo funciona. Acredito que aprender e continuar evoluindo é fundamental para crescer como profissional.
        </p>
      </div>

      <!-- Professional Projects Section -->
      <div class="w-full max-w-2xl px-4 sm:px-6 md:px-8 mt-8 sm:mt-12">
        <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">
          Projetos profissionais
        </h3>
        <div class="space-y-4 sm:space-y-6">
          <div
            v-for="project in professionalProjects"
            :key="project.name"
            class="block p-4 sm:p-5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <!-- Project Image -->
            <div v-if="project.image" class="mb-4 rounded-lg overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.name"
                class="w-full h-auto object-cover"
              />
            </div>
            
            <!-- Project Header -->
            <div class="flex items-start justify-between gap-3 mb-2">
              <h4 class="text-base sm:text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                {{ project.name }}
              </h4>
              <a
                v-if="project.url && project.url !== '#'"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 mt-0.5"
              >
                <ExternalLink class="h-4 w-4 sm:h-5 sm:w-5 text-white/60 group-hover:text-white/80" />
              </a>
            </div>
            
            <!-- Project Description -->
            <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
              {{ project.description }}
            </p>
            
            <!-- Technologies Badges -->
            <div v-if="project.technologies && project.technologies.length > 0" class="flex flex-wrap gap-2">
              <Badge
                v-for="tech in project.technologies"
                :key="tech"
                variant="outline"
                class="text-xs font-mono text-white/80 bg-white/5 border-white/15"
              >
                {{ tech }}
              </Badge>
            </div>
          </div>
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
            class="block p-4 sm:p-5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <div class="flex items-start justify-between gap-3 mb-2">
              <h4 class="text-base sm:text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                {{ project.name }}
              </h4>
              <ExternalLink class="h-4 w-4 sm:h-5 sm:w-5 text-white/60 group-hover:text-white/80 shrink-0 mt-0.5" />
            </div>
            <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
              {{ project.description }}
            </p>
            <div v-if="project.technologies.length > 0" class="flex flex-wrap gap-2">
              <Badge
                v-for="tech in project.technologies"
                :key="tech"
                variant="outline"
                class="text-xs font-mono text-white/80 bg-white/5 border-white/15"
              >
                {{ tech }}
              </Badge>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
