function user (){
    let data=
    [
        {
            id: 1,
            name: "Neha",
            age: 21,
            avl:true
        },
        {
            id: 2,
            name:"Seema",
            age: 23,
            avl:true
        },
        {
            id: 3,
            name:"Priya",
            age: 21,
            avl:true
        },
        {
            id: 4,
            name:"Sunaina",
            age: 28,
            avl:false
        },
        {
            id: 5,
            name:"Aavishya",
            age: 22,
            avl:true
        }
    ];
    return data;
};
function userId(id:number){
    let users = user();
    return users.filter(item=>item.id===id)[0]
};

function createId(...userid:number[]):string[]{
let Details:string[] = [];
for(let id of userid)
{
    let custID =userId(id);
    Details.push(custID.name , custID.age.toString());
}
console.log(Details);
return Details;

}

createId(2,4);