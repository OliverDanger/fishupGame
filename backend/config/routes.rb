Rails.application.routes.draw do
  namespace :api do
    defaults format: :json do

      resources :tiles, only: [:index]
      resources :clothing_articles, only: [:index]
      resources :users, only: [] do 
        collection do
          get 'get_user_info'
        end
      end

    end
  end
end
