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

//Question prompts for user to make purchase
function purchasePrompts() {
    inquirer.prompt([{
            name: "id",
            type: "input",
            message: "What is the product ID that you want to purchase?",
            //validate whether user input is a number
            validate: function(value) {
              if (isNaN(value) === false) {
                  return true;
                }
                return ("input must be a number. Try again.");
              }
        },

        {
            name: "quantity",
            type: "input",
            message: "How many do you want to buy?",
            //validate whether user input is a number
            validate: function(value) {
              if (isNaN(value) === false) {
                  return true;
                }
                return ("input must be a number. Try again.");
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
        var quantityCheck = connection.query("SELECT stock_quantity, product_name FROM products WHERE id=" + user.id +";", function(err, res) {
            for (var i = 0; i < res.length; i++) {
                //display product name and quantity in stock
                console.log(
                  "Inventory: " + res[i].product_name + " || " +
                  "Quantity in stock: " + res[i].stock_quantity
                );
            }
        });
    console.log(
      "You want to purchase: " + user.quantity + " of " + "Product Id #" + user.id + 
      "\nConfirm purchase: " + user.purchase 
    );

    });//end .then function(user)

 }
//if qty less than qty in database go to inquirer prompt
