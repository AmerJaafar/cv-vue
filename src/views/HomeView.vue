<script setup>
import { useI18n } from 'vue-i18n'
import leftSide from '@/components/leftSide.vue'
import rightSide from '@/components/rightSide.vue'

const { locale } = useI18n()

// استعادة اللغة المفضلة من localStorage (إذا كانت موجودة)
const savedLang = localStorage.getItem('lang') || 'en'
locale.value = savedLang

// دالة لتغيير اللغة
function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang) // حفظ اللغة المفضلة
}
</script>

<template>
  <!-- زر تبديل اللغة -->
  <div class="language-switcher">
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('ar')">العربية</button>
  </div>
  <main>
    <leftSide />
    <rightSide />
  </main>
</template>
<style>
.language-switcher {
  text-align: right;
  padding: 10px;
  background-color: #f0f0f0;
}

.language-switcher button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
