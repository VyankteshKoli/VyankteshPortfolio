<script>
  import { toggleSpace } from 'tv.js';
</script>

<button class="remote-trigger cursor-pointer" on:click={() => toggleSpace()}>
  <img
    loading="lazy"
    src="remote-control.svg"
    alt="remote"
    width="32"
    height="32" />
</button>
