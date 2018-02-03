var dataCharacters = 'data/characters.json';
new Vue({
    el: '#app',
    created: function() {
        this.getCharacters();
    },
    data: {
        characters: [],
        search: '',
        filterLevel: '',
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
            return this.characters.filter((character) => {
                // Using normalize based on https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
                return  character.meaning.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(this.search) 
                        || character.pinyin.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(this.search)
                        || character.hanzi.match(this.search)
            });
        }

    }

});