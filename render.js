function Render () {
    const delay = 500

    const _createComment = function (comment) {
        const commentDiv = $(`<div data-id="${comment.id}" class="comment"></div>`)
        commentDiv.append(`<button class="delete-comment">X</button> ${comment.text}`)
        return commentDiv
    }
    
    const _createPost = function (post) {
        const postDiv = $(`<div class="post" data-id="${post.id}"></div>`)
        postDiv.append($(`<h3>${post.text}</h3>`))
        const commentsDiv = $('<div class="comments"></div>')
        let lastComment
        for (comment of post.comments) {
            lastComment = _createComment(comment)
            commentsDiv.append(lastComment)
        }
        postDiv.append(commentsDiv)
        postDiv.append(`<input type="text" placeholder="What do u want add?">`)
        postDiv.append(`<button class="comment-button">Comment</button><br>`)
        postDiv.append(`<button class="delete">Delete post!</button>`)
        return postDiv
    } 
    const renderPosts = function (posts) {
        $('#posts').empty()
        for (let postNum = posts.length - 1;postNum > -1; postNum-- ) {
            $('#posts').append(_createPost(posts[postNum]))
        }
    }

    const renderPostsWithNew = function (posts) {
        $('#posts').empty()
        
        const firstElem = _createPost(posts[posts.length - 1])
        firstElem.attr('id', 'first-element');
        firstElem.hide()
        $('#posts').append(firstElem)
        for (let postNum = posts.length - 2;postNum > -1; postNum-- ) {
            $('#posts').append(_createPost(posts[postNum]))
        }
        $('#first-element').show(delay)
    }

    const hidePost =function (postId) {
        $('#posts').find(`[data-id='${postId}']`).hide(delay)
    }
    const hideFastAndShowSlowComment = function(commentId) {
        $('#posts').find(`[data-id='${commentId}']`).hide()
        $('#posts').find(`[data-id='${commentId}']`).show(delay)
    }
    const hideSlowComment = function(commentId) {
        $('#posts').find(`[data-id='${commentId}']`).hide(delay)
    }

    return {
        renderPosts,
        renderPostsWithNew,
        hidePost,
        hideFastAndShowSlowComment,
        hideSlowComment
    }

}
