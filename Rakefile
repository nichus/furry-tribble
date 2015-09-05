task :default => :build

task :blog
  system("bundle exec middleman article")
end


task :build
  system("bundle exec middleman build")
end

task :deploy => :build
  system("rsync build/* www.icebergh.us:/var/www/icebergh.us")
end
