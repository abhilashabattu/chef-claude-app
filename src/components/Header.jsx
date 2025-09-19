import chef_claude_logo from '../images/chef_logo.png'

export default function Header(){
    return(
        <header>
            <img src={chef_claude_logo} ></img>
            <h1>Chef Claude</h1>
        </header>
    )
}