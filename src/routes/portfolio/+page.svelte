<script>
	import HeaderButton from "$lib/components/HeaderButton.svelte";
	import Showcase from "$lib/components/Showcase.svelte";

</script>
<svelte:head>
  <title>
    Gemarie's Portfolio
  </title>
</svelte:head>


<div class=' w-full h-fit px-[50px] '>
  <div class=" italiana font-normal text-[70px] text-coffee-white w-full flex justify-center items-center ">
    MY PROJECTS
  </div>

  <div class=" w-full flex justify-center items-center mt-[55px] ">
    <div class=" w-[975px] flex justify-center items-center raleway font-normal text-[20px] tracking-wide text-center ">
      Here are some of the designs that I created in our OJT and also some posters from our school subject.
    </div>
  </div>

  <!-- green coffee  -->
  <Showcase />

  <Showcase right={true} title={'Quartz'} description={'A website that offers a variety of luxury destinations.'} link={'https://www.figma.com/proto/sPq6USZFPtmv9SrwZnKqcm/QUARTZ?type=design&node-id=3-18&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=3%3A18'} image={'laptopquartz.png'} />

  <Showcase right={false} title={'South Moonshine'} description={'A website for indie games.'} link={'https://www.figma.com/proto/gugAQj5r2Xh8jsc8ogKsQn/South_Moonshine?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2'} image={'laptopmoonshine.png'} />

  <Showcase right={true} title={'SunRice'} description={'A website that offers different types of healthy rice and promoting supporting local.'} link={'https://www.figma.com/proto/FZtt1yCWHTdQVEUZTUTXKf/Sunrice?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2'} image={'laptopsunrice.png'} />

  <Showcase right={false} title={'Lipad'} description={'A website for booking flights in different countries.'} link={'https://www.figma.com/proto/dVplNG44JNyhZgFVb2acZ1/Lipad_Website?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2'} image={'laptoplipad.png'} />

  <Showcase right={true} title={'Backbone Creatives'} description={'A website that offers digital marketing and designing.'} link={'https://www.figma.com/proto/6NhMvxyCjN1IFEjDWzkR0m/Backbone?type=design&node-id=1-2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&hide-ui=1'} image={'laptopbackbone.png'} />
  
  <Showcase right={false} title={'Colloquium Posters'} description={'A poster for countdown and name of presenters.'} link={'https://drive.google.com/drive/folders/1ktRLMglnb_lRj2FoH6XZ3OLRRLSM_9kd?usp=drive_link'} image={'colloquiumposters.png'} />

</div>