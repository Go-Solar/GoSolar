var rIndex,
    table = document.getElementById("table1");

//check ithe empty input
function checkEmptyInput() {
    var isEmpty = false,
        load = document.getElementById("loaad").value,
        minWatts = document.getElementById("min watts").value,
        maxWatts = document.getElementById("max watts").value,
        quantity = document.getElementById("quantity").value,
        upd = document.getElementById("upd").value,
        upw = document.getElementById("upw").value;

    if (load === "") {
        //alert("Load cannot be Empty");
        isEmpty = true;
    } else if (minWatts === "") {
        //alert("Starting Watt cannot be Empty");
        isEmpty = true;
    }
    if (maxWatts === "") {
        //alert("Maxium Watt cannot be Empty");
        isEmpty = true;
    } else if (quantity === "") {
        //alert("Quantity cannot be Empty");
        isEmpty = true;
    }
    if (upd === "") {
        //  alert("Usage(days per day cannot be Empty");
        isEmpty = true;
    } else if (upw === "") {
        //  alert("Usage(days per week) cannot be Empty");
        isEmpty = true;
    }
    return isEmpty;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//add row
function addHTMLTableRow() {
    //get the table by id
    //create a new row and cells
    //get value from input text
    //set the values into row cells

    if (!checkEmptyInput()) {
        var table = document.getElementById("table1"),
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            cell8 = newRow.insertCell(7),
            cell9 = newRow.insertCell(8),
            load = document.getElementById("loaad").value,
            minWatts = document.getElementById("min watts").value,
            maxWatts = document.getElementById("max watts").value,
            quantity = document.getElementById("quantity").value,
            upd = document.getElementById("upd").value,
            upw = document.getElementById("upw").value;

        cell1.innerHTML = load;
        cell2.innerHTML = minWatts;
        cell3.innerHTML = maxWatts;
        cell4.innerHTML = (parseFloat(minWatts) + parseFloat(maxWatts)) / 2;
        cell5.innerHTML = quantity;
        cell6.innerHTML =
            ((parseFloat(minWatts) + parseFloat(maxWatts)) / 2) *
            parseFloat(quantity);
        cell7.innerHTML = upd;
        cell8.innerHTML = upw;
        cell9.innerHTML =
            (((parseFloat(minWatts) + parseFloat(maxWatts)) / 2) *
                parseFloat(quantity) *
                parseFloat(upd) *
                parseFloat(upw)) /
            7;

        //call the function to set the event to the new row
        selectedRowToInput();
    }
    alert("Load Added");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//display selected row data into input text
function selectedRowToInput() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            //get the selected row index
            rIndex = this.rowIndex;
            document.getElementById("loaad").value = this.cells[0].innerHTML;
            document.getElementById("min watts").value = this.cells[1].innerHTML;
            document.getElementById("max watts").value = this.cells[2].innerHTML;
            document.getElementById("quantity").value = this.cells[4].innerHTML;
            document.getElementById("upd").value = this.cells[6].innerHTML;
            document.getElementById("upw").value = this.cells[7].innerHTML;
        };
    }
}
selectedRowToInput();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function editHtmlTableSelectedRow() {
    var load = document.getElementById("loaad").value,
        minWatts = document.getElementById("min watts").value,
        maxWatts = document.getElementById("max watts").value,
        quantity = document.getElementById("quantity").value,
        upd = document.getElementById("upd").value,
        upw = document.getElementById("upw").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = load;
        table.rows[rIndex].cells[1].innerHTML = minWatts;
        table.rows[rIndex].cells[2], (innerHTML = maxWatts);
        table.rows[rIndex].cells[3],
            (innerHTML = (parseFloat(minWatts) + parseFloat(maxWatts)) / 2);
        table.rows[rIndex].cells[4].innerHTML = quantity;
        table.rows[rIndex].cells[5].innerHTML =
            ((parseFloat(minWatts) + parseFloat(maxWatts)) / 2) *
            parseFloat(quantity);
        table.rows[rIndex].cells[6].innerHTML = upd;
        table.rows[rIndex].cells[7].innerHTML = upw;
        table.rows[rIndex].cells[8].innerHTML =
            (((parseFloat(minWatts) + parseFloat(maxWatts)) / 2) *
                parseFloat(quantity) *
                parseFloat(upd) *
                parseFloat(upw)) /
            7;
    }
    alert("Load Editted");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function removeSelectedRow() {
    table.deleteRow(rIndex);
    //clear input text
    document.getElementById("loaad").value = "";
    document.getElementById("min watts").value = "";
    document.getElementById("max watts").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("upd").value = "";
    document.getElementById("upw").value = "";
    alert("Load Removed");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sum values on column 5
function sum() {
    var table = document.getElementById("table2"),
        sumVal = 0;

    for (var i = 1; i < table.rows.length; i++) {
        sumVal = sumVal + parseFloat(table.rows[i].cells[5].innerHTML);
    }
    console.log(sumVal);
    if (!isNaN(sumVal)) {
        document.getElementById("total watts").innerHTML = sumVal + " Watts";
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sum values on column 6
function sum2() {
    var table = document.getElementById("table2"),
        sumVal = 0;

    for (var i = 1; i < table.rows.length; i++) {
        sumVal = sumVal + parseFloat(table.rows[i].cells[8].innerHTML);
    }
    console.log(sumVal);
    if (!isNaN(sumVal)) {
        document.getElementById("daily load").innerHTML = parseInt(sumVal) + " Watt-hour";
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//inverter specification calculation

function specifyInverter() {
    var field1 = document.getElementById("total load").value;
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var inverterRating;

    if (rd1.checked == true) {
        var powerInKva = field1 / 0.8;
        inverterRating = parseFloat(powerInKva) + parseFloat(powerInKva) * 0.3;
        document.getElementById("recommended inverter size").innerHTML =
            parseFloat(inverterRating) + " KVA";
    } else if (rd2.checked == true) {
        inverterRating = parseFloat(field1) + parseFloat(field1) * 0.3;
        document.getElementById("recommended inverter size").innerHTML =
            parseInt(inverterRating) + " KVA";
    } else alert("no method selected");
}