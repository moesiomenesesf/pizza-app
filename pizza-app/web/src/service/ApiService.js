const hrefBase = "http://localhost:3333";
const ApiService = {

    findPizzaRecomendada: () => {
        return fetch(`${hrefBase}/recomendacao`)
            .then(res => res.json());
    },

    findMassas: () => {
        return fetch(`${hrefBase}/massas`)
            .then(res => res.json());
    },

    findTamanhos: () => {
        return fetch(`${hrefBase}/tamanhos`)
            .then(res => res.json());
    },

    findSabores: () => {
        return fetch(`${hrefBase}/sabores`)
            .then(res => res.json());
    },

    findIncrementos: () => {
        return fetch(`${hrefBase}/incrementos`)
            .then(res => res.json());
    },

    // findPostBy: postId => {
    //     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //         .then(res => res.json());
    // },
}

export default ApiService;