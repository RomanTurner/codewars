=begin 
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
get_sum(1, 0) == 1   # 1 + 0 = 1
get_sum(1, 2) == 3   # 1 + 2 = 3
get_sum(0, 1) == 1   # 0 + 1 = 1
get_sum(1, 1) == 1   # 1 Since both are same
get_sum(-1, 0) == -1 # -1 + 0 = -1
get_sum(-1, 2) == 2  # -1 + 0 + 1 + 2 = 2
=end
require 'pry'

# def get_sum(a,b)
#     x , y = 0 , 0
#   if a > b
#     y = a
#     x = b
#   else 
#     y = b 
#     x = a
#   end
#   Array(x..y).inject(:+)
# end


def get_sum(a,b)
  a < b ? (a..b).inject(:+) : (b..a).inject(:+)
end

binding.pry