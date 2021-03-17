<template>
  <div id="crs">
    <h3>Course: {{ name }}</h3>
    <h3>Credits: {{ credits }}</h3>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(meeting, pos) in meetings" :key="pos"><td>{{ meeting.day }}</td><td>{{ meeting.time }}</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CourseCard extends Vue {
  @Prop() readonly name!: string;
  @Prop() readonly credits!: number;
  @Prop() readonly meetings!: string[];
}
</script>

<style>
#crs {
  display: inline-block;
  border: 2px solid hsl(30, 90%, 50%);
  border-radius: 0.5em;
  padding: 1em;
  margin: 0.6em;
  box-shadow: 3px 5px 6px 7px hsla(30, 55%, 50%, 0.4);
}

li {
  list-style: none;
  font-weight: bold;
}
</style>
