import React, { Component } from 'react';
import autoBind from 'auto-bind';
import ReactTable from "react-table";
import "react-table/react-table.css";
import UserPostsStyle from './UserPosts.css';
import UserPostsColumn from './UserPostsColumn';
import PropTypes from 'prop-types';

class UserPosts extends Component {
    constructor(props){
        super(props);
        this.componentWillMount = props.componentWillMount.bind(this);
        autoBind(this);
    }
    render(){
        const { list : { posts } } = this.props;
        return(
            <div className='posts-container'>
                {
                    posts && posts.length > 0 && 
                    <ReactTable
                    data={posts}
                    columns={UserPostsColumn}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                }
            </div>
        )
    }
}

UserPosts.propTypes = {
    posts: PropTypes.array
}

export default UserPosts;
