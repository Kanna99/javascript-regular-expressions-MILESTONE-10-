[8:44 PM, 7/28/2022] Yashu@vignan: const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);


const object1 = {
    property1: 42
  };
  
  console.log(Object.isFrozen(object1));

  
  Object.freeze(object1);
  
  console.log(Object.isFrozen(object1));
  

  <html>
<head>
    <title>Object's creation in JavaScript, by Using Object.create() method example1</title>
</head>
<body>
    <script>
        //car properties and method encapsulation
        var Car = {
            model: 'Audi',
            color: 'black',
            type: 'Luxury-car', // Default value of properties
            displayType: function () {  // Method which will display type of Animal
                return this.type;
            }
        }
        //Object.create() method syntax. Create new car type called electricCar
        var electricCar = Object.create(Car);
        electricCar.displayType(); //Luxury-car
        //Object.create() method syntax. Create new car type called normalCar
        var normalCar = Object.create(Car);
        normalCar.type = 'Normal-car';
        normalCar.displayType(); //Normal-car
        console.log("Using Object.create() method - Car object: ", Car)
        console.log("Using Object.create() method - Car object length: ", Object.getOwnPropertyNames(Car).length)
        console.log("Car type? : ", typeof Car);// object
        console.log("Using Object.create() method - electricCar object without _proto_: ", electricCar)//return empty as there was no property 
        //created by electricCar except others are inherited from Car object
        console.log("Using Object.create() method - electricCar object with _proto: ", electricCar.proto_)
        console.log("Using Object.create() method - electricCar object length: ", Object.getOwnPropertyNames(electricCar._proto_).length)
        console.log("electricCar Using Object.create() method type? : ", typeof electricCar);// object
        console.log("Using Object.create() method - with dot notation-->Property model value of electricCar is: " + electricCar.model);
        console.log("Using Object.create() method - with dot notation-->Property color value of electricCar is: " + electricCar.color);
        console.log("Using Object.create() method - with dot notation-->Property type value of electricCar is: " + electricCar.type);
        console.log("Using Object.create() method - with dot notation-->method displayType of electricCar is: " + electricCar.displayType()); //Luxury-car
        console.log("Using Object.create() method - with bracket notation-->Property model value of electricCar is: " + electricCar['model']);
        console.log("Using Object.create() method - with bracket notation-->Property color value of electricCar is: " + electricCar['color']);
        console.log("Using Object.create() method - with bracket notation-->Property type value of electricCar is: " + electricCar['type']);
        console.log("Using Object.create() method - normalCar object without _proto_: ", normalCar)//return property name Type as there was one property 
        //created by normalCar except others are inherited from Car object
        console.log("Using Object.create() method - normalCar object with _proto: ", normalCar.proto_)
        console.log("Using Object.create() method - normalCar object length: ", Object.getOwnPropertyNames(normalCar._proto_).length)
        console.log("normalCar Using Object.create() method type? : ", typeof normalCar);// object
        console.log("Using Object.create() method - with dot notation-->Property model value of normalCar is: " + normalCar.model);
        console.log("Using Object.create() method - with dot notation-->Property color value of normalCar is: " + normalCar.color);
        console.log("Using Object.create() method - with dot notation-->Property type value of normalCar is: " + normalCar.type);
        console.log("Using Object.create() method - with dot notation-->method displayType of normalCar is: " + normalCar.displayType()); //Normal-car
        console.log("Using Object.create() method - with bracket notation-->Property model value of normalCar is: " + normalCar['model']);
        console.log("Using Object.create() method - with bracket notation-->Property color value of normalCar is: " + normalCar['color']);
        console.log("Using Object.create() method - with bracket notation-->Property type value of normalCar is: " + normalCar['type']);
    </script>
</body>
</html>


const object1 = {
    property1: 42
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
 
  delete object1.property1; 
  console.log(object1.property1);
  

  const object1 = {
    property1: 42
  };
  
  console.log(Object.isSealed(object1));
  
  
  Object.seal(object1);
  
  console.log(Object.isSealed(object1));
