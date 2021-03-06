=begin
Complete the solution so that the function will break up camel casing,
 using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""   
=end
require 'pry'

def solution(string)
  if string.empty? 
    return string 
  end 
  newString = ''
  string.each_char{ |el| 
   if el.match(/[A-Z]/) 
    newString << " "
    newString << el 
   else 
    newString << el 
   end 
}
newString
end

#https://stackoverflow.com/questions/15825872/ruby-regex-what-does-the-1-mean-for-gsub
def solution(string)
  string.gsub /([A-Z])/, ' \1'
end

#Lookahead and lookbehind, collectively called “lookaround”, are zero-length assertions
def solution(string)
  string.gsub(/(?=[A-Z])/, ' ')
end

#regex free, ez to read
def solution(string)
  string.chars.map { |s| s == s.downcase ? s : " #{s}" }.join
end


binding.pry