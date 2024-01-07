// create a prompt that requests an order




const froyoOrder = prompt("please enter your froyo order, separate each order with a comma!")
// this will create a var with their order

const froyoArray = froyoOrder.split(",")


const froyoFunction = () => {
    const froyoObject = {}

    // loop over the array of flavors
    for (let i = 0; i < froyoArray.length; i++)  {
        // console.log(froyoObject[froyoArray[i]])
        // check to see if the flavor we are on exists in the object
        // the flavor we're on - froyoArray[i]
        if (froyoObject[froyoArray[i]]){
            // if it does exist we add one to it's value
            froyoObject[froyoArray[i]] = froyoObject[froyoArray[i]] + 1
        } else{
            // if it does not exist
            // we create a new property and assign it to the number 1        froyoObject[froyoArray[i]] = 1
        }
        // count how many of each flavor occur
        // every time a flavor appears more than once it will be added to its already existing key

    }
    console.log(froyoObject)
}