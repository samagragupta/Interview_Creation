Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :interviews
      resources :participants
      resources :interview_participants
    end
  end
end
