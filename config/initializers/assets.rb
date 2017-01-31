Camp::Application.configure do
# Be sure to restart your server when you modify this file.
config.serve_static_files = true

  config.assets.paths << Rails.root.join('app', 'assets')
# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'


# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
 config.assets.precompile += %w(
    plugins/rs-plugin/js/jquery.themepunch.revolution.min.js
    plugins/rs-plugin/js/jquery.themepunch.tools.min.js
    plugins/selectbox/jquery.selectbox-0.1.3.min.js
    plugins/rs-plugin/css/settings.css
    subscription.js
    *.svg *.eot *.woff *.ttf *.png *.jpg *.jpeg *.gif
  )
end