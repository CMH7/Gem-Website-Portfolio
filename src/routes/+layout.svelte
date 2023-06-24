<script>
  import Footer from "$lib/components/Footer.svelte";
  //@ts-ignore
	import Navbar from "$lib/components/navbar.svelte";
  import "../app.css";
</script>

<div class="bg-white w-screen h-screen p-[50px] transition-all flex flex-col justify-between overflow-x-hidden ">
  <Navbar />
  <slot/>
  <Footer />
</div>