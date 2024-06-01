function usergreeting(props) {

    return(props.isLoggedIn ? <h2>welcome {props.username}</h2> :
                                <h2>pleaase log in</h2>);

}

export default usergreeting