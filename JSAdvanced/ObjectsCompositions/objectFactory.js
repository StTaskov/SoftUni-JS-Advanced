function solve (library, arr){
    let result = []
    for (el of arr){
        const composed = Object.assign({}, el.template)
        for (let part of composed){
            composed[part] = library[part]
        }
        result.push(composed)
    }

    return result 
}

solve(library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  })