<template>
  <div class="home">
    <h2>Simple grid system</h2>
    <div>Difference between col- and flex- classes</div>
    <table>
      <tr>
        <th>category</th>
        <th>col-</th>
        <th>flex-</th>
      </tr>
      <tr>
        <td>Responsive design</td>
        <td>Yes</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>will try to best fit the content when no size specific (xs,sm,md,lg,xl) prefix used in class</td>
        <td>No</td>
        <td>Yes</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home"
};
</script>
