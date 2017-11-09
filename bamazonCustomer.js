var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Calamigos2015",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  listProducts();
});

function listProducts () {
	var query = "SELECT * FROM products;"
	  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
      	"Id: " + res[i].id + 
      	"||" +
      	"Product: " + res[i].product_name + 
      	"||" +
      	"Department: " + res[i].department_name + 
      	"||" +
      	"Price: " + res[i].price + 
      	"||" +
		"Stock Quantity: " + res[i].stock_quantity
      	);
    }
  });
}

