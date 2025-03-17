"use client"

const Header = (props) => {
console.log(props);
const {color, title} = props;
    return(
        <header style={background: color}>
            <h1>Spring Portfolio</h1>
        </header>
    )
}

export default Header