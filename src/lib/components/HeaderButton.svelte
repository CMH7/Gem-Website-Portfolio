<script>
  import { current_page } from "../../stores/global";

  export let data = {
    link: '',
    title: ''
  }

  export let inverted = false;
</script>

<a on:click={() => current_page.set(data.link)} href="/{data.link}" class=" group ">
  <div class=" flex {inverted ? 'flex-row-reverse' : ''} justify-center items-center gap-x-[25px] group-hover:gap-x-[15px] transition-all ">
    <p class=" raleway font-[500] text-[30px] leading-[60px] transition-all ">
      {data.title}
    </p>

    <div class=" group-hover:bg-coffee-white transition-all rounded-full flex justify-center items-center w-[80px] h-[80px] border border-black ">
      <img class=" {inverted ? '-scale-100' : ''} w-[25px] " src="right-arrow.png" alt="arrow icon">
    </div>
  </div>
</a>