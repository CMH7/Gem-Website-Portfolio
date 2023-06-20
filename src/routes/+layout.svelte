<script>
  import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
</script>

<div class="bg-white w-screen h-screen px-[50px] pb-[60px] transition-all overflow-x-hidden ">
  <Navbar />
  <slot/>
  <Footer />
</div>