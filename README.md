Get With The Times
==================
------------------

Getting Started
---------------

For the development of the Get With The Times site, I am using the [Gulp build system](http://gulpjs.com/) to automate several tasks. These tasks are:

  * Compile Sass into CSS
  * Compile Jade into HTML
  * Autoprefix compiled CSS
  * Live reload browser on save

First, let's make sure that everything is installed on our systems.

### 1. Installing Sass & Jade

If you already have Sass and Jade installed on your system, jump ahead to section 2.

**To install the latest version of sass,** run the command below:

`$ sudo gem install sass`

Now sass should be installed. For more information and documentation on sass, visit the [sass website](http://sass-lang.com/).

**To install Jade,** you will need to install the node.js package manager AKA **npm**. Click [here](https://nodejs.org/en/) to visit the website and download the node.js installer.

**If you already have npm installed, you're in luck.** All you need to do to install the latest version of Jade is run the following command:

`$ sudo npm install jade --global`

Congrats! Now you have Sass and Jade. Look at you! _You are so cool._

### 2. Install Gulp

Like Jade, Gulp can be installed via node package manager.

All you need to do to install Gulp globally is enter the following command.

`$ sudo npm install --global gulp-cli`

Now you are good to go!

### 3. Running Gulp

To run the super cool gulp task that I've created is really easy.

**1. Open the command line and move into the get-with-the-times project folder like so:**

`$ cd path/to/get-with-the-times`

**2. Now simply run the command:**

`$ gulp`

A new browser preview window will open and you will see the beautiful Get With The Times homepage :)

This app is available (here)[http://www.getwiththetimes.us/]
