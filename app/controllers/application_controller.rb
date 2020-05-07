class ApplicationController < ActionController::Base
  helper_method :signed_in?

  @@signed_in = false

  def signed_in?
    @@signed_in
  end

  private

  def sign_in
    @@signed_in = true
  end

  def sign_out
    @@signed_in = false
  end
end
