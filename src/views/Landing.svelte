<script>
  import Logo from "../components/Logo.svelte";
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

    <!-- Section: Search & shortcuts -->
    <section class="pb-20 bg-gray-300 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full xl:w-8/12 px-4 text-center mx-auto">
            <div class="relative flex flex-col min-w-0 break-words bg-gray-200 dark:bg-gray-700 w-full mb-8 shadow-lg rounded-lg">
              <input
                class="px-5 py-3 text-2xl
                  text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-700
                    bg-transparent "
                id="search"
                type="search"
                placeholder="Cerca"/>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Section: Categories -->

    <!-- Section: Seasonal -->

    <!-- Footer -->

  </main>
</div>
