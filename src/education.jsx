const {useState} = React

const handleSubmit = (event) => {
    event.preventDefault()
}

export function Education() {
    const myDropdown = () => {
        const [selectedValue, setSelectedValue] = useState('')
        const handleChange = (event) =>{
            setSelectedValue(event.target.value)
        }
    }

    return (
        <form>
            <label htmlFor="School">School Name:</label><br/>
            <input type="text"/>
            <label htmlFor="Study">Title of Study:</label><br/>
            <input type="text"/>
            <label htmlFor="Date">Date of Study:</label><br/>
            <input type="month"/>
        </form>
    )
}