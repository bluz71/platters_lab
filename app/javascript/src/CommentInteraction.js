class CommentInteraction {
  constructor () {
    this.setEventHandlers()
  }

  setEventHandlers () {
    $(document).on('keyup', '[data-behavior~=comment-write]', this.commentKeyup)
  }

  commentKeyup (event) {
    const comment = $('[data-behavior~=comment-write]').val()
    let charsRemaining = 280 - comment.length
    if (charsRemaining > 0) {
      $('[data-behavior~=comment-length]')
        .removeClass('comment-error')
        .html(`<i class='fa fa-plus-square-o'></i> ${charsRemaining}`)
      if (charsRemaining === 280) {
        $('[data-behavior~=comment-post]').prop('disabled', true)
      } else {
        $('[data-behavior~=comment-post]').prop('disabled', false)
      }
    } else if (charsRemaining === 0) {
      $('[data-behavior~=comment-length]')
        .removeClass('comment-error')
        .html(`<i class='fa fa-plus-square-o'></i> ${charsRemaining}`)
      $('[data-behavior~=comment-post]').prop('disabled', false)
    } else {
      // The 280 character limit has been exceeded, we are now in the negative.
      charsRemaining = -charsRemaining
      $('[data-behavior~=comment-length]')
        .addClass('comment-error')
        .html(`<i class='fa fa-minus-square-o'></i> ${charsRemaining}`)
      $('[data-behavior~=comment-post]').prop('disabled', true)
    }
  }
}

export default CommentInteraction
