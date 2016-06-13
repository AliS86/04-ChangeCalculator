$(function() {
    $("#myButton").on("click", function() {
        // take the two values entered and find the difference
        var charged = $("#due").val();
        var take = $("#given").val();
        var change = take - charged;

        // find the amount of dollar owed
        var dollar = Math.floor(change);
        $("#dollars").html(dollar);

        // find the amount quarters owed
        change = change % 1;
        var quarter = Math.floor(change / 0.25);
        $("#quarters").html(quarter);

        // find amount diems owed
        change = change % 0.25;
        var dime = Math.floor(change / .1);
        $("#dimes").html(dime);

        // find amount nickels owed
        change = change % 0.1;
        var nickel = Math.floor(change / .05);
        $("#nickels").html(nickel);

        // find amount of pennies owed
        change = (change * 100) % 5;
        var result = Math.round(change * 100) / 100;
        var penny = result;
        $("#pennies").html(penny);

    })
});
