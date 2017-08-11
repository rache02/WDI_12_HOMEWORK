
- Bundle install will install all gem in gemfile
  1. Check that all gem needed are in gemfile
  2. Check the source of gemfile to make sure legit
- Follow error -> there is no database
  1. To check database of app look at database.yml in config
  2. This is the file being used to create the database
  3. Only then can you do rails db:create
- Follow error -> no migration due to undefined local variable
  1. The error will be in db migrate file
  2. Identify that you are passing the block into the method but the parameter are not defined properly
  3. Only once this has been corrected can migration be run
- Follow error -> uninitialised constant HouseController (IMPT. Route error)
  1. Must check both routes and controllers to confirm all naming conventions match (ALL naming should be based on routes)
    - Generally controllers should be plural HOWEVER there are some routes that maybe singular such as session
    - If your file name is plural then your class name should be plural/ if your file name is singular then class name is singular
- Follow error -> TypeError in HousesController#index
  1. Superclass is a class that is being inherited from
    - ActiveRecord is a module not a class
    - If there is no ApplicationRecord must inherit form ActiveRecord::Base
- Follow error -> LoadError in HouseController#index
  1. Model files are singular
- Follow error -> NameError undefined variable
  1. Make sure naming conventions follow path from routes to controllers to models to views/templates
  2. Check whether variables have been defined correctly
- Follow error -> Undefined local variable house path
  1. When there is a path issue should look to routes as define path
- Follow error -> no route matches, missing id ********
  1. Check the path helper methods laid out in rails/info/routes



- DO NOT CHANGE SCHEMA FILE
- Using link_to method allows you to pass in
