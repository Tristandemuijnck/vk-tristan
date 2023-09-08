<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    import { calculateAngle } from '$lib/card.js'
    import { onMount } from 'svelte'

	export let data;

    let mainCard

    onMount(() => {
        let cardFront = mainCard.querySelector('.inner-card')
        let cardBack = mainCard.querySelector('.inner-card-backface')
        let glare = mainCard.querySelector('.glare')


        document.querySelectorAll('.card').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('flipped')
            })

            item.addEventListener('mouseenter', (e) => {
                calculateAngle(e, cardFront, mainCard, glare, cardBack)
            })

            item.addEventListener('mousemove', (e) => {
                calculateAngle(e, cardFront, mainCard, glare, cardBack)
            })

            item.addEventListener('mouseleave', function(e) {
                let dropShadowColor = `rgba(0, 0, 0, 0.3)`
                cardFront.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
                cardBack.style.transform =
                    `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
                cardFront.style.filter =
                    `drop-shadow(0 10px 15px ${dropShadowColor})`;
            });
        })
    })

</script>

<section class="card" bind:this={mainCard}>
    <SliceZone slices={data.slices} {components}/>
</section>


<!-- <pre>
    {JSON.stringify(data.slices, null, 2)}
</pre> -->

<style>
    .card{
        width: 85%;
        height: 100%;
        max-width: 20rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.1s ease-out;
        transform-style: preserve-3d;
        box-shadow: none;
        backface-visibility: visible;
        background: transparent;
        padding: 0;
        border: none;
        letter-spacing: 1px;
        position: relative;
    }

    :global(.card.flipped){
        transform: rotateY(180deg);
    }
</style>