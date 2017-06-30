
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pry'

def get_movie(movie)
  HTTParty.get("http://www.omdbapi.com/?s=#{movie}&apikey=2f6435d9").parsed_response["Search"]
end

def run_sql(sql)
  db = PG.connect(dbname: 'movies')
  result = db.exec(sql)
  db.close
  return result
end

get '/' do
  erb :index
end

get '/movie_list' do
  movie_name = params['movie_name']
  # movie_list = "SELECT title FROM get_movie WHERE title LIKE #{movie_name};"
  movies = get_movie(movie_name)
  titles = []
  movies.each do |movie|
    titles.push(movie['Title']);
  end
  locals = {locals: {movies: movies}}
  erb(:movie_list, locals)
end

get '/movie_name' do
  title = params["title"]
  movie = HTTParty.get("http://www.omdbapi.com/?t=#{title}&apikey=2f6435d9").parsed_response
  locals = {locals: {movie: movie}}
  erb(:your_movie, locals)
end

post '/movie' do
  sql = "INSERT INTO movies(title, poster, plot) VALUES ('#{params['Title']}', '#{params['Poster']}', '#{params['Plot']}');"
  run_sql(sql)
end


# query string is ? => /profile?title=<%= movie['Title']%>

# # get movie name
# movie_name = params['movie_name']
# # search movie database for variable name
# movie = get_movie(movie_name).parsed_response
# locals = {locals: {movie: movie}}
#
# erb(:your_movie, locals)





# @dishes = run_sql('SELECT * FROM  dishes order by name;')
# erb :index
