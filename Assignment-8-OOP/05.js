function Product(name,category,price,stock){
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

function Inventory(){
    this.inventory = [];
}

Inventory.prototype.addProduct = function(product){
    if (product instanceof Product) {
        this.inventory.push(product);
        console.log(`Added ${product.name} to the inventory.`);
    }
    else{
        console.log("Add a valid product.");
    }
}

Inventory.prototype.deleteProduct = function(name){
    let idx = this.inventory.findIndex((item,index)=>{
        return item.name === name;
    })
    if (idx>=0) {
        this.inventory.splice(idx,1);
        console.log(`Deleted ${name} from the inventory.`);
    }
    else{
        console.log("Product not exist.");
    }
}

const inventory = new Inventory();

const product1 = new Product('Laptop','Electronics',899,10);
const product2 = new Product('Book','Books',20,50);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct('Laptop');


