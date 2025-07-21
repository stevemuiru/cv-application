const {useState} = React


const [number, setNumber] = useState('')
const [email,  setEmail] = useState('')
const [phone, setPhone] = useState('')


const handleSubmit = (event) => {
    event.preventDefault()
}

export function Information() {
    const myDropdown = () => {
        const [selectedValue, setSelectedValue] = useState('')
        const handleChange = (event) =>{
            setSelectedValue(event.target.value)
        }
    }
    return (
        <div>
            <form>
            <select id="my-select" value={selectedValue} onChange={handleChange}/>
            <label htmlFor="Name">Name:</label><br/>
            <input type="text" 
            onChange = {e => {setNumber(e.target.value)}}required/>
            <label htmlFor="email">E-mail:</label><br/>
            <input type="email" 
            onChange = {e => {setEmail(e.target.value)}}required/>
            <label htmlFor="Phone">Phone Number:</label><br/>
            <input type="text" 
            onChange = {e => {setPhone(e.target.value)}}required/>
            </form>
        </div>
    )
}