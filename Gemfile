source "https://rubygems.org"

ruby "3.4.5"

gem "rails", "~> 6.1", ">= 6.1.7.10"
gem "sqlite3", "~> 1.4"
gem "puma", "~> 6.1"
gem "sass-rails", ">= 6"
gem "cssbundling-rails"
gem "jsbundling-rails"
gem "jbuilder", "~> 2.11", ">= 2.11.5"
gem "font-awesome-rails", "~> 4.7", ">= 4.7.0.7"
gem "bootsnap", "~> 1.18", ">= 1.18.4", require: false
# Add the following three Gems to fix bootsnap warnings.
gem "mutex_m", "~> 0.2.0"
gem "base64", "~> 0.2.0"
gem "bigdecimal", "~> 3.1", ">= 3.1.8"
gem "ostruct", "~> 0.6.1"
gem "logger", "~> 1.6", ">= 1.6.1"
gem "fiddle", "~> 1.1", ">= 1.1.5"

group :development, :test do
  gem "hirb", require: false
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "pry-rails"
  gem "pry-doc", require: false
  gem "pry-byebug", git: "https://github.com/andrehjr/pry-byebug.git", branch: "allow-latest-pry", require: false
  gem "amazing_print", require: false
end

group :test do
  gem "capybara", "~> 3.39.2"
  gem "selenium-webdriver"
  gem "webdrivers"
end
