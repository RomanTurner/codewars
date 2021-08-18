require 'pry'

def vaporcode(string)
  if string.empty?
      return nil;
  end
# alternatively can string.gsub!(/\s+/, '') and then 
 string.delete(" ").upcase.chars.join"  "
end

vaporcode('dope')