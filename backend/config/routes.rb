Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :tiles, only: [:index]
    resources :clothing_articles, only: [:index]
    resources :users, only: [] do 
      collection do
        get 'get_user_info'
      end
    end
    resources :owned_articles, only: [:index]

    # Custom route for the 'index' action of the OwnedArticlesController
    get 'users/:user_id/owned_clothing', to: 'owned_articles#index', as: 'user_owned_clothing'
  end
end