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
    # flash.now[:alert] = "About alert message"
  end

  def details
  end

  def artists
  end

  def albums
  end

  def album
  end

  def long_album
  end

  def artist
  end

  def comments
  end

  def sign_up
    # flash.now[:alert] = "Account could not be created"
  end

  def new_artist
  end

  def new_album
  end

  def account
  end
end
