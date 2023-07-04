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

    const _generatePostId = () => "p" + _postIdCounter++;
    const _generateCommentId = () => "c" + _commentIdCounter++;

    const _findPostIndexById = (id) => {
        return _arrayPosts.findIndex((post) => post.id === id)
    }
    
    const _findCommentIndexByPostIdCommentId = (postId, commentId) => {
        return _arrayPosts[_findPostIndexById(postId)].comments.findIndex((comment) => {
            return comment.id === commentId
        })
    }

    const getPosts = function () {
        return _arrayPosts;
    }
    const addPost = function (text) {
        _arrayPosts.push({
            text: text,
            id: _generatePostId(),
            comments: []
        })
    }
    const removePost = function (postId) {
        const postIndex = _findPostIndexById(postId)
        if (postIndex != -1){
            _arrayPosts.splice(postIndex, 1)
        }
    }

    const addComment = function (postId, text) {
        const postIndex = _findPostIndexById(postId)
        if (postIndex != - 1){
            const commentId = _generateCommentId()
            _arrayPosts[postIndex].comments.push({
                id: commentId,
                text: text
            })
            return commentId;
        }
    }
    const removeComment = function (postId, commentId) {
        const postIndex = _findPostIndexById(postId)
        const commentIndex = _findCommentIndexByPostIdCommentId(postId, commentId)
        if (postIndex != -1 && commentIndex != -1){
            _arrayPosts[postIndex].comments.splice(commentIndex, 1)
        }
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
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment,
        showPostsConsole
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
