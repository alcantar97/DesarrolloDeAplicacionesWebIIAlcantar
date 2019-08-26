interface Lakes{
    name:string,
    area:number,
    length:number,
    depth:number,
    isFreshwater:boolean,
    countries:string[]
}

let firstLake: Lakes = {
    name:'Caspian Sea',
    length: 1199,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Kazakhstan','Russia','Turkmenistan','Azerbaijan','Iran']
}