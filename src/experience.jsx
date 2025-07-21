const {useState} = React

const handleSubmit = (event) => {
    event.preventDefault()
}

export function Experience() {
    const myDropdown = () => {
        const [selectedValue, setSelectedValue] = useState('')
        const handleChange = (event) =>{
            setSelectedValue(event.target.value)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="Company">Company Name:</label><br/>
                <input type="text"/>
                <label htmlFor="position">Position Title:</label><br/>
                <input type="text"/>
                <label htmlFor="Start">Start</label><br/>
                <input type="month"/>
                <label htmlFor="End">End</label><br/>
                <input type="month"/>
            </form>
        </div>
    )
}