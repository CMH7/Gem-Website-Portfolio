<script>
  import { current_page, navOpen } from "../../stores/global";
</script>

<div class=' px-[10px] lg:px-[50px] w-full flex justify-between items-center mb-[50px] '>
  <a on:click={() => current_page.set('')} href="/" class=' z-20 '>
    <h1 class=" hover:text-orchid-dark text-[30px] lg:text-[45px] text-orchid transition-all font-[400] archivo ">
      GM.
    </h1>
  </a>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => {navOpen.set(!$navOpen)}} class=" transition-all flex flex-col { $navOpen ? '' : ' gap-y-[5px] ' } lg:hidden justify-center items-center z-20 ">
    <div class=" transition-all w-[30px] h-[3px] bg-orchid origin-center { $navOpen ? ' rotate-45 ' : '' } " />
    <div class=" transition-all w-[30px] h-[3px] bg-orchid { $navOpen ? ' hidden ' : '' } " />
    <div class=" transition-all w-[30px] h-[3px] bg-orchid origin-center { $navOpen ? ' -rotate-45 ' : '' } " />
  </div>

  <!-- large nav  -->
  <div class=" hidden lg:flex justify-between items-center gap-x-[120px] ">
    <a on:click={() => current_page.set('')} href="/">
      <p class=" raleway text-orchid hover:text-orchid-dark hover:border-b-orchid-dark font-bold text-[20px] transition-all { $current_page === '' ? 'border-b border-b-orchid' : '' } ">
        HOME
      </p>
    </a>

    <a on:click={() => current_page.set('aboutme')} href="/aboutme">
      <p class=" raleway text-orchid hover:text-orchid-dark hover:border-b-orchid-dark font-bold text-[20px] transition-all { $current_page === 'aboutme' ? 'border-b border-b-orchid' : '' } ">
        ABOUT ME
      </p>
    </a>

    <a on:click={() => current_page.set('portfolio')} href="/portfolio">
      <p class=" raleway text-orchid hover:text-orchid-dark hover:border-b-orchid-dark font-bold text-[20px] transition-all { $current_page === 'portfolio' ? 'border-b border-b-orchid' : '' } ">
        PORTFOLIO
      </p>
    </a>

    <a target="_blank" href="https://drive.google.com/drive/folders/1hTXAthkHNjl7IXBYL6NBhdOxFvbMutTI">
      <p class=" raleway text-orchid hover:text-orchid-dark hover:border-b-orchid-dark font-bold text-[20px] transition-all ">
        RESUME
      </p>
    </a>
  </div>
</div>