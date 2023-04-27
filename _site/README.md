# Jekyll docs
https://jekyllrb.com/docs/

## Theme
 *  folio
Documentation: https://github.com/bogoli/-folio
Demo: http://bogoli.github.io/-folio/


## Local development
To serve locally: 
    bundle exec jekyll serve
Go to: http://localhost:4000/
To stop: CTRL + C

## Compile
To build: 
    bundle exec jekyll build


## New post
https://jekyllrb.com/docs/posts/
    bundle exec jekyll post "My New Post"

To view new posts: 
    bundle exec jekyll build

## Git workflow
To save local changes: 
    **git push origin 2023**


## Architecture
- site subfolder is for build only
- edit .md files in the root directory
- work posts in posts/
    -- education and research filtered subpages located in filtered folder
- project pages in portfolio/
    -- data and design filtered subpages located in filtered folder

<hr/>

*QA*
- resource button padding

*DESIGN*
- blankcard if empty
- prof pic

*BUILD*
- skills graph
- portfolio list of projects
- work preview images

*UPDATE*
- domain name
- ftgu
    -- vue redirects
    -- update project page links afterwards
- cooper
    -- footer
- ml generations
    -- face recog patterns
    -- new worlds
- creative coding
    -- map link
