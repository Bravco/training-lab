<template>
    <ul class="plan-list">
      <li class="plan-item">
        <div class="plan-section">
            <div class="indicators">
                <span>
                    <font-awesome-icon icon="fa-solid fa-calendar-day"/>
                    <p>4</p>
                </span>
                <span>
                    <font-awesome-icon icon="fa-solid fa-bolt"/>
                    <p>57</p>
                </span>
            </div>
            <a class="button">
                <font-awesome-icon icon="fa-solid fa-ellipsis" size="lg"/>
            </a>
        </div>
        <div class="plan-section">
            <div class="text">
                <p class="title">Title</p>
                <p class="description">description</p>
            </div>
            <a class="button">
                <font-awesome-icon icon="fa-solid fa-angle-right" size="lg"/>
            </a>
        </div>
      </li>
    </ul>
</template>

<style scoped>
    .plan-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 24em);
        gap: 2em;
    }

    .plan-item {
        width: 100%;
        height: 18em;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 1.5em 2em 2.5em 2em;
        border-radius: 1em;
        background-color: var(--color-30);
    }

    .plan-section {
        display: flex;
        justify-content: space-between;
    }

    .plan-section:first-child {
        align-items: flex-start;
    }

    .plan-section:last-child {
        align-items: flex-end;
    }

    .indicators span {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    .indicators span :not(p) {
        color: var(--color-primary);
    }

    .indicators, .text {
        display: grid;
        gap: .5em;
    }

    .title {
        font-size: 1.65em;
    }

    .description {
        font-weight: 600;
        color: var(--color-text-alt);
    }

    .button {
        background-color: var(--color-60);
        width: 2.5em;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        transition: background-color 300ms;
    }

    .button:hover {
        filter: none;
        background-color: var(--color-primary);
    }
</style>