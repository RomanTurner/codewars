require 'pry'
require 'digest'
def pass_hash(str)
Digest::MD5.hexdigest str 
end

binding.pry