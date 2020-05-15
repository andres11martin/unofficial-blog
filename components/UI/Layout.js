import Header from "../Header"

const Layout = props => {

    return (
        <div>
            <Header show={props.show} />
            {props.children}
        </div>
    )
}

export default Layout