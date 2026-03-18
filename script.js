const destinations = [
  {
    name: "Manali",
    location: "Himachal Pradesh",
    cost: 3000,
    bestTime: "Oct - Feb",
    food: "Siddu, Trout",
    img: "https://wallpapers.com/images/featured/manila-pictures-oqgnbn59wwav6kxj.jpg"
  },
  {
    name: "Jaipur",
    location: "Rajasthan",
    cost: 4500,
    bestTime: "Nov - Mar",
    food: "Dal Baati",
    img: "https://www.orangesmile.com/common/img_cities_original/jaipur--2098033-1.jpg"
  },
  {
    name: "Delhi",
    location: "Delhi",
    cost: 2000,
    bestTime: "Oct - Mar",
    food: "Chaat",
    img: "https://deih43ym53wif.cloudfront.net/Rajpath-delhi-shutterstock_1195751923.jpg_7647e1aad2.jpg"
  }
];

let plan = [];

/* LOAD DESTINATIONS */
function loadDestinations(){
  const grid = document.getElementById("destinationGrid");

  destinations.forEach((d,i)=>{
    grid.innerHTML += `
    <div class="destination-card">
      <img src="${d.img}">
      <div class="destination-content">
        <h3>${d.name}</h3>
        <p>${d.location}</p>
        <p>Best Time: ${d.bestTime}</p>
        <p>Food: ${d.food}</p>
        <button class="add-btn" onclick="addToPlan(${i})">Add</button>
      </div>
    </div>
    `;
  });
}

/* ADD */
function addToPlan(i){
  plan.push(destinations[i]);
  updateTable();
}

/* REMOVE */
function removeItem(index){
  plan.splice(index,1);
  updateTable();
}

/* UPDATE TABLE */
function updateTable(){
  const table = document.getElementById("planTable");
  table.innerHTML = "";

  plan.forEach((p,i)=>{
    table.innerHTML += `
    <tr>
      <td>${p.name}</td>
      <td>${p.location}</td>
      <td>₹${p.cost}</td>
      <td><button onclick="removeItem(${i})">Remove</button></td>
    </tr>`;
  });

  document.getElementById("count").innerText = plan.length;
  document.getElementById("totalPlaces").innerText = plan.length;

  calculateBudget();
}

/* BUDGET */
function calculateBudget(){
  let days = document.getElementById("days").value;
  let persons = document.getElementById("persons").value;

  let total = 0;

  plan.forEach(p=>{
    total += p.cost;
  });

  total = total * days * persons;

  document.getElementById("totalCost").innerText = "₹" + total;
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

loadDestinations();
