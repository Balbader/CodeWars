// 7kyu - What a "Classy" Song

// Your job is to create a class called Song.

// A new Song will take two parameters, title and artist.

// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'
// You will also have to create an instance method named howMany() (or how_many()).

// The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitve manner, i.e. "John" is the same as "john".

// Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// // day 1 (or test 1)
// mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// // These are all new since they are the first listeners.

// // day 2
// mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// // Luke and Amanda are new, john already listened to it the previous day
// Also if the same person listened to it more than once a day it should only count them once.

// Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// // day 1
// mountMoose.howMany(['John', 'joHN', 'carl']); => 2
// Good luck!

/*
class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }

    howMany = (arr) => {
        console.log("Initial arr: ", arr);

        const lwrCaseArr = arr.map((item) => {
            return item.toLowerCase();
        });

        const temp = [];
        lwrCaseArr.map((item) => {
            temp.push(item);
        });
        console.log("temp: ", temp);
    }
}
*/

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.watches = new Set();
  }

  howMany(watches) {
    let size = this.watches.size;
    for(let str of watches)
      this.watches.add(str.toLowerCase());
    return this.watches.size - size;
  }
}


const theView = new Song("The View", "Melissa McMillan");

const day1 = ['John', 'Fred', 'BOb', 'carl', 'RyAn'];
console.log(theView.howMany(day1));

const day2 = ['JoHn', 'Luke', 'AmAndA'];
console.log(theView.howMany(day2));
