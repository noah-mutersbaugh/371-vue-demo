<template>
  <div id="app">
    <h1>VueJS Experiment by {{ me }}</h1>
    <h2>Personal Info</h2>
    Name: {{ myInfo.name }}<br />
    Semester: {{ myInfo.semester }} {{ myInfo.year }}<br />

    Courses I am taking
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, pos) in myInfo.courses" :key="pos">
          <td>{{ c.name }}</td>
          <td class="credit-number">{{ c.credits }}</td>
        </tr>
      </tbody>
    </table>

    <CourseCard
      v-for="(course, pos) in myInfo.courses"
      :key="pos"
      :name="course.name"
      :credits="course.credits"
      :meetings="course.meetings"
    ></CourseCard>

    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <hello-world msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CourseCard from "./components/CourseCard.vue";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
    CourseCard,
  },
})
export default class App extends Vue {
  readonly me = "Noah Mutersbaugh";
  readonly myInfo = {
    name: "Noah Mutersbaugh",
    semester: "Winter",
    year: 2021,
    courses: [
      /* List the classes you are taking this semester */
      {
        name: "CIS 290: Professional Responsibilities and Practices",
        credits: 3,
        meetings: [{ day: "Tuesday", time: "10-11a" }],
      },
      {
        name: "CIS 351: Computer Organization and Assembly Language",
        credits: 4,
        meetings: [
          { day: "Monday", time: "4-5:15p" },
          { day: "Wednesday", time: "6-8p" },
        ],
      },
      {
        name: "CIS 367: Computer Graphics",
        credits: 3,
        meetings: [
          { day: "Tuesday", time: "4-5:15p" },
          { day: "Thursday", time: "4-5:15p" },
        ],
      },
      {
        name: "CIS 371: Web Application Programming",
        credits: 3,
        meetings: [
          { day: "Monday", time: "1-2p" },
          { day: "Wednesday", time: "1-2p" },
          { day: "Friday", time: "1-2p" },
        ],
      },
      {
        name: "CIS 457: Data Communications",
        credits: 4,
        meetings: [{ day: "Friday", time: "8-9a" }],
      },
    ],
  };
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-flow: column;
  width: auto;
}

table,
td,
th,
tr {
  border: 1px solid black;
}

.credit-number {
  text-align: center;
}

img {
  max-width: 200px;
}
</style>
