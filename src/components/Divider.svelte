<script>
  export let reverse = false;
  export let textClass;
</script>


<div
  class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
  style="transform: translateZ(0);">
  <svg
    class="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0">
    {#if !reverse}
    <polygon
      class="fill-current {textClass}"
      points="2560 0 2560 100 0 100" />
    {:else}
    <polygon
      class="fill-current {textClass}"
      points="2560 0 0 0 0 100" />
    {/if}
  </svg>
</div>
