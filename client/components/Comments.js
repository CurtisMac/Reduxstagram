import React, { Component } from 'react'

class Comments extends Component {

  renderComment(comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={()=>this.props.removeComment(this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e){
    e.preventDefault()
    const postId = this.props.params.postId
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment, this)}
        <form 
          ref='commentForm'
          className='comment-form'
          onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type='text' 
            ref='author'
            placeholder='Author' 
          />
          <input 
            type='text' 
            ref='comment'
            placeholder='Comment' 
          />
          <input 
            type='submit' 
            hidden 
          />
        </form>
      </div>
    )
  }
}

export default Comments