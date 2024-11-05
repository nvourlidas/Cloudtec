<template>
    <div class="main">
<svg width="80%" height="80%" viewBox="0 0 1000 1000" fill="none" class="svgcloud">
        <!-- Main path -->
        <path id="animated-path"
            d="M55 135.5C15.8 135.5 8 104.5 9 89C9 51.8 43.3333 44.5 60.5 45.5C60.5 13.5 94.1667 7.50001 111 8.50001C145 8.50001 154.833 31.5 155.5 43C188.3 43 196.5 73.6667 196.5 89C196.5 126.2 165.5 135.5 150 135.5"
            stroke="#FFC947" stroke-width="12" transform="translate(150, 150) scale(3)" />

        <!-- First additional SVG (43x85) moved down -->
        <g transform="translate(235, 365) scale(3)">
            <path d="M14 23V37H37V83" stroke="#FFC947" stroke-width="8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4287 0L0 14.8213L14.8213 28.25L28.25 13.4287L13.4287 0ZM13.8746 7.25894L8 14.0772L14.8183 19.9518L20.6929 13.1335L13.8746 7.25894Z" fill="#FFC947"/>
           </g>

        <!-- Second additional SVG (11x67) moved down and closer -->
        <g transform="translate(370, 466) scale(3)">
            <path class="animated-path" d="M10 0V55C10 63 5.33333 63.3333 3 62.5" stroke="#FFC947" stroke-width="8" />
        </g>

        <!-- Third additional SVG (31x136) moved down and closer -->
        <g transform="translate(420, 340) scale(3)">
            <path class="animated-path" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM12.5 20C16.6421 20 20 16.6421 20 12.5C20 8.35786 16.6421 5 12.5 5C8.35786 5 5 8.35786 5 12.5C5 16.6421 8.35786 20 12.5 20Z" fill="#FFC947"/>
    <path class="animated-path" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 123C19.4036 123 25 117.404 25 110.5C25 103.596 19.4036 98 12.5 98C5.59644 98 0 103.596 0 110.5C0 117.404 5.59644 123 12.5 123ZM12.5 118C16.6421 118 20 114.642 20 110.5C20 106.358 16.6421 103 12.5 103C8.35786 103 5 106.358 5 110.5C5 114.642 8.35786 118 12.5 118Z" fill="#FFC947"/>
    <path class="animated-path" d="M12 22V102.5" stroke="#FFC947" stroke-width="8"/>
        </g>

        <g transform="translate(490, 466) scale(3)">
            <path class="animated-path" d="M8 0V54.7688C8 62.9114 12.6667 63.3315 15 62.5237" stroke="#FFC947"
                stroke-width="8" />
        </g>

        <g transform="translate(550, 355) scale(3)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 25C33.4036 25 39 19.4036 39 12.5C39 5.59644 33.4036 0 26.5 0C19.5964 0 14 5.59644 14 12.5C14 19.4036 19.5964 25 26.5 25ZM26.5 20C30.6421 20 34 16.6421 34 12.5C34 8.35786 30.6421 5 26.5 5C22.3579 5 19 8.35786 19 12.5C19 16.6421 22.3579 20 26.5 20Z" fill="#FFC947"/>
    <path class="animated-path" d="M4.5 88.5V41.5H25V23" stroke="#FFC947" stroke-width="8"/>
        </g>


    </svg>
    <h1 class="cloud">Cloudtec</h1>
</div>
</template>

<script>
export default {
    name: "SvgLoader"
}
</script>


<style>

.svgcloud{
    margin-left: 4%;
}
.main{
    width: 88%;
    height: 90vh;
    grid-template-columns: 1fr;
    text-align: center;
    color: #FFC947;
}

.cloud{
    margin-top: -8%;
    font-size: 5rem;
}
    #animated-path {
        stroke-dasharray: 1800;
        /* Adjusted for the larger size */
        stroke-dashoffset: 1800;
        animation: draw 10s linear forwards;
    }

    .animated-path {
        stroke-dasharray: 600;
        /* Adjusted for smaller paths */
        stroke-dashoffset: 600;
        animation: draw 10s linear forwards;
    }


    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }
</style>