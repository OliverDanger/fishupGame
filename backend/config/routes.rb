Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do

    # GET api/tiles gives all map tiles
    resources :tiles, only: [:index]

    # GET api/clothing_articles?ids=1,2,3,etc... gives selected clothing info by id
    # GET api/clothing_articles gives all clothing info
    resources :clothing_articles, only: [:index]

    # User authentication routes
    post '/login', to: 'sessions#create'
    post '/logout', to: 'sessions#destroy'
    get '/logged_in', to: 'sessions#is_logged_in?'

    # GET api/users/get_user_info?username=:username gives selected user info
    # GET api/users/index?id=:id gives selected user info
    resources :users, only: [:create, :show, :index, :update] do
      resources :items, only: [:create, :show, :index, :destroy]
      member do
        get 'get_user_clothes'
        get 'get_user_wardrobe'
        put 'set_user_clothes', to: 'users#set_user_clothes'
      end
    end
    
    # GET api/users/:user_id/owned_clothing gives selected user's owned clothing
    resources :owned_articles, only: [:index]
    get 'users/:user_id/owned_clothing', to: 'owned_articles#index', as: 'user_owned_clothing'
  end
end