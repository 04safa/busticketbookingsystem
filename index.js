const cities = [
  {
      source: "Thoothukudi",
      destination: "Tirunelveli",
      price: 50
  },
  {
      source: "Thoothukudi",
      destination: "Tenkasi",
      price: 100
  },
  {
      source: "Thoothukudi",
      destination: "Madurai",
      price: 150
  },
  {
      source: "Thoothukudi",
      destination: "Salem",
      price: 350
  },
  {
      source: "Thoothukudi",
      destination: "Trichy",
      price: 650
  },
  {
      source: "Thoothukudi",
      destination: "Chennai",
      price: 850
  },
  {
      source: "Thoothukudi",
      destination: "Thiruvananthapuram",
      price: 1000
  }
];

function calculateTicketPrice() {
  let source = prompt("Enter your source:");
  let destination = prompt("Enter your destination:");
  let tickets = parseInt(prompt("How many tickets do you need?"), 10);

  let found = false;

  for (let i = 0; i < cities.length; i++) {
      if (source.toLowerCase() === cities[i].source.toLowerCase() && destination.toLowerCase() === cities[i].destination.toLowerCase()) {
          let price = Number(cities[i].price) * tickets;
          document.getElementById("result").innerText = `Total price for ${tickets} tickets from ${source} to ${destination} is ${price}`;
          found = true;
          break;
      }
  }

  if (!found) {
      document.getElementById("result").innerText = "Sorry, we do not have buses available for the selected route.";
  }
}
