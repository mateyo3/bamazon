var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

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
    purchasePrompts();
  	});//end: query function
}//end: listProducts function

function purchasePrompts() {
    inquirer.prompt([{
            name: "id",
            type: "input",
            message: "What is the product ID that you want to purchase?",
            validate: function(value) {
              if (isNaN(value) === false) {
                  return true;
                }
                return ("input must be a number.");
              }
        },

        {
            name: "quantity",
            type: "input",
            message: "How many do you want to buy?",
            validate: function(value) {
              if (isNaN(value) === false) {
                  return true;
                }
                return ("input must be a number.");
              }
        },

        {
            name: "purchase",
            type: "rawlist",
            message: "Confirm purchase?",
            choices: ["YES", "NO"]
        }

    ])// end iquirer.prompt
    .then(function(user) {

        //check quantity value in products table
        var parseQuantity = parseInt(quantityCheck);
        var quantityCheck = connection.query("SELECT stock_quantity, product_name FROM products WHERE id=" + user.quantity +";", function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(
                  "Product name: " + res[i].product_name + 
                  "\nQuantity in stock: " + res[i].stock_quantity
                );
            }
        });
    console.log(
      "You want to purchase: " + user.quantity +
      "\nConfirm purchase: " + user.purchase + 
      "\nProduct Id: " + user.id 
    );

    });//end .then function(user)

 }
//if qty less than qty in database go to inquirer prompt
