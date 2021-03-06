import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';
import { deletePost } from '../actions';


class PostsShow extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/');
        })
    }

    render() {
        const { post } = this.props;
        if (!post) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <Link to="/">Back to index</Link>
                <button className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}


export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)