function user() {
    var data = [
        {
            id: 1,
            name: "Neha",
            age: 21,
            avl: true
        },
        {
            id: 2,
            name: "Seema",
            age: 23,
            avl: true
        },
        {
            id: 3,
            name: "Priya",
            age: 21,
            avl: true
        },
        {
            id: 4,
            name: "Sunaina",
            age: 28,
            avl: false
        },
        {
            id: 5,
            name: "Aavishya",
            age: 22,
            avl: true
        }
    ];
    return data;
}
;
function userId(id) {
    var users = user();
    return users.filter(function (item) { return item.id === id; })[0];
}
;
function createId() {
    var userid = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        userid[_i] = arguments[_i];
    }
    var Details = [];
    for (var _a = 0, userid_1 = userid; _a < userid_1.length; _a++) {
        var id = userid_1[_a];
        var custID = userId(id);
        Details.push(custID.name, custID.age.toString()); //Khush raho..call me jabhi apko yeh dikhe
    }
    console.log(Details);
    return Details;
}
createId(2, 4);
