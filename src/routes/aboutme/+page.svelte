<script>
	import HeaderButton from "$lib/components/HeaderButton.svelte";

</script>
<svelte:head>
  <title>
    About Gemarie
  </title>
</svelte:head>

<div class=' w-full h-fit px-[50px] '>
  <div class=" italiana font-normal text-[70px] text-coffee-white w-full flex justify-center items-center ">
    ABOUT ME
  </div>

  <!-- profile  -->
  <div class=" w-full h-fit flex justify-center items-center mt-[40px] ">
    <div class=" w-2/5 h-fit flex justify-center items-center ">
      <div class=" w-[300px] h-[455px] rounded-tr-[100px] relative ">
        <img class=" absolute top-0 left-0 z-10 w-full h-full " src="gem2.png" alt="Gemarie pic">

        <div class=" w-[300px] h-[455px] overflow-hidden rounded-tr-[100px] border-[3px] border-coffee-white absolute -top-[30px] -right-[25px] "></div>
      </div>

    </div>

    <div class=" w-3/5 h-fit ">
      <div class=' italiana text-coffee-white font-normal text-[50px] leading-[60px] relative '>
        <div class=" absolute z-10 ">
          Profile
        </div>
        <div class=" opacity-0 ">
          Profile
        </div>
        <div class=" absolute w-[110px] h-[30px] bg-pale top-[25px] left-[5px] "/>
      </div>

      <div class=" flex flex-col gap-y-[15px] mt-[25px] ">
        <p class=" raleway font-normal text-[20px] leading-[25px] ">
          Name: Gemarie Magtangob
        </p>

        <p class=" raleway font-normal text-[20px] leading-[25px] ">
          Age: 23 years of age
        </p>
        
        <p class=" raleway font-normal text-[20px] leading-[25px] ">
          Birth Place: Valenzuela City
        </p>
        
        <hr>

        <p class=" indent-6 raleway font-normal text-[20px] leading-normal ">
          Graduated with a degree of BS in Information Technology in Pamantasan ng Lungsod ng Valenzuela. I did experienced on how to design and create and have a real client in UI/UX Design from my last company I was as a UI/UX Web designer intern. Figma is the best tool I am using for my projects and designs.
        </p>
      </div>
    </div>
  </div>

  <div class=" w-full flex flex-col items-center mt-[70px]">
    <div class=" w-[1114px] ">
      <div class=' italiana text-coffee-white font-normal text-[50px] leading-[60px] relative '>
        <div class=" absolute z-10 ">
          Application I used:
        </div>
        <div class=" opacity-0 ">
          Application I used:
        </div>
        <div class=" absolute w-[377px] h-[30px] bg-pale top-[25px] left-[5px] "/>
      </div>
    </div>

    <div class=" w-[1114px] raleway font-normal text-[20px] leading-[35px] ">
      Here are some applications that I know how to use, I'm using it in designing a website and some graphics too.
    </div>
    
    <div class=" w-full flex justify-center items-center gap-x-[70px] mt-[50px] ">
      <img src="figlogo.png" alt="Figma Logo">
      <img src="pslogo.png" alt="Photoshop Logo">
      <img src="canvalogo.png" alt="Canva Logo">
      <img src="lrlogo.png" alt="Lightroom Logo">
    </div>
  </div>

</div>