
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'PG'

require_relative 'db_config'
require_relative 'models/food_img'
require_relative 'models/comment'

def run_sql(sql)
  db = PG.connect(dbname: 'food_failures')
  result = db.exec(sql)
  db.close
  return result
end

get '/' do
  @food = Food_img.all
  erb :index
end

get '/food/new' do
  erb :new
end

post '/food' do
  food = Food_img.new
  food.name = params[:name]
  food.image_url = params[:image_url]
  food.save
  redirect '/'
end

get '/food/:id' do
  @food = Food_img.find(params[:id])
  @comments = Comment.where(dish_id: params[:id])
  erb :food
end

get '/dishes/:id/edit' do
  @dish = Food_img.find(params[:id])
  erb :edit
end

patch '/dishes/:id' do
  dish = Food_img.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:imag_url]
  dish.save
  redirect '/dishes'
end

delete '/dishes/:id' do
  dish = Food_img.find(params[:id])
  dish.destroy
  redirect '/'
end

post '/comments' do
  comments = Comment.new
  comments.dish_id = params[:dish_id]
  comments.description = params[:description]
  comments.save
  redirect "/dishes/#{ params[:dish_id]}"
end
