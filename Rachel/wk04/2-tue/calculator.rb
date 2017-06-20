
# Specification:
  # - A user should be given a menu of operations
  # - A user should be able to choose from the menu
  # - A user should be able to enter numbers to perform the operation on
  # - A user should be shown the result
  # - This process should continue until the user selects a quit option from the menu
# Phase 1
  # - Calculator functionality
  #   - Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
  # - Advanced Calculator functionality
  # - Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
  # - User should be given a menu of Calculator functionality
  # - User should be able to choose intended functionality
# Optional Extensions
  # - Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4

def hello
  puts 'Hello! Im Caz the calculator. I can help you do simple calculations. Lets begin.'
end

def calculation_operator
  puts 'Type 1 to add, 2 to subtract, 3 to multiply, 4 to divide, 5 to apply exponentiations and 6 to find the squareroot'
  operator = gets.to_i

  if operator == 1
    'add'
  elsif operator == 2
    'subtract'
  elsif operator == 3
    'multiply'
  elsif operator == 4
    'divide'
  elsif operator == 5
    'exponents'
  elsif operator == 6
    'squareroot'
  else
    'cal_error'

  end
end

def calculate_answer(operator,num1,num2)
  if operator == 'add'
    num1 + num2
  elsif operator == 'subtract'
    num1 - num2
  elsif operator == 'multiply'
    num1 * num2
  elsif operator == 'divide'
    num1 / num2
  elsif operator == 'exponents'
    num1 ** num2
  elsif operator == 'squareroot'
    Math.sqrt(num1)
  end
end

# def no_numbers
#   puts 'How many numbers in your calculation?'
#   #run loop depending no of numbers
#   numbers = gets.to_i

hello
run_calculator = 1

while run_calculator == 1

  current_calculations = calculation_operator()

  if current_calculations == 'cal_error'

    puts 'What you trying to pull. Try again!'

  else
    puts "Tell me the first number to #{current_calculations}:"
    first_number = gets.to_i
    puts "Tell me the second number to #{current_calculations}:"
    second_number = gets.to_i

    answer = calculate_answer(current_calculations,first_number,second_number)

    puts "The answer is #{answer}"
    puts 'Type 1 to run another calculation or 2 to end: '
    run_calculator = gets.to_i

    if run_calculator != 1
      puts 'Okay bye for now!'

    end
  end
end
