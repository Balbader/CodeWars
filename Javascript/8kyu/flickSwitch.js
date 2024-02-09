const flickSwitch = (arr) => {

    const flick = "flick";
    let bool = true;
    let newArr = new Array;

    arr.forEach(element => {

        if (element == flick)
        {
            if (bool == true)
                bool = false;
            else if (bool == false)
                bool = true;
        }

        newArr.push(bool);
    });
    console.log(newArr);
}

const array = ["apple", "banana", "flick", "cherry", "flick", "tomato"];

flickSwitch(array);
