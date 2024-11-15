import "./Voting_page.css"
const Voting_page=()=>{
    return(
        <div className="form-container">
            <form action="/submit" method="POST" id="form">
                <label htmlFor="Email">Email:</label>
                <input type="text" name="Email" required></input>
                <label htmlFor="PassWord">Password:</label>
                <input type="text"></input>
            </form>
        </div>
    )
}
export default Voting_page