<script>
  import Logo from "../components/Logo.svelte";
  import Icon from "svelte-awesome";
  import { search, arrowRight } from "svelte-awesome/icons"

  // Mock data
  let categories = [
    {
      "label": "Antipasti",
      "img": "assets/img/antipasti.jpg"
    },
    {
      "label": "Primi",
      "img": "assets/img/primi.jpg"
    },
    {
      "label": "Veggie",
      "img": "assets/img/veggie.jpg"
    },
    {
      "label": "Secondi di Carne",
      "img": "assets/img/carne.jpg"
    },
    {
      "label": "Secondi di Pesce",
      "img": "assets/img/pesce.jpg"
    },
    {
      "label": "Dolci",
      "img": "assets/img/dolci.jpg"
    },
    {
      "label": "Extra",
      "img": "assets/img/panino.jpg"
    },
    {
      "label": "Cocktail",
      "img": "assets/img/moscowmule.jpg"
    },
  ]
</script>

<div>
  <main>
    <!-- Logo -->
    <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="background-image: url(/assets/img/d36d462db827833805497d9ea78a1343.jpg);"
      >
        <span
          id="overlay"
          class="w-full h-full absolute opacity-25 bg-white dark:bg-gray-800"
        ></span>
      </div>
      <div class="container relative mx-auto h-full">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <Logo textClass="text-black dark:text-gray-200"/>
            <h3 class="text-gray-800 dark:text-gray-300 float-right text-2xl">di Giorgia e Umberto</h3>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          version="1.1" viewBox="0 0 2560 100" x="0" y="0"
        >
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>

    <!-- Section: Search -->
    <section class="pb-15 bg-gray-700">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-10/12 lg:w-8/12 px-4 text-center mx-auto">
            <div class="relative bg-gray-100 dark:bg-gray-800 p-2 flex rounded-lg shadow-xl opacity-90">
              <span class="w-auto flex justify-end items-center text-gray-800 dark:text-gray-200 pr-4 pl-2">
                <Icon data={search} scale=1.5/>
              </span>
              <input class="w-full text-gray-800 placeholder-gray-700 dark:text-gray-200 dark:placeholder-gray-400 bg-transparent focus:outline-none text-lg" type="search" placeholder="Cerca">
              <button class="bg-blue-400 hover:bg-blue-300 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-full text-white items-center justify-center w-10 h-10">
                <Icon data={arrowRight} scale=1.2 />
              </button>
          </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Section: Categories -->
    <section class="bg-gray-300 pt-20">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center text-center mb-8">
          <div class="w-full px-4">
            <h2 class="text-4xl font-thin">Ricette</h2>
          </div>
        </div>
        <div class="flex flex-wrap">
          {#each categories as {label, img}}
          <!-- Card -->
            <div class="w-full md:w-6/12 lg:w-4/12 mb-12">
              <div class="mx-auto relative bg-white dark:bg-black shadow-lg rounded-lg group h-60 w-80 flex justify-center items-center">
                <div
                  class="rounded-lg h-full w-full absolute z-10 bg-cover bg-center opacity-90 hover:opacity-70 transition-all duration-500 ease-in-out"
                  style="background-image: url('{img}')"
                ></div>
                <h4 class="font-bold text-white absolute z-20 pointer-events-none text-2xl">
                  {label}
                </h4>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Section: Seasonal -->

    <!-- Footer -->

  </main>
</div>
