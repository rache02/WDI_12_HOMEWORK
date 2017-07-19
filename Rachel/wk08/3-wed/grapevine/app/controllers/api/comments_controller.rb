class Api::CommentsController < ApplicationController

  def show
    comment = Comment.find(params[:article_id])
    render json: {
      content: comment.content
     }
  end

end
