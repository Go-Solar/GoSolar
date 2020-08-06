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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//battery specification calculation

var totalAcLoad;
var inverterEff;
var totalDcLoad;
var inverterVoltage;
var batteryBankCapacity;
var averageDailyWattHour;

function calcuateAverageAmpHourPerDayLoad() {
    totalAcLoad = document.getElementById("AC average total load").value;
    inverterEff = document.getElementById("Inverter Efficiency").value;
    totalDcLoad = document.getElementById("DC average total load").value;
    inverterVoltage = document.getElementById("DC system voltage").value;

    averageDailyWattHour =
        (parseFloat(totalAcLoad) / parseFloat(inverterEff) +
            parseFloat(totalDcLoad)) /
        parseFloat(inverterVoltage);

    if (!isNaN(averageDailyWattHour)) {
        document.getElementById("average day load").innerHTML =
            parseInt(averageDailyWattHour) + " Amps per hour";
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function inverterVoltage() {
    var rIndex,
        table = document.getElementById("inverteer");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            //get the selected row index
            rIndex = this.rowIndex;
            console.log(rIndex);
            document.getElementById(
                "DC system voltage"
            ).value = this.cells[3].innerHTML;
            document.getElementById(
                "inverter voltage"
            ).innerHTML = this.cells[3].innerHTML;
            document.getElementById(
                "inverter specification"
            ).innerHTML = this.cells[2].innerHTML;
            document.getElementById("store").innerHTML = this.cells[0].innerHTML;
            document.getElementById(
                "inverter brand"
            ).innerHTML = this.cells[1].innerHTML;
            document.getElementById(
                "inverter cost"
            ).innerHTML = this.cells[4].innerHTML;
        };
    }
}
inverterVoltage();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function baselectedRowToInput() {
    var rIndex,
        table = document.getElementById("ba");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            //get the selected row index
            rIndex = this.rowIndex;
            //console.log(rIndex);
            //document.getElementById("").value = this.cells[0].innerHTML;
            document.getElementById(
                "Battery amps hr capacity"
            ).value = this.cells[3].innerHTML;
            document.getElementById(
                "Battery voltage"
            ).value = this.cells[2].innerHTML;
            document.getElementById(
                "battery bus voltage"
            ).value = this.cells[2].innerHTML;
            document.getElementById("bp").value = this.cells[4].innerHTML;
            document.getElementById(
                "brand of battery"
            ).innerHTML = this.cells[1].innerHTML;
            document.getElementById(
                "battery volt"
            ).innerHTML = this.cells[2].innerHTML;
            document.getElementById(
                "battery amps"
            ).innerHTML = this.cells[3].innerHTML;
        };
    }
}
baselectedRowToInput();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function requiredBatteryBankCapacity() {
    var daysOfAutonomy = document.getElementById("Days of autonomy").value;
    var DoD = document.getElementById("Discharge Limit").value;

    batteryBankCapacity =
        (averageDailyWattHour * parseFloat(daysOfAutonomy)) / parseFloat(DoD);
    if (!isNaN(batteryBankCapacity)) {
        document.getElementById("required battery bank capacity").innerHTML =
            parseInt(batteryBankCapacity) + " Amps per hour";
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var numberOfBatteriesInParrallel;

function calculateBatteiesInParallel() {
    var batteryAmpsCapacity = document.getElementById("Battery amps hr capacity")
        .value;
    numberOfBatteriesInParrallel =
        batteryBankCapacity / parseInt(batteryAmpsCapacity);

    if (!isNaN(numberOfBatteriesInParrallel)) {
        document.getElementById("batteries in parallel").innerHTML = parseInt(
            numberOfBatteriesInParrallel
        );
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var batteriesInSeries;

function calculateBatteriesInSeries() {
    var field4 = document.getElementById("DC system voltage").value;
    var field8 = document.getElementById("Battery voltage").value;
    var batteriesInSeries = parseFloat(field4) / parseFloat(field8);

    if (!isNaN(batteriesInSeries)) {
        document.getElementById("batteries in series").innerHTML = parseInt(
            batteriesInSeries
        );
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var totalBatteries;

function calculateTotalBatteries() {
    var field1 = document.getElementById("AC average total load").value;
    var field2 = document.getElementById("Inverter Efficiency").value;
    var field3 = document.getElementById("DC average total load").value;
    var field4 = document.getElementById("DC system voltage").value;
    var field5 = document.getElementById("Days of autonomy").value;
    var field6 = document.getElementById("Discharge Limit").value;
    var field7 = document.getElementById("Battery amps hr capacity").value;
    var field8 = document.getElementById("Battery voltage").value;

    var result =
        (parseFloat(field1) / parseFloat(field2) + parseFloat(field3)) /
        parseFloat(field4);
    var result2 =
        (result * parseFloat(field5)) / parseFloat(field6) / parseFloat(field7);

    var batteriesInSeries = parseFloat(field4) / parseFloat(field8);
    totalBatteries = batteriesInSeries * result2;
    //totalBatteries = numberOfBatteriesInParrallel * batteriesInSeries;
    if (!isNaN(totalBatteries)) {
        document.getElementById("total batteries").innerHTML = parseInt(
            totalBatteries
        );
    }
}
/*var totalPrice;

function batteryprice() {
    var price = document.getElementById("bp").value;
    var totalPrice = price * parseInt(totalBatteries);
    console.log(totalPrice.toLocaleString("en-US"));

    if (!isNaN(totalPrice)) {
        document.getElementById(
            "battery price"
        ).innerHTML = totalPrice.toLocaleString("en-US");
    }
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function irradianceToInput() {
    var rIndex,
        table = document.getElementById("radiation table");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            //get the selected row index
            rIndex = this.rowIndex;
            //console.log(rIndex);
            //document.getElementById("").value = this.cells[0].innerHTML;
            document.getElementById(
                "peck sun hours per day"
            ).value = this.cells[1].innerHTML;
            document.getElementById("irradiance").value = this.cells[2].innerHTML;
        };
    }
}
irradianceToInput();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var requiredPvModuleCapacity;

function requiredArrayOutputPerDay() {
    var field1 = document.getElementById("total energy demand").value;
    var irradiance = document.getElementById("irradiance").value;
    // var batteryEfficiency = document.getElementById("battery energy efficiency")
    //    .value;
    // var me = document.getElementById("ME").value;
    var pgf;
    var peakSunHour = document.getElementById("peck sun hours per day").value;

    pgf = irradiance * 0.69;

    requiredPvModuleCapacity =
        (parseFloat(field1) * 1.3) / (parseFloat(pgf) * parseFloat(peakSunHour));
    console.log(requiredPvModuleCapacity);
    document.getElementById(
        "required array output"
    ).innerHTML = requiredPvModuleCapacity;
    // if (!isNaN(requiredPvModuleCapacity)) {
    //  document.getElementById("required array output").innerHTML =
    //   "The Required PV Module Capacity is  " +
    //   requiredPvModuleCapacity +
    //   " Watts Hour";
    //}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function selectedModuleRowToInput() {
    var rIndex,
        table = document.getElementById("PV table");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            //get the selected row index
            rIndex = this.rowIndex;
            //console.log(rIndex);
            //console.log(this.cells[12].innerHTML);
            document.getElementById(
                "max power voltage"
            ).value = this.cells[4].innerHTML;
            document.getElementById(
                "module power output"
            ).value = this.cells[10].innerHTML;

            //  document.getElementById("ME").value = this.cells[9].innerHTML;
            document.getElementById("Isc").value = this.cells[8].innerHTML;
            document.getElementById("Voc").value = this.cells[7].innerHTML;
            document.getElementById(
                "price of array"
            ).value = this.cells[11].innerHTML;
        };
    }
}
selectedModuleRowToInput();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var numberOfModulesRequired;
var moduleWattage;

function numberOfModulesRequiredToMeetEnergyRequirement() {
    moduleWattage = document.getElementById("module power output").value;
    numberOfModulesRequired =
        requiredPvModuleCapacity / parseFloat(moduleWattage);
    if (!isNaN(numberOfModulesRequired)) {
        document.getElementById(
            "number of modules to meet requirement"
        ).innerHTML = parseInt(numberOfModulesRequired);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var numberOfModulesPerString;

function numberOfModulesRequiredPerString() {
    var batteryBusVoltage = document.getElementById("battery bus voltage").value;
    var moduleMaxVoltage = document.getElementById("max power voltage").value;
    numberOfModulesPerString =
        parseFloat(batteryBusVoltage) / parseFloat(moduleMaxVoltage);
    if (!isNaN(numberOfModulesPerString)) {
        document.getElementById(
            "number of modules required per string"
        ).innerHTML = parseInt(numberOfModulesPerString);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var numberOfModulesStringInParallel;

function numberOfStringsInParallel() {
    numberOfModulesStringInParallel =
        numberOfModulesRequired / parseInt(numberOfModulesPerString);
    //parseFloat(batteryBankCapacity) / parseFloat(numberOfModulesPerString);
    console.log(numberOfModulesStringInParallel);
    if (!isNaN(numberOfModulesStringInParallel)) {
        document.getElementById(
            "number of strings in parallel"
        ).innerHTML = parseInt(numberOfModulesStringInParallel);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var numberOfModulesToBePurchased;

function numberModulesToBePurchased() {
    numberOfModulesToBePurchased =
        parseInt(numberOfModulesPerString) *
        parseInt(numberOfModulesStringInParallel);
    if (!isNaN(numberOfModulesToBePurchased)) {
        document.getElementById(
            "number of modules to be purchased"
        ).innerHTML = parseInt(numberOfModulesToBePurchased);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function nominalArrayOutput() {
    var nominalArrayOutput = moduleWattage * numberOfModulesToBePurchased;
    if (!isNaN(nominalArrayOutput)) {
        document.getElementById(
            "nominal array output"
        ).innerHTML = nominalArrayOutput;
    }
}