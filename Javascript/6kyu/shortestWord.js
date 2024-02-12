const findShort = (str) => {

    let shortest = 0;
    let count = 0;
    let i = 0;

    while (str[i++] != ' ')
        count++;

    shortest = count;

    i++;
    count = 0;
    while (str[i])
    {
        if (str[i] == ' ' || str[i] == '\0')
        {
            if (count < shortest)
            {
                shortest = count;
                console.log("shortest: " + shortest);
            }
            count = 0;
            i++;
        }
        count++;
        i++;
    }

    return shortest;
}

//const str = "bitcoin take over the world who knows perhaps";
const str = "let's travel abroad shall we";
console.log(findShort(str));
