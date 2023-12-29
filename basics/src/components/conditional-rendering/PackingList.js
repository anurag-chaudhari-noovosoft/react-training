

function ListElement({value, isPacked, importance}) {
    //here component is returning null if element is already packed
    //if(isPacked) return null;

    return (
        <>
            <li>
                {isPacked ? <del>{value} ✔</del>: value + ' X'}
            </li>

            {/*using logical and*/}
            {/*<li>*/}
            {/*    {value} {isPacked && '✔'}*/}
            {/*</li>*/}

            {/*using logical or*/}
            {/*<li>*/}
            {/*    {value} {isPacked || '✔'}*/}
            {/*</li>*/}

            <li>
                {value} {importance>0 && '(Importance): '+importance}
            </li>
        </>

    )
}

export default function PackingList() {

    return (
        <>
            <h1>This is my packing list</h1>
            <ul>
                <ListElement value={"Shoes"} isPacked={true} importance={0}/>
                <ListElement value={"Bag"} isPacked={true} importance={9}/>
                <ListElement value={"Torch"} isPacked={false} importance={-1}/>
                <ListElement value={"First-Aid box"} isPacked={false} importance={5}/>
                <ListElement value={"Umbrella"} isPacked={true} importance={-2}/>
            </ul>
        </>

    );
}