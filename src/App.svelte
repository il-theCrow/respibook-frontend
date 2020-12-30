<script>
  import { Router, Route} from "svelte-routing";
  import Landing from "./views/Landing.svelte";

  export let url = "";
</script>

<Router {url}>
  <!-- Landing -->
  <Route path="/" component="{Landing}" />
</Router>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
