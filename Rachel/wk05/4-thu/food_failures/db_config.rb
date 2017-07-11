require 'pry'
require 'active_record'

require_relative 'db_config'
require_relative 'models/food_img'
require_relative 'models/comment'

options = {
  adapter: 'postgresql',
  database: 'food_failures'
}

ActiveRecord::Base.establish_connection(options)
