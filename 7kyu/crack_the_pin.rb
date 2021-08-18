require 'digest'
def add_zeroes(num)
    num_string = num.to_s
  if num_string.length <= 5
    (5 - num_string.length).times do
     num_string = '0' + num_string
    end
  end
  num_string
end

def crack(hash)
  count = 0;
  limit = 99999;
  while count_integer < limit
    password_attempt = Digest::MD5.hexdigest add_zeroes(count);
    if password_attempt == hash
      break;
      end 
    count = count + 1;
  end
  add_zeroes(count)
end


=begin 

require "digest"

def crack(hash)
  ("00000".."99999").detect { |pin| hash == Digest::MD5.hexdigest(pin) }
end
=end