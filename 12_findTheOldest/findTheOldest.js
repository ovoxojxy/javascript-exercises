const findTheOldest = function(people) {
    let max = 0
    let result = ""

    for (const person in people){
        if (!people[person].yearOfDeath) {
            people[person].yearOfDeath = new Date().getFullYear();
          }

        if (people[person].yearOfDeath - people[person].yearOfBirth > max){
            max = people[person].yearOfDeath - people[person].yearOfBirth
            result = people[person].name
        }

    }

    return result
};

// Do not edit below this line
module.exports = findTheOldest;
