---
title: Too many hits with the snake
date: 2015-09-05 02:02 UTC
tags: coding, python
image_src: /images/jafar-and-genie.png
---

This weekend is Labor day weekend, here in the US of A, and as always seems to
be the case, work has some critical milestone that needs resolving yesterday.
On the one hand, this holiday the hammer seems to have fallen on my team, but
on the other hand, fortunately it missed yours truly.  Unfortunately, that
means some members of my team find themselves facing the high probability of
working this weekend. While this is good news for me, this just means that
I&rsquo;ll likely find myself wondering about the team, and wishing I could
help get them home. So, when a teammate called me today to ask for some python
coding help, I warned him I don&rsquo;t really know the language, grabbed my
trusty book, and headed over to help.

Just you level set those of you who happen upon this page, when I told my
coworker that I don&rsquo;t really know python, I&rsquo;m not exaggerating. I
do know enough c, c++, perl, ruby, shell and other languages to be able to read
and understand the python code, but when the time comes to write it,
I&rsquo;m pretty green when it comes to creating something new. So, ready to
experiment and do my best, I listened to my friend describe what they needed.
They have a vendor supplied appliance which, fortunately enough, has a python
API; they need to tweak a script that was intended to configure the
appliance, and make it configure, then periodically change the configuration.
I nodded my understanding, and sat down to dig in.

Over the course of the next 3 hours, I dug into the script, attempting to
create an expertise on both the appliance and the foreign language at the same
time.  Eventually, I found my way to their libraries, and was fortunate enough
to be able to guess which functions would prevent the new code that I wrote
from causing the API to crash every time it made the changes that looked so
easy on the surface.  At the end of the day, I put in a little overtime for the
week, but hopefully I was able to prevent my friends needing to work all
weekend manually adjusting the settings attempting to find the special
configuration that would reveal the root of their issues.  As I write this I
still don&rsquo;t know if they&rsquo;ve been successful, but I hope that I was
able to help.

Now, most of what I learned today is pretty well tied to that vendor API, so
not very useful for the world at large. That said, I learned some basic python
syntax that I&rsquo;m going to share here, primarily the differences between
ruby and python syntax for the same basic functionality.  Hopefully, this will
help someone else.

```bash
# Sample shell command for the following code examples
$ command arg1 75 arg3
```

```ruby
# Ruby code example

irb(main):001:0> ARGV.length
=> 3
irb(main):002:0> puts $0
command
=> nil
irb(main):003:0> puts ARGV
arg1
75
arg3
=> nil
irb(main):004:0> ARGV[1] + 2
=> 77
```

```python
# Python code example

>>> len(sys.argv)
4
>>> print sys.argv
['command', 'arg1', '75', 'arg3']
>>> string.atoi(sys.argv[2]) + 2
77
```

Between ruby and python the arguments to your script are handled differently,
apart from the difference in variable name (sys.argv vs ARGV), there is also
the difference of the number of &ldquo;arguments&rdquo; included in the list.
Python follows the largely standardized method of passing the name of the
script in as the first argument, however ruby sets the global variable `$0` to
the script name. I go back and forth over which is the better approach, but at
the end of the day, as a progamming generalist, I&rsquo;d have to give the nod
toward the more standard implementation.  Despite the fact that the ruby
implementation is a bit more intuitive for newer developers.

The second difference displayed in the code blocks above, is really related to
the fact that in ruby **everything** is an object.  So, in the ruby example,
the array is an object and we called the length method on it.  In python
however, `len()` is a globally defined function that acts on it&rsquo;s
argument to determine it&rsquo;s length, it works on strings and arrays, and
most likely many other datatypes; I just haven&rsquo;t tested them all yet.  If
I had to choose one implementation above the other; here I&rsquo;d have to give
the nod to ruby. Given that we have to ability to treat everyhing as an object,
the white-tower purist in me likes the ruby implementation better.

Keep in mind however, that in these discussions no upside is without a
downside.  In this case, (I&rsquo;m too lazy to test right now) the downside is
(theoretically) that objectifing all your datatypes should be considerably
slower than the slightly more raw methods used in python. Therefore, I&rsquo;d
expect that for a direct performance test, python should outperform ruby in
most cases.  Perhaps I&rsquo;ll follow this post with some benchmarking later,
that actually sounds like it&rsquo;d be fun, once I&rsquo;ve slept a bit that
is.

