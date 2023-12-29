
const personList = [
    {
        "id": 1,
        "name": "Raj Verma",
        "profession": "Engineer"
    },
    {
        "id": 2,
        "name": "Vishal Mehta",
        "profession": "Chemist"
    },
    {
        "id": 3,
        "name": "Chetan Patil",
        "profession": "Doctor"
    },
    {
        "id": 4,
        "name": "Amit Patil",
        "profession": "CA"
    },
    {
        "id": 5,
        "name": "Abhijit Chavan",
        "profession": "Engineer"
    },
    {
        "id": 6,
        "name": "Prajwal Ahire",
        "profession": "Artist"
    }
]

function ListElement() {
    const engineers = personList.filter(p=> p.profession === 'Engineer')
    const others = personList.filter(p=> p.profession !== 'Engineer')

    // const list = personList.map(person=><li key={person.id}>
    //     <p>{person.name}</p>
    //     <p>{person.profession}</p>
    // </li>)

     return (
         <article>
             <h1>Engineers</h1>
             <ul>
                 {engineers.map(person =>
                     <li key={person.id}>
                         <p>
                             <b>{person.name}:</b>
                             {' ' + person.profession + ' '}
                         </p>
                     </li>
                 )}
             </ul>
             <h2>Everyone Else</h2>
             <ul>
                 {others.map(person =>
                     <li key={person.id}>
                         <p>
                             <b>{person.name}:</b>
                             {' ' + person.profession + ' '}
                         </p>
                     </li>
                 )}
             </ul>
         </article>
     )
}
export default function PersonList() {

    return (
        <>
            <h1>Persons Data: </h1>
            <ListElement/>
        </>
    )
}