// Abstração dos meus bixo
// Crie uma classe de uma abstração (função construtora Animal)
function Animal(name, favoriteToy) {
  this.name = name;
  this.favoriteToy = favoriteToy;
}

// Crie classes que sejam herdeiras (função construtora herdeira Dog)
function Dog(name, favoriteToy) {
  Animal.call(this, name, favoriteToy);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adicionando frescura para retornar uma onomatopeia do bixo
Dog.prototype.makeSound = function() {
  return "Woof!";
}

// Crie classes que sejam herdeiras (função construtora herdeira Cat)
function Cat(name, favoriteToy) {
  Animal.call(this, name, favoriteToy);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// Adicionando frescura para retornar uma onomatopeia do bixo
Cat.prototype.makeSound = function() {
  return "Meow!";
}

// Crie instâncias de objetos
const dog = new Dog("Malu", "Ursinho vesgo");
const cat = new Cat("Whisky", "Bala no alvo");

console.log(dog.name + " says: " + dog.makeSound() + " and likes to play with " + dog.favoriteToy);
console.log(cat.name + " says: " + cat.makeSound() + " and likes to play with " + cat.favoriteToy);
