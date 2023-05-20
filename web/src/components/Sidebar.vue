<template>
    <nav class="nav">
        <ul class="nav-list">
            <li class="logo">
                <RouterLink to="/" class="nav-link">
                    <font-awesome-icon icon="fa-solid fa-dumbbell"/>
                    <span>Training Lab</span>
                </RouterLink>
            </li>
            <hr>
            <li v-for="page in pages" class="nav-item">
                <a class="nav-link" :class="{ 'active': selectedPageIndex == page.index }" @click.prevent="selectPage(page.index)">
                    <font-awesome-icon :icon="'fa-solid ' + page.icon"/>
                    <span>{{ page.title }}</span>
                </a>
            </li>
            <ul class="bottom">
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="logout">
                        <font-awesome-icon icon="fa-solid fa-sign-out-alt"/>
                        <span>Logout</span>
                    </a>
                </li>
                <hr>
                <li class="account">
                    <p class="nav-link" href="">
                        <font-awesome-icon icon="fa-solid fa-circle-user" size="lg"/>
                        <span>
                            <p>Logged as</p>
                            <p class="email">{{ getAuth().currentUser.email }}</p>
                        </span>
                    </p>
                </li>
            </ul>
        </ul>
    </nav>
</template>

<script setup>
    import { getAuth } from 'firebase/auth';

    const props = defineProps({
        pages: {
            type: Array,
            default: [],
        },
        selectedPageIndex: {
            type: Number,
            default: 0,
        },
        selectPage: {
            type: Function,
            default: () => {},
        },
        logout: {
            type: Function,
            default: () => {},
        },
    });
</script>

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
        width: 18em;
        padding: 2em 1.7em;
    }

    .nav:hover span {
        transform: none;
    }

    .nav:hover .nav-item .nav-link {
        padding: 1em 1.6em;
    }

    .nav-list, .bottom {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .logo {
        font-size: 1.5em;
        font-weight: 600;
        margin-left: .6em;
    }

    .logo .nav-link {
        gap: 1em;
    }

    .nav-item .nav-link {
        height: 3.5em;
        padding: 1em 1.3em;
        background-color: var(--color-60);
        border-radius: .5em;
        gap: 1.5em;
    }

    .bottom {
        justify-content: flex-end;
        margin-top: auto;
    }

    .account {
        margin-left: 1.2em;
    }

    .account .nav-link {
        gap: 1em;
    }

    .account .email {
        color: var(--color-primary);
        font-weight: 600;
    }

    .account span :not(.email) {
        font-size: .75em;
        color: var(--color-text-alt);
    }

    .nav-link {
        display: flex;
        align-items: center;
        transition-property: padding, filter;
        transition-duration: 300ms;
    }

    .nav-link.active {
        color: var(--color-primary);
    }
</style>