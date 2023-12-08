require_relative "boot"

require "rails/all"

require "dotenv/load"
Dotenv.load

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Fishup
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins ENV['FRONTEND_ORIGIN'] || 'http://localhost:3000'
        resource '*', headers: :any, methods: [:get, :put, :options]
      end
    end

    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore

    config.api_only = false
  end
end
