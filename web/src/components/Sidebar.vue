<template>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item">
                <RouterLink to="/" class="nav-link">
                    <font-awesome-icon icon="fa-solid fa-dumbbell"/>
                    <span>Training Lab</span>
                </RouterLink>
            </li>
            <hr>
            <li class="nav-item">
                <a class="nav-link active" href="">
                    <font-awesome-icon icon="fa-solid fa-cube"/>
                    <span>Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="">
                    <font-awesome-icon icon="fa-solid fa-user"/>
                    <span>Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="">
                    <font-awesome-icon icon="fa-solid fa-sign-out-alt"/>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    span {
        white-space: nowrap;
        transform: translateX(16em);
        transition-property: transform;
        transition-duration: 300ms;
    }

    .nav {
        height: 100vh;
        width: 6em;
        position: fixed;
        padding: 2em 1.2em;
        overflow: hidden;
        background-color: var(--color-30);
        transition-property: width, padding;
        transition-duration: 300ms;
    }

    .nav:hover {
        width: 16em;
        padding: 2em 1.7em;
    }

    .nav:hover span {
        transform: none;
    }

    .nav:hover .nav-item:not(:first-child) .nav-link {
        padding: 1em 1.6em;
    }

    .nav-list {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .nav-item:first-child {
        font-size: 1.5em;
        font-weight: 600;
        margin-left: .6em;
    }

    .nav-item:first-child .nav-link {
        gap: 1em;
    }

    .nav-item:not(:first-child) .nav-link {
        padding: 1em 1.3em;
        background-color: var(--color-60);
        border-radius: .5em;
        gap: 1.5em;
    }

    .nav-item:last-child {
        margin-top: auto;
    }

    .nav-link {
        display: flex;
        align-items: center;
        transition-property: padding, filter;
        transition-duration: 300ms;
    }
</style>