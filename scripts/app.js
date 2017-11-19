var dataCharacters = 'data/characters.json';
new Vue({
    el: '#app',
    created: function() {
        this.getCharacters();
    },
    data: {
        characters: [],
        search: '',
    },
    methods: {
        getCharacters: function() {
            axios.get(dataCharacters).then(response => {
                this.characters = response.data
            });
        }
    },
    computed: {
        filterCharacters: function() {
            return this.characters.filter((character) => character.meaning.toLowerCase().includes(this.search))
        }
    }
});