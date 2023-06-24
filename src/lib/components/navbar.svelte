<script>
  import { current_page } from "../../stores/global";
</script>

<div class=' px-[50px] w-full flex justify-between items-center '>
  <a on:click={() => current_page.set('')} href="/">
    <h1 class=" hover:text-orchid-dark text-[45px] text-orchid transition-all font-[400] archivo ">
      GM.
    </h1>
  </a>

  <div class=" flex justify-between items-center gap-x-[120px] ">
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

    <a on:click={() => current_page.set('resume')} href="/resume">
      <p class=" raleway text-orchid hover:text-orchid-dark hover:border-b-orchid-dark font-bold text-[20px] transition-all { $current_page === 'resume' ? 'border-b border-b-orchid' : '' } ">
        RESUME
      </p>
    </a>
  </div>
</div>