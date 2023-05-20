<template>
    <nav id="navbar" class="navbar">
        <Logo/>
        <div v-if="isLoggedIn" class="dropdown">
            <div @click="toggleDropdown" class="dropdown-btn">
                <font-awesome-icon icon="fa-solid fa-circle-user" size="2x" style="pointer-events: none;"/>
            </div>
            <ul id="dropdown" class="dropdown-content">
                <li>
                    <div>
                        <p class="label">Logged as</p>
                        <p>{{ getAuth().currentUser.email }}</p>
                    </div>
                </li>
                <hr>
                <li style="color: var(--color-primary)">
                    <font-awesome-icon icon="fa-solid fa-dumbbell"/>
                    <RouterLink to="/app" style="color: var(--color-primary)">Go to app →</RouterLink>
                </li>
                <li>
                    <font-awesome-icon icon="fa-solid fa-sign-out-alt"/>
                    <a @click.prevent="logout">Logout</a>
                </li>
            </ul>
        </div>
        <Button v-else label="Sign In" :onClick="navigateToAuth"/>
    </nav>
</template>

<script setup>
    import { getAuth } from "firebase/auth";
    import router from "../router";
    import Logo from "../components/Logo.vue";
    import Button from "../components/Button.vue";

    const props = defineProps({
        isLoggedIn: {
            type: Boolean,
            required: true,
        },
        logout: {
            type: Function,
            default: () => {},
        },
    });

    function navigateToAuth() {
        router.push("/auth");
    };

    function toggleDropdown() {
        document.getElementById("dropdown").classList.toggle("show");
    }

    window.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            let dropdown = document.getElementById("dropdown");
            if (dropdown) {
                if (dropdown.classList.contains("show")) {
                    dropdown.classList.remove("show");
                }
            }
        }
    });
</script>

<style scoped>
    .navbar {
        height: 4em;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2.85em 5%;
        backdrop-filter: blur(1em);
        transition: background-color 300ms;
        z-index: 100;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-btn {
        color: var(--color-primary);
        transition: filter 300ms;
        cursor: pointer;
    }

    .dropdown-btn:hover {
        filter: opacity(50%);
    }

    .dropdown-content {
        display: none;
        gap: 1em;
        padding: 1.5em 0;
        position: absolute;
        right: 0;
        margin-top: .5em;
        font-family: var(--font-family-outfit);
        font-size: 1.1em;
        font-weight: 500;
        background-color: var(--color-30);
        border-radius: 1em;
        box-shadow: var(--box-shadow);
        min-width: 16em;
    }
    
    .dropdown-content.show {
        display: grid;
    }

    .dropdown-content li {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 6fr 2fr;
        gap: .5em;
        padding: 0 1em;
    }

    .dropdown-content li:first-child {
        grid-template-columns: 3fr 1fr;
    }

    .label {
        color: var(--color-text-alt);
        font-size: .75em;
    }
</style>