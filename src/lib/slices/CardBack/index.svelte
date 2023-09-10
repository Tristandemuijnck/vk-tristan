<script>
	/** @type {import("@prismicio/client").Content.CardBackSlice} */
	export let slice;
</script>

<section class="inner-card-backface" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <div class="flip-inner-card">
        <div class="img-wrapper">
            <img src={slice.primary.picture.url} alt="{slice.primary.picture.alt}" width=200 height=300>
        </div>

        <article>
            {#each slice.items as item}
                <p>{item.infoline}</p>
            {/each}
        </article>
        <img class="turn" src="/img/turn.svg" alt="Click to turn card">
    </div>
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

    .inner-card-backface:hover .img-wrapper{
        transform: scale(1.04);
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
    }

    .flip-inner-card{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        row-gap: 2rem;
        transform: rotateY(180deg);
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .img-wrapper{
        height: 16.5rem;
        margin-top: 2rem;
        border-radius: var(--card-border-radius);
        background: radial-gradient(circle, rgba(4,5,25,0.3) 0%, rgba(255,255,255,0.1) 100%);
        overflow: hidden;
        transition: all 0.4s ease-out;
    }

    .img-wrapper img{
        margin-top: -1.5rem;
    }

    article{
        --b: 2px;
        --s: 40px;
        --g: 20px;
        --c: #FFFFFF;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: calc(var(--b) + var(--g));
        background-image:
            conic-gradient(from 90deg at top var(--b) left var(--b),#0000 25%,var(--c) 0),
            conic-gradient(from -90deg at bottom var(--b) right var(--b),#0000 25%,var(--c) 0);
        background-position:
            var(--_p,0%) var(--_p,0%),
            calc(100% - var(--_p,0%)) calc(100% - var(--_p,0%));
        background-size: var(--s) var(--s);
        background-repeat: no-repeat;
        transition:
            background-position .3s var(--_i,.3s),
            background-size .3s calc(.3s - var(--_i,.3s));
    }

    .inner-card-backface:hover article{
        background-size: calc(100% - var(--g)) calc(100% - var(--g));
            --_p: calc(var(--g)/2);
            --_i: 0s;
    }

    article p{
        font-size: 1.2rem;
    }

    .turn{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        width: 2rem;
        height: 2rem;
    }
</style>
