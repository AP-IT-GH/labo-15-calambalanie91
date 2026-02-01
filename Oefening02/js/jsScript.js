import person from "../data/person.json" with { type: 'json' };

function printFullname(p)
{
    console.log(p.firstname +" " + p.lastname);
}

printFullname(person);

function printHobbies(h){
    console.log(h.hobbies.join(", "))
}

printHobbies(person)