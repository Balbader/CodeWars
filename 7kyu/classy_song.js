class Song{
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
    }

    howMany = (arr) => {
        console.log("Initial arr: ", arr);

        const lwrCaseArr = arr.map((item) => {
            return item.toLowerCase();
        });

        let temp = [];
        for (let i = 0; i < lwrCaseArr.length; i++) {
            if (temp[i] !== lwrCaseArr[i]) {
                temp.push(lwrCaseArr[i]);
            }
        }
        console.log("temp: ", temp);
    }
}

const theView = new Song("The View", "Melissa McMillan");

const day1 = ['John', 'Fred', 'BOb', 'carl', 'RyAn'];
theView.howMany(day1);

const day2 = ['JoHn', 'Luke', 'AmAndA'];
theView.howMany(day2);
