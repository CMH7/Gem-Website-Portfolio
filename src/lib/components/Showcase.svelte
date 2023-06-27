<script>
  export let right = false
  export let image = 'laptopgreencoffee.png'
  export let title = 'The Green Coffee'
  export let description = 'A re-design website of The Green Coffee Shop that offers different kinds of drinks and sweets.'
  export let link = 'https://www.figma.com/proto/G6NXzYIvqcDebgdXUUaWTU/The_Green_Coffee?type=design&node-id=1-2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2&hide-ui=1'
</script>

<div class=" w-full flex { !right ? '' : ' flex-row-reverse '} justify-around items-center mt-[120px] ">
  <!-- circles and image -->
  <div class=" relative flex justify-center items-center group rounded-full hover:bg-orchid ">
    <div class="transition-all w-[500px] h-[500px] border { right ? ' border-orchid ' : ' border-coffee-white ' } rounded-full absolute top-0 -left-[25px] group-hover:-left-[100px] " />
    <div class="transition-all w-[500px] h-[500px] border { right ? ' border-orchid ' : ' border-coffee-white ' } rounded-full absolute top-0 -right-[25px] group-hover:-right-[100px] " />
    <div class=" w-[500px] h-[500px] { right ? ' bg-coffee-white ' : ' bg-orchid '} rounded-full absolute " />
    <div class=" w-[500px] h-[500px] { right ? ' bg-coffee-white ' : ' bg-orchid '} rounded-full opacity-0 " />
    <img class=' absolute group-hover:scale-110 transition-all ' src={image} alt={image}>
  </div>

  <div class=" flex flex-col justify-center items-center gap-y-[25px] ">
    <div class=" raleway font-bold text-[36px] tracking-wide relative flex flex-col items-center ">
      {title}
      <div class=" w-[100px] h-[3px] bg-coffee-white " />
    </div>

    <div class=" w-[430px] poppins text-[16px] tracking-wide leading-loose text-center ">
      {description}
    </div>

    <a class=" group " href={link}>
      <div class=" group-hover:text-orchid transition-all raleway font-extrabold text-[18px] ">
        See the prototype
      </div>
      <div class=" w-0 group-hover:w-full transition-all h-[1px] bg-orchid " />
    </a>
  </div>
</div>