=begin
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output should be capitalized 
only if the original word was capitalized (known as Upper Camel Case, also often referred 
to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
=end
require 'pry'
def to_camel_case(str)
toggle = false
result = ''
str.each_char {|char|
  if toggle
    char = char.capitalize 
    toggle = !toggle 
  end 
  if char == '_' || char == '-'
    char = ''
    toggle = !toggle
  end
  result << char
}
result 
end

puts to_camel_case('the-stealth-warrior')
puts to_camel_case('The_Stealth_Warrior')

def to_camel_case(str)
  str.gsub(/[_-](.)/) {"#{$1.upcase}"}
end