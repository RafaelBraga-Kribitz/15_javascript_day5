class Car {
    constructor(name, brand, productionYear, imageLink, price) {
        this.name = name;
        this.brand = brand;
        this.productionYear = productionYear;
        this.imageLink = imageLink;
        this.price = price;
    }
}

const cars = [
    new Car("Toyota Camry", "Toyota", 2020, "https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80", "$24,000"),
    new Car("Honda Accord", "Honda", 2021, "https://di-uploads-pod3.dealerinspire.com/germainhondaofannarbor/uploads/2023/03/2302-Honda-Accord-Sport-L-Hybrid-Trim.jpg", "$26,000"),
    new Car("Ford Mustang", "Ford", 2022, "https://www.gpas-cache.ford.com/guid/d5523d74-629a-3de5-89b0-7ae61d072aad.png", "$30,000"),
    new Car("Honda CBR", "Honda", 2020, "https://www.honda.at/content/dam/central/motorcycles/colour-picker/supersports/cbr650r/cbr650r_2024/nh-436m_mattegunpowderblackmetallic/24YM_CBR650R_Studio_MAT_GUNPOWDER_BLACK_METALLIC_MT_RHS.png/_jcr_content/renditions/c2_r.png", "$15,000"),
    new Car("Yamaha R1", "Yamaha", 2021, "https://cdn2.yamaha-motor.eu/prod/product-assets/2024/YZF1000R1/2024-Yamaha-YZF1000R1-EU-Icon_Blue-360-Degrees-001-03_Mobile.jpg", "$20,000"),
    new Car("Volvo FH", "Volvo", 2020, "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-fh-diesel-cgi-exterior-1?qlt=82&wid=1024&ts=1705312479954&dpr=off&fit=constrain&fmt=png-alpha", "$50,000"),
    new Car("Mercedes Benz Actros", "Mercedes Benz", 2021, "https://rev-mobilities.com/364-large_default/mercedes-actros-mp3.jpg", "$60,000"),
];

function displayCars() {
    const carList = document.getElementById('car-list');
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'col-md-4 mb-4';
        carCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" onclick="toggleDetails('${car.name}')">${car.name}</h5>
                    <div id="${car.name}-details" class="car-details" style="display:none;">
                        <img src="${car.imageLink}" class="card-img-top" alt="${car.name}">
                        <p>Brand: ${car.brand}</p>
                        <p>Year: ${car.productionYear}</p>
                        <p>Price: ${car.price}</p>
                    </div>
                </div>
            </div>
        `;
        carList.appendChild(carCard);
    });
}

function toggleDetails(carName) {
    const detailsDiv = document.getElementById(`${carName}-details`);
    detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
}

window.onload = displayCars;
class Motorbike extends Car
{
    constructor(name, brand, productionYear, imageLink, price, type)
    {
        super(name, brand, productionYear, imageLink, price);
        this.type = type;
    }
}

let motorbike1 = new Motorbike("Honda CBR", "Honda", 2020, "https://example.com/honda-cbr.jpg", "$15,000", "Sport");
let motorbike2 = new Motorbike("Yamaha R1", "Yamaha", 2021, "https://example.com/yamaha-r1.jpg", "$20,000", "Sport");

console.log(motorbike1);
console.log(motorbike2);

class Truck extends Car
{
    constructor(name, brand, productionYear, imageLink, price, type)
    {
        super(name, brand, productionYear, imageLink, price);
        this.type = type;
    }
}

let truck1 = new Truck("Volvo FH", "Volvo", 2020, "https://example.com/volvo-fh.jpg", "$50,000", "Truck");
let truck2 = new Truck("Mercedes Benz Actros", "Mercedes Benz", 2021, "https://example.com/mercedes-benz-actros.jpg", "$60,000", "Truck");

console.log(truck1);
console.log(truck2);

