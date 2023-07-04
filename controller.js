const model = TweeterModule()
const render = Render()

const updatePage = function () {
    render.renderPosts(model.getPosts())
}
updatePage()

const upgradePageWithNewPost = function() {
    render.renderPostsWithNew(model.getPosts())
}

$('#post').click(function () {
    model.addPost($('#input').val())
    $('#input').val("")
    upgradePageWithNewPost()
})

$("body").on("click", ".delete", function() {
    const postId = $(this).closest('.post').data().id
    model.removePost(postId)
    render.hidePost(postId)
});

$("body").on("click", ".delete-comment", function() {
    const comId = $(this).closest('.comment').data().id
    const postId = $(this).closest('.post').data().id
    model.removeComment(postId, comId)
    render.hideSlowComment(comId)
});

$("body").on("click", ".comment-button", function() {
    const postId = $(this).closest('.post').data().id
    const text = $(this).closest('.post').find('input').val()
    $(this).closest('.post').find('input').val("")
    const commentId = model.addComment(postId, text)
    updatePage()
    render.hideFastAndShowSlowComment(commentId)
});

