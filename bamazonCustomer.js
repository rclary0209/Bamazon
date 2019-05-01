var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon",
})
connection.connect(function (err) {
    console.log("Connected as id: " + connection.threadId),
        start();
})

var start = function () {
    inquirer.prompt({
        name: "buyanitem",
        type: "rawlist",
        message: "Welcome to Bamazon.\n Would you like to [BUY] an item from the store?\n",
        choices: ["BUY", "EXIT"]
    }).then(function (answer) {
        if (answer.buyanitem.toUpperCase() == "BUY") {
            displayProducts();
        } else {
            connection.end();
        }
    })
}

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) {
            console.log(error)
        };
        var displayItemsTable = new Table({
            head: ["Item Id", "Product Name", "Department", "Price", "Stock Quantity"],
            colWidths: [10, 25, 15, 10, 10]
        });
        for (var i = 0; i < res.length; i++) {
            displayItemsTable.push(
                [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(displayItemsTable.toString());
        productRequest(res);
    });
}
var productRequest = function (data) {
    inquirer.prompt([{
        name: "item_ID",
        type: "input",
        message: "What is the item ID you wish to buy?"
    }, {
        name: "number_of_units",
        type: "input",
        message: "How many product units would you like to buy?",
    }]).then(function (answer) {
        // connection.query("INSERT INTO products SET?", {
        var productRequested = parseInt(answer.item_ID);
        var requestedUnits = parseInt(answer.number_of_units);

        var thisItem = ReturnItem(productRequested, data);
        console.log(thisItem);
        if (thisItem.stock_quantity > requestedUnits) {
            customerPurchase(productRequested, requestedUnits);
        } else {
            console.log("\n Unfortunately, we do not have enough of this item in stock. \n")
            start();
        }
    });
};

function ReturnItem(id, inventory) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            return inventory[i]
        }
    }
    return null;
}

function customerPurchase(id, units) {
    var sqlQuery = `UPDATE products
                        SET stock_quantity = stock_quantity - ?
                        WHERE id = ?`;
    connection.query(sqlQuery, [units, id], function (err, res) {

            function displayPrice() {
                connection.query("SELECT * FROM products", function (err, res) {
                    if (err) {
                        console.log(error)
                    } else {
                        displayPrice(price, units)
                        var totalCost = res[0].price * units;
                        console.log("We have your stuff in stock!");
                        console.log("Your total cost for " + units + " " + res[0].product_name + " is " + totalCost + "Thank You!");
                        start();
                    }
                });
     } });
    }






/* welcome to bamazon -- list items 
 ask which item id they want to buy
 ask how many units
 then check inventory in mysql
 etiher reply insufficient quantity
 or your order has been placed total is : 
    ;*/