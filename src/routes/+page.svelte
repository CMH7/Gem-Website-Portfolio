<script>
	import Footer from "../lib/components/Footer.svelte";
	import Navbar from "../lib/components/navbar.svelte";
</script>

<svelte:head>
  <title>
    Gemarie UI/UX Desinger
  </title>
</svelte:head>


<div class=" w-full h-full ">
  <Navbar />

  <!-- center  -->
  <div class=" w-full h-fit px-[100px] py-[50px] flex items-center  ">
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
        <p class=" archivo font-[400] text-[60px] leading-tight ">
          Hi! I'm Gemarie
        </p>
        
        <p class=" archivo font-[400] text-[50px] leading-tight text-coffee-white mt-[8px] ">
          UI/UX Designer
        </p>
        
        <p class=" raleway font-[500] text-[20px] leading-[40px] w-[500px] mt-[30px] ">
          I start enjoying designing because it makes me think, widen my skills and creativity.
        </p>

        <!-- about me button -->
        <div class=" absolute w-full flex justify-end items-center -bottom-[200px] ">

          <a href="/aboutme" class=" group ">
            <div class=" flex justify-center items-center ">
              <p class=" raleway font-[500] text-[30px] leading-[60px] mr-[33px] group-hover:mr-[20px] transition-all ">
                About me
              </p>
  
              <div class=" group-hover:bg-coffee-white transition-all rounded-full flex justify-center items-center w-[150px] h-[150px] border-[2px] border-black ">
                <img src="right-arrow.png" alt="arrow icon">
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  </div>

  <Footer />
</div>