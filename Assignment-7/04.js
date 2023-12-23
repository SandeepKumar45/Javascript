function arrangeAlphabeticalOrder(list){
    console.log(list.sort());
}

function arrangeBooks(arrange,...books){
    const titles = books.map((item)=>item.title)
    arrange(titles)
}

const book1 = {
    title:'The India Story',
    author:'Bimal Jalal',
    year:2001
}
const book2 = {
    title:'Listen to Your Heart: The London Adventure',
    author:'Ruskin Bond',
    year:1998
}
const book3 = {
    title:'Business of Sports: The Winning Formula for Success',
    author:'Vinit Karnik',
    year:2005
}
const book4 = {
    title:'A Place Called Home',
    author:'Preeti Shenoy',
    year:2009
}
const book5 = {
    title:'Modi @20: Dreams Meeting Delivery',
    author:'VP Venkaiah Naidu',
    year:2016
}
const book6 = {
    title:'The Struggle for Police Reforms in India',
    author:'Ex-IPS Prakash Singh',
    year:2011
}
const book7 = {
    title:'INDO-PAK WAR 1971- Reminiscences of Air Warriors',
    author:'Rajnath Singh',
    year:1992
}
const book8 = {
    title:'Leaders, Politicians, Citizens',
    author:'Rasheed Kidwai ',
    year:2000
}
const book9 = {
    title:'The Maverick Effect',
    author:'Harish Mehta',
    year:2009
}
const book10 = {
    title:'Hear Yourself',
    author:'Prem Rawat',
    year:2006
}

arrangeBooks(arrangeAlphabeticalOrder,book1,book2,book3,book4,book5,book6,book7,book8,book9,book10);

