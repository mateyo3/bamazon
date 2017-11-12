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
            message: "What is the product ID that you want to purchase?"
        },

        {
            name: "quantity",
            type: "input",
            message: "How many do you want to buy?"
        },

        {
            name: "purchase",
            type: "rawlist",
            message: "Confirm purchase?",
            choices: ["YES", "NO"]
        }

    ])
    .then(function(user) {

  //       //check quantity value in products table
  //       let quantityCheck = "SELECT quantity FROM products WHERE id=" + user.quantity + ";"
  //       connection.query(quantityCheck, function(err, res) {
  //           for (var i = 0; i < res.length; i++) {
  //               console.log("Quantity in stock: " + res.quantity);
  //           }
  //       });
    console.log("Product Id: " + user.id);
    console.log("Quantity: " + user.quantity);
    console.log("Purchase: " + user.purchase);
    });

 }
//if qty less than qty in database go to inquirer prompt

// else
// 		inquirer.prompt([
// 		{
// 			name: "id",
// 			type: "input",
// 			message: "buy?"
// 		}

// 		]).then...

	// }); //end: function(user)

	// makePurchase();
// } //end: purchasePrompt function

// function makePurchase() {
// 	inquirer.prompt([
// 			{
// 				name: "purchase",
// 				type: "confirm",
// 				message: "Would you like to purchase?"
// 			},
// 	]).then(function(purchase){

// 		console.log("Product Id: " + purchase.purchase);
// 	}); //end: function(user)
// }