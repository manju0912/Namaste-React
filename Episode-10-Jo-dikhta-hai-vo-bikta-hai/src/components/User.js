import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name: "",
                login: "",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/manju0912");
        const json = await data.json();

    this.setState({
        userInfo: json,
    });

    }

    render () {

        const {name, login, avatar_url} = this.state.userInfo;
        return (
            <div className='user-info'>
                <img src={avatar_url} />
                <h3>{name}</h3>
                <p>{login}</p>
            </div>
        )
        
    }
}

export default User;