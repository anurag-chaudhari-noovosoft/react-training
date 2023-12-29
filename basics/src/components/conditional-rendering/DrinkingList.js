
function DrinkItem({name}) {
    let part, caffeine, age;
    if(name === 'Tea') {
        part = 'leaf'
        caffeine = '15–70 mg/cup'
        age = '4,000+ years'
    }
    else if(name === 'Coffee') {
        part = 'bean'
        caffeine = '80–185 mg/cup'
        age = '1,000+ years'
    }

    return (
        <>
            <h2>{name}</h2>
            <ul>
                <li>{part}</li>
                <li>{caffeine}</li>
                <li>{age}</li>
            </ul>

        </>
    )

}

export default function DrinkingList() {

    return (
        <>
           <DrinkItem name={'Tea'}/>
            <DrinkItem name={'Coffee'}/>
        </>
    )
}