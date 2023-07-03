function TweeterModule () {
    const _arrayPosts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let _postIdCounter = 3
    let _commentIdCounter = 7
    const getPosts = function () {
        return _arrayPosts;
    }
    const addPost = function (text) {
        const postId = _postIdCounter++;
        _arrayPosts.push({
            text: text,
            id: "p" + postId,
            comments: []
        })
    }
    const removePost = function (postId) {
        for (postNum in _arrayPosts) {
            if (_arrayPosts[postNum].id === postId) {
                _arrayPosts.splice(postNum, 1)
                return true
            }
        }
        return false
    }
    const addComment = function (postId, text) {
        const commentId = _commentIdCounter;
        _commentIdCounter++;
        for (post of _arrayPosts) {
            if (post.id === postId) {
                post.comments.push({
                    id: commentId,
                    text: text
                })
                return commentId
            }
        }
    }
    const removeComment = function (postId, commentId) {
        for (postNum in _arrayPosts) {
            if (_arrayPosts[postNum].id === postId) {
                for (commentNum in _arrayPosts[postNum].comments) {
                    if(_arrayPosts[postNum].comments[commentNum].id === commentId) {
                        _arrayPosts[postNum].comments.splice(commentNum, 1);
                        return true
                    }
                }
            }
        }
        return false
    }
    const showPostsConsole = function () {
        console.log('-------------------------------------------------------------------------------------')
        for (post of _arrayPosts) {
            console.log(post.id, post.text)
            for (com of post.comments) {
                console.log("    ", com.id, com.text)
            }
        }
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
        showPostsConsole: showPostsConsole
    }
}

// const Tweeter = TweeterModule()
// Tweeter.showPostsConsole()
// Tweeter.addPost('Hello')
// Tweeter.addPost('Hello2')
// Tweeter.addPost('Hello3')
// Tweeter.showPostsConsole()
// Tweeter.removePost('p1')
// Tweeter.addComment("p4", "Hello Comment")
// Tweeter.addComment("p5", "Hello Comment 2")
// Tweeter.showPostsConsole()
// Tweeter.removeComment("p2", "c6")
// Tweeter.showPostsConsole()
