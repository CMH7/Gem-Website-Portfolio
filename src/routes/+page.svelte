<script>
	import HeaderButton from "$lib/components/HeaderButton.svelte";
</script>

<svelte:head>
  <title>
    Gemarie UI/UX Desinger
  </title>
</svelte:head>

<div class=" w-full h-fit ">
  <!-- center  -->
  <div class=" w-full px-[100px] py-[50px] flex items-center  ">
    <!-- image and border back  -->
    <div class=" w-3/5 h-fit flex justify-center items-center ">
      <div class=" w-[400px] h-[540px] relative ">
        <img class=" w-full h-full rounded-bl-[100px] rounded-tr-[100px] absolute z-10 " src="gem1.jpg" alt="Gemarie pic">
  
        <!-- square lines behind -->
        <div class=" w-full h-full rounded-bl-[100px] rounded-tr-[100px] border-[3px] border-coffee-white absolute -top-[30px] -right-[30px] " />
      </div>
    </div>

    <!-- name and title and button  -->
    <div class=" w-3/5 h-fit flex justify-center items-center ">
      <div class=" w-full flex flex-col relative ">
        <p class=" archivo text-orchid font-[400] text-[40px] leading-tight ">
          Hi! I'm 
          <br>
          <span class=" text-8xl text-black ">
            Gemarie
          </span>
        </p>
        
        <p class=" archivo font-[400] text-[50px] leading-tight text-coffee-white mt-[8px] ">
          UI/UX Designer
        </p>
        
        <p class=" raleway font-[500] text-[20px] leading-[40px] w-[500px] mt-[30px] ">
          I started to enjoy designing because it makes me think, widen my skills and creativity.
        </p>

        <!-- about me button -->
        <div class=" w-full flex justify-end items-center ">
          <HeaderButton data={{link: 'aboutme', title: 'About me'}} inverted={false} />
        </div>
      </div>
    </div>
  </div>
</div>