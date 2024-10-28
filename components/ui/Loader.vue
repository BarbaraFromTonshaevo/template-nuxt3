<template>
    <div class="loader"></div>
</template>

<style>
.loader {
	margin: 0 auto;
    width: 48px;
    height: 48px;
    /* border: 5px solid var(--icons-red); */
    border-bottom-color: transparent;
    border-radius: 50%;
    display: flex;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>