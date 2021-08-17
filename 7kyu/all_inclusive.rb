require 'pry'
=begin 
#all? checks if every iteration returns a true on the conditional
#include will return t/f based on a conditional match
#rotate(count = 1) ⇒ Object  i.e. 'abcdefgh'.rotate(2) #=> 'cdefghab'
=end
def all_inclusive?(str, arr)
(1..str.length).all? { |x| arr.include?(str.chars.rotate(x).join) }
end

binding.pry