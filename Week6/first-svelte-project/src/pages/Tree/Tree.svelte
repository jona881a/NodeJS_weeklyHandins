<script>
import Apple from "./Apple.svelte";

  let apples = ["🍎","🍏","🍎","🍏","🍎","🍏"];

  function pickApple() {
    apples.pop();
    apples = apples;
  }

</script>

<h2>I'm a Tree</h2>

{#each apples as apple}
  <Apple apple={apple}/>
{/each}

<button on:click={pickApple}>Pick an apple</button> 