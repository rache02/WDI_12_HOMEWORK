require 'pry'

puts 'Welcome to HappiTails Animal Shelter'

Shelter = {}

  class Animals
    def initialize (name,age,gender,species,toys)
      @name = name
      @age = age
      @gender = gender
      @species = species
      @toys = toys
    end
  end

  class Clients
    def initialize (name,children,age,pets)
      @name = name
      @children = children
      @age = age
      @pets = pets
    end
  end


binding.pry
