nor-ps1
=======

Simple CLI utility to format custom bash PS1 prompt

TODO
----

We use [Trello board](//trello.com/b/eytFyiQk/nor-ps1) to organize development and keep track on things to do.

Install the command
-------------------

Install it from the NPM:

```
npm install -g nor-ps1
```

Use the command with Bash
-------------------------

Then you can use it with Bash by editing following lines to your file `~/.bashrc`:

```
PS1='[\u@\h $(nor-ps1)]\$ '
```

We use here `$(nor-ps1)` instead of the default `\w`.

***Please note!*** It must be quoted by single quotes.

Examples
--------

### NPM directories

```
[jhh@zeta3-lts ~/git/sendanor]$ cd node-crypt3/
[jhh@zeta3-lts npm:crypt3@0.1.4 .]$ ls
binding.gyp  build  crypt3.cc  index.js  LICENSE  package.json  README.md
[jhh@zeta3-lts npm:crypt3@0.1.4 .]$ cd build/
[jhh@zeta3-lts npm:crypt3@0.1.4 ./build]$ ls
binding.Makefile  config.gypi  crypt3.target.mk  Makefile  Release
```

### Git directories

```
[jhh@zeta3-lts ~/tmp]$ cd gittmp/
[jhh@zeta3-lts git: .]$ ls
test
[jhh@zeta3-lts git: .]$ cd test/
[jhh@zeta3-lts git: ./test]$ ls
foo.txt
```

The support for git paths could be much better. Any ideas how?

License
-------

The MIT license, of course.

Commercial Support
------------------

You can buy commercial support from [Sendanor](http://sendanor.com/software).
