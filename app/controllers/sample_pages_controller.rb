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
end
