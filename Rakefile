task :default => :build

task :blog do
  system("bundle exec middleman article")
end


task :build do
  system("bundle exec middleman build")
end

task :deploy => :build do
  system("rsync -avz --delete --progress build/* www.icebergh.us:/var/www/icebergh.us")
end
