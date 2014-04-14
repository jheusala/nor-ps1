nor-ps1
=======

Simple CLI utility to format custom bash PS1 prompt

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

License
-------

The MIT license, of course.
