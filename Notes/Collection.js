let person = {
    fname: "Steven",
    lname: "Harris",
    age: 27,
    feet: { 
        left_foot: "non_surgery",
        right_foot: "surgery"
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fname}`;
    }
};

console.log(person.greet("The ", person.feet.left_foot , " did not have surgery for "));

// let obj = {};

// let netflix = {
//     id: 9,
//     likes: 932,
//     name: "The Good Place",
//     seasonInfo: {
//         season1: {
//             numberOfEpisodes: 5,
//             episodeInfo: [{
//                 episode: 1,
//                 episodeName: "Pilot"
//             }, {
//                 episode: 2,
//                 episodeName: "Flying"
//             }, {
//                 episode: 3,
//                 episodeName: "Tahani Al-Jamil"
//             }, {
//                 episode: 4,
//                 episodeName: "Jason Mendoza"
//             }, {
//                 episode: 5,
//                 episodeName: "Category 55 Emergency Doomsday Crisis"
//             }]
//         },
//         description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
//     },
// };*/