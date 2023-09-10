<script>
	/** @type {import("@prismicio/client").Content.CardFrontSlice} */
	export let slice;
</script>

<section class="inner-card" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <div class="name">
        <p class="first-name">{slice.primary.firstname}</p>
        <p class="last-name">{slice.primary.lastname}</p>
    </div>
    <span class="glare"></span>
    <img class="turn" src="/img/turn.svg" alt="Click to turn card">
</section>


<style>
    /* Front of card */
    .inner-card{
        height: 34rem;
        /* height: auto; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        will-change: transform, filter;
        /* float: none; */
        transform: rotateX(0deg) rotateY(0deg) scale(1);
        perspective-origin: 0 0;
        box-sizing: border-box;
        overflow: hidden;
        filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.3));
        background: radial-gradient(circle, rgba(4,5,25,0.3) 0%, rgba(255,255,255,0.1) 100%);
        border-radius: var(--card-border-radius);
        backdrop-filter: blur(10px);
        box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.25);
        transition: all 0.1s ease-out;
    }

    .inner-card:before{
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

    section span{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: all 0.1s ease-out;
        opacity: 0.1;
        pointer-events: none;
        height: 100%;
        border-radius: 14px;
        z-index: 9999;
        mix-blend-mode: hard-light;
        background: radial-gradient(circle at 50% 50%, rgb(199 198 243), transparent);
    }

    .name{
        --b: 2px;
        --s: 40px;
        --g: 28px;
        --c: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: calc(var(--b) + var(--g));
        background-image:
            conic-gradient(from 180deg at top var(--b) right var(--b),#0000 25%,var(--c) 0),
            conic-gradient(from 0deg at bottom var(--b) left var(--b),#0000 25%,var(--c) 0);
        background-position: calc(100% - var(--_p,0%)) var(--_p,0%), var(--_p,0%) calc(100% - var(--_p,0%));
        background-size: var(--s) var(--s);
        background-repeat: no-repeat;
        transition:
            background-position .3s var(--_i,.3s),
            background-size .3s calc(.3s - var(--_i,.3s));
    }

    .inner-card:hover .name{
        background-size: calc(100% - var(--g)) calc(100% - var(--g));
            --_p: calc(var(--g)/2);
            --_i: 0s;
    }

    .first-name, .last-name{
        font-size: 2.8em;
        font-weight: normal;
        line-height: 0.9;
        position: relative;
        text-transform: uppercase;
        white-space: nowrap;
        word-break: break-all;
    }

    .first-name::after{
        content: "Tristan";
        white-space: pre;
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #ffffff;
    }

    .last-name::after{
        content: "De Muijnck";
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
    }

    .turn{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        width: 2rem;
        height: 2rem;
    }
</style>
