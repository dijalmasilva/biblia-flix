import {createActor, createMachine} from "xstate";

const menuMachine = createMachine({
    id: 'menu',
    initial: 'home',
    context: {
        search: 'moises',
    },
    states: {
        home: {
            on: {
                SEARCH: 'search',
                MENU: 'menu',
            },
        },
        search: {
            on: {
                MENU: 'menu',
                HOME: 'home',
            }
        },
        menu: {
            on: {
                HOME: 'home',
                SEARCH: 'search',
            }
        },
        book: {
            on: {
                HOME: 'home',
                SEARCH: 'search',
                MENU: 'menu',
            }
        },
    },
    on: {
        BOOK: '.book',
    }
})

const menuActor = createActor(menuMachine).start();
export default menuActor;