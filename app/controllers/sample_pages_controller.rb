class SamplePagesController < ApplicationController
  def home
  end

  def log_in
    sign_in
    redirect_to root_path
  end

  def log_out
    sign_out
    redirect_to root_path
  end

  def about
    # flash.now[:notice] = "About notice message"
  end

  def details
    # flash.now[:alert] = "Details alert message"
  end

  def albums
  end

  def album
  end

  def artist
  end

  def comments
  end
end
