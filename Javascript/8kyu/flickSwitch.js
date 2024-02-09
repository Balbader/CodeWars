const flickSwitch = (arr) => {
    const flick = "flick";
    arr.forEach(element => {
        let bool = "true";
        if (element == flick)
            bool == "false";
        console.log(element);
        console.log(bool);
        console.log("\n");
    });
}

const array = ["apple", "banana", "flick", "cherry", "orange", "tomato"];

flickSwitch(array);
