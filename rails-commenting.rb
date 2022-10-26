# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) creates a main index of all the webpages and thier paths
class BlogPostsController < ApplicationController
  def index
    # ---2) creates the method @posts and sets it to show all current values of any data stored in BlogPost when index is called 
    @posts = BlogPost.all
  end

  # ---3) creates method @post and sets it to show all data in the model BlogPost using their primary key as a peramiter for the search (.find)
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) creates a method @post and sets it equal to adding the newly created data to the BlogPost model/table 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creates a method @post and sets it to create a new blog post row using the specified params if the post is valid
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) creates a method @post and sets it to identify a specific row on the table BlogPost and edit that information
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) creates a method @post that updates the blog post by it's paramiter if it is valid 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) sends to homepage once a blog post is deleted 
      redirect_to blog_posts_path
    end
  end

  # ---9) hides code under "private"
  private
  def blog_post_params
    # ---10) requires the blog post to have a title and content to be private
    params.require(:blog_post).permit(:title, :content)
  end
end
