var dataCharacters = 'data/characters.json';
new Vue({
    el: '#characters',
    created: function() {
        this.getCharacters();
    },
    data: {
        characters: []
    },
    methods: {
        getCharacters: function() {
            axios.get(dataCharacters).then(response => {
                this.characters = response.data
            });
        }
    }
});