function addHTMLTableRow() {
    //get the table by id
    //create a new row and cells
    //get value from input text
    //set the values into row cells

    if (!checkEmptyInput()) {
        var table = document.getElementById("load_table"),
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
            load = document.getElementById("load").value,
            minWatts = document.getElementById("min_watts").value,
            maxWatts = document.getElementById("max_watts").value,
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







































const App = () => {
        const loadsData = [{
                id: 1,
                load_name: 'TV',
                min_watts: 23,
                max_watts: 30,
                quantity: 2,
                usage_hours: 4,
                usage_days: 7
            },
            {
                id: 2,
                load_name: 'Fridge',
                min_watts: 150,
                max_watts: 200,
                quantity: 2,
                usage_hours: 4,
                usage_days: 7
            },
            {
                id: 3,
                load_name: 'Iron',
                min_watts: 500,
                max_watts: 650,
                quantity: 2,
                usage_hours: 4,
                usage_days: 7
            },
        ]

        const initialFormState = {
                id: null,
                load_name: '',
                min_watts: '',
                max_watts: '',
                quantity: '',
                usage_hours: '',
                usage_days: ''
            } //initial empty useState

        //Setting state
        const [loads, setLoads] = useState(loadsData)
        const [currentLoad, setCurrentLoad] = useState(initialFormState) //to see and update the current load being updated
        const [editing, setEditing] = useState(false)

        //CRUD operations
        const addLoad = load => {
            load.id = loads.length + 1 //auto-incrementing the id when adding new load
            setLoads([...loads, load]) //the ...users code ensures that all the previous loads remain in the array
        }


        const deleteLoad = id => {
            setEditing(false)
            setLoads(loads.filter(load => load.id !== id)) //this will take the id of the load and filter them out of the load array

        }


        const updateLoad = (id, updatedLoad) => {
            setEditing(false)

            setLoads(loads.map(load => (load.id === id ? updatedLoad : load)))
        }


        const editRow = load => {
            setEditing(true)

            setCurrentLoad({
                id: load.id,
                load_name: load.load_name,
                min_watts: load.min_watts,
                max_watts: load.max_watts,
                quantity: load.quantity,
                usage_hours: load.usage_hours,
                usage_days: load.usage_days
            })
        }