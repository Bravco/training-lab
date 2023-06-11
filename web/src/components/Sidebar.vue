<template>
    <div class="event-catcher">
        <a @click.prevent="toggleActive" class="toggle-btn">
            <font-awesome-icon icon="fa-solid fa-angle-right"/>
        </a>
        <nav id="nav" class="nav">
            <ul class="nav-list">
                <li class="logo">
                    <RouterLink to="/" class="nav-link">
                        <font-awesome-icon icon="fa-solid fa-dumbbell"/>
                        <span>Training Lab</span>
                    </RouterLink>
                </li>
                <hr>
                <li v-for="(page, index) in pages" :key="index" class="nav-item">
                    <a :class="['nav-link', { 'active': selectedPageIndex == index }]" @click.prevent="selectPageIndex(index)">
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
    </div>
</template>

<script setup>
    import { getAuth } from 'firebase/auth';
    import { logout } from '../firebase';

    const props = defineProps({
        pages: {
            type: Array,
            default: [],
        },
        selectedPageIndex: {
            type: Number,
            default: 0,
        },
        selectPageIndex: {
            type: Function,
            default: () => {},
        },
    });

    function toggleActive() {
        const nav = document.getElementById("nav");
        const toggleBtn = document.querySelector(".toggle-btn");
        nav.classList.toggle("active");
        toggleBtn.classList.toggle("active");
    }

    window.addEventListener("click", function(event) {
        if (!event.target.closest(".event-catcher")) {
            const nav = document.getElementById("nav");
            const toggleBtn = document.querySelector(".toggle-btn");

            if (nav) {
                if (nav.classList.contains("active")) {
                    nav.classList.remove("active");
                }
            }

            if (toggleBtn) {
                if (toggleBtn.classList.contains("active")) {
                    toggleBtn.classList.remove("active");
                }
            }
        }
    });
</script>

<style scoped>
    span {
        white-space: nowrap;
        transform: translateX(16rem);
        transition-property: transform;
        transition-duration: 300ms;
    }

    .nav {
        min-height: 100%;
        height: 100vh;
        width: 6rem;
        position: fixed;
        padding: 2rem 1.2rem;
        overflow: hidden;
        background-color: var(--color-30);
        box-shadow: var(--box-shadow);
        transition-property: width, padding;
        transition-duration: 300ms;
        z-index: 100;
    }

    .nav.active {
        width: 18rem;
        padding: 2rem 1.7rem;
    }

    .nav.active span {
        transform: none;
    }

    .nav.active .nav-item .nav-link {
        padding: 1rem 1.6rem;
    }

    .toggle-btn {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 2rem;
        left: 5rem;
        border-radius: 100%;
        background-color: var(--color-primary);
        z-index: 101;
        transition-property: left, transform, background-color;
        transition-duration: 300ms;
    }

    .toggle-btn.active {
        left: 17rem;
        background-color: var(--color-30);
        transform: rotate(-180deg);
    }

    .toggle-btn:hover {
        filter: none;
    }

    .nav-list, .bottom {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 600;
        margin-left: .85rem;
    }

    .logo .nav-link {
        gap: 1rem;
    }

    .nav-item .nav-link {
        height: 3.5rem;
        padding: 1rem 1.3rem;
        background-color: var(--color-60);
        border-radius: .5rem;
        gap: 1.5rem;
    }

    .bottom {
        justify-content: flex-end;
        margin-top: auto;
    }

    .account {
        margin-left: 1.2rem;
    }

    .account .nav-link {
        gap: 1rem;
    }

    .account .email {
        color: var(--color-primary);
        font-weight: 600;
    }

    .account span :not(.email) {
        font-size: .75rem;
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