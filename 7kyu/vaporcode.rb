require 'pry'

def vaporcode(string)
  if string.empty?
      return nil;
  end
 string.delete(" ").upcase.chars.join"  "
end

vaporcode('dope')
binding.pry