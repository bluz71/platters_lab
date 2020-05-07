Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "sample_pages#home"

  get "log_in" => "sample_pages#log_in"
  get "log_out" => "sample_pages#log_out"
end
