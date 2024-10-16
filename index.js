// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,names){
    return drivers.filter(
        (Bobby) => Bobby.toLowerCase() === names.toLowerCase()
    );
        
}
function fuzzyMatch(drivers,names){
    return drivers.filter(
        (Bobby) => Bobby.toLowerCase().indexOf(names.toLowerCase()) === 0
    );

}
function matchName(drivers, names){
    return drivers.filter((bobby) => bobby.name === names);

}