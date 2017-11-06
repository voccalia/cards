var cards = new Vue({
    el: '#app',
    data: {
      cards: [
        { character: '人', pinyin: 'rén', meaning: 'Persona' },
        { character: '木', pinyin: 'mù', meaning: 'Árbol' },
        { character: '火', pinyin: 'huǒ', meaning: 'Fuego' },
        { character: '日', pinyin: 'rì', meaning: 'Sol / Día' },
        { character: '月', pinyin: 'yuè', meaning: 'Luna / Mes' },
        { character: '山', pinyin: 'shān', meaning: 'Montaña' },
        { character: '女', pinyin: 'nŭ', meaning: 'Mujer' },
        { character: '男', pinyin: 'nán', meaning: 'Hombre / Varón' }       
      ]
    }
  })