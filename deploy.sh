npm run build
# The result is in "build" directory.

export src=$PWD
rm -rf /tmp/gh
git clone git@github.com:AlexanderZvyagin/AlexanderZvyagin.github.io.git /tmp/gh
cd /tmp/gh
git checkout gh-pages
rm -rf *
cp -a $src/build/* .
git commit -m "update" .
git push
cd $src
rm -rf /tmp/gh
