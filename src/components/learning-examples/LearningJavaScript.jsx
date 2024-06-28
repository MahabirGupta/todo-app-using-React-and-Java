// creating an object
const person = {
    name: 'Mahabir Gupta',
    address: {
        line1: 'Potong Pasir',
        country: 'Singapore',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return (
        <>
        {/* Printing the attributes of the person object,Mahabir */}
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{ person.printProfile() }</div>
        </>
    )
}