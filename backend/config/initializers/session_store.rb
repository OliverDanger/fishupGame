# config/initializers/session_store.rb
if Rails.env.production?
  Rails.application.config.session_store :cookie_store, key: '_fish_up_game', domain: ".#{MyAppConstants::PRODUCTION_DOMAIN}"
else
  Rails.application.config.session_store :cookie_store, key: '_fish_up_game'
end
