<script setup>
import { ref } from 'vue'
import data from '@/locales/en.json'
const info = ref(data)
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="right_side">
    <div class="about">
      <h2 class="title2">{{ t('titles.profile') }}</h2>
      <p>
        {{ t('about') }}
      </p>
    </div>

    <div class="about">
      <h2 class="title2">{{ t('titles.experience') }}</h2>
      <div class="box" v-for="(experience, index) in info.experience" :key="index">
        <div class="year_company">
          <h5>{{ t(experience.from) }} - {{ t(experience.to) }}</h5>
          <h5>{{ t(experience.company) }}</h5>
        </div>
        <div class="text">
          <h4>{{ t(experience.jobTitle) }}</h4>
          <p>
            {{ t(experience.description) }}
          </p>
        </div>
      </div>
    </div>

    <div class="about skills">
      <h2 class="title2">{{ t('titles.professionalSkills') }}</h2>
      <div class="box" v-for="(skills, index) in info.skills" :key="index">
        <h4>{{ t(skills.skill) }}</h4>
        <div class="percent">
          <div v-percent="skills.percent"></div>
        </div>
      </div>
    </div>
  </div>
</template>
