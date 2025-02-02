<script setup>
import { ref } from 'vue'
import data from '@/assets/data/info.json'
const info = ref(data)
</script>
<template>
  <div class="right_side">
    <div class="about">
      <h2 class="title2">profile</h2>
      <p>
        {{ info.about }}
      </p>
    </div>

    <div class="about">
      <h2 class="title2">experience</h2>
      <div class="box" v-for="(experience, index) in info.experience" :key="index">
        <div class="year_company">
          <h5>{{ experience.from }} - {{ experience.to }}</h5>
          <h5>{{ experience.company }}</h5>
        </div>
        <div class="text">
          <h4>{{ experience.jobTitle }}</h4>
          <p>
            {{ experience.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="about skills">
      <h2 class="title2">professional skills</h2>
      <div class="box" v-for="(skills, index) in info.skills" :key="index">
        <h4>{{ skills.skill }}</h4>
        <div class="percent">
          <div :style="`width: ${skills.percent}%`"></div>
        </div>
      </div>
    </div>
  </div>
</template>
