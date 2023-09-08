<script>
	/** @type {import("@prismicio/client").Content.CardBackSlice} */
	export let slice;
</script>

<section class="inner-card-backface" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <span class="flip-inner-card">
        <div class="img-wrapper">
            <img src={slice.primary.picture.url} alt="{slice.primary.picture.alt}" width=200 height=300>
        </div>

        <article>
            {#each slice.items as item}
                <p>{item.infoline}</p>
            {/each}
        </article>
    </span>
</section>

<style>
    /* Back of card */
    .inner-card-backface{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: rotateX(0) rotateY(0deg) scale(1) translateZ(-4px);
        position: absolute;
        box-sizing: border-box;
        transition: all 0.1s ease-out;
        will-change: transform, filter;
        width: 100%;
        height: 34rem;
        box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.25);
        border-radius: var(--card-border-radius);
        background: radial-gradient(circle, rgba(4,5,25,0.3) 0%, rgba(255,255,255,0.1) 100%);
        backdrop-filter: blur(10px);
    }

    .inner-card-backface:before{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: var(--card-border-radius);
        padding: 3px;
        background: var(--card-bg);
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
    }

    .flip-inner-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: rotateY(180deg);
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
</style>
