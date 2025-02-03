<template>
  <div class="left_side">
    <!--profile text started-->
    <div class="profiletext">
      <!--img-->
      <div class="imgbx">
        <img :src="img" alt="my imag" />
      </div>
      <h2>
        {{ t(info.name) }} {{ t(info.lastName) }}<br /><span>{{ t(info.jobTitle) }}</span>
        <span>/ {{ info.tecnologi }} /</span>
      </h2>
    </div>
    <!--profile text ended-->

    <!--info-->
    <div class="cotactinfo">
      <h3 class="title">{{ t('titles.contactInfo') }}</h3>
      <ul>
        <li v-for="(contact, i) in info.contact" :key="i">
          <span class="icon"><i :class="['fa - solid', contact.icone]"></i></span>
          <span class="text">{{ t(contact.value) }}</span>
        </li>
      </ul>
    </div>

    <!--education-->
    <div class="cotactinfo education">
      <h3 class="title">{{ t('titles.education') }}</h3>
      <ul>
        <li v-for="(education, i) in info.education" :key="i">
          <h5>{{ t(education.from) }} - {{ t(education.to) }}</h5>
          <h4>{{ t(education.level) }}</h4>
          <h4>{{ t(education.schoolName) }}</h4>
        </li>
      </ul>
    </div>
    <div class="contactinfo lang">
      <h3 class="title">{{ t('titles.languages') }}</h3>

      <ul>
        <li v-for="(languages, i) in info.languages" :key="i">
          <span class="text">{{ t(languages.language) }}</span>
          <span class="percent">
            <div v-percent="languages.percent"></div>
          </span>
        </li>
      </ul>
    </div>
    <!--lift side ended-->
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref } from 'vue'
import imag from '@/assets/images/image.png'
const img = ref(imag)
import data from '@/locales/en.json'
const info = ref({ ...data })
</script>
