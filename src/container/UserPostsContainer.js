import React from 'react'
import {connect} from 'react-redux'
import  { getAllPosts } from '../action/UserPosts';
import UserPosts from '../component/UserPosts';
const mapStateToProps = (state) => { debugger;
	return {
		list : state.UserPostReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		componentWillMount(){
			dispatch(getAllPosts());
		}
		
	}
}

const UserPostsContainer = connect(
	mapStateToProps, mapDispatchToProps
		)(UserPosts)

export default UserPostsContainer;
