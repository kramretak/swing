# Swing
## *Because the world needed one more CSS library*

Swing is the result of several different stints at companies who wanted to "go responsive". These days, it seems that the #1 "solution" is to use Bootstrap, because that's what all the cool kids use.

Don't get me wrong, I think Bootstrap is a really nice framework to help you get you up and running quickly, but there are things about it that made me write my own CSS framework, Swing, instead:
* **Responsiveness**. First of, when I started building Swing, responsiveness was sort of an "add-on" to Bootstrap, it wasn't part of the original framework and as a result, it wasn't fully integrated (yet). Secondly, to this day Bootstrap uses an --in my humble opinion-- wrong approach, mixing percentages (for columns) and pixels (for gutters). It seems to me that this adds an unnecessary level of complexity in order to accomplish an exactly 100% filled layout. So, in Swing I've done it differently: it's uses a (customizable) 24-column grid system that's 100% (pun intended) percentage based.
* **Customizability**. I've seen different approaches here, but to me the best approach of using Swing, would be to pull down the repository once, and then customize the heck out of it. Perhaps this is the intend of Bootstrap as well, but it is my experience that a lot of Developers tend to include Bootstrap and then override certain styles... resulting in way too much CSS.
* **Loosely coupled components**. In Bootstrap, lots of components are dependent on each other. That's not the way to go. If I want to include a Modal component, that should just work, the CSS shouldn't break because you forgot to include a different component.
* **Sass > Less**. Sure, these days you have Bootstrap-sass, but that wasn't always the case. I prefer Sass just a little more than Less, so I built Swing in Sass.
* **Living Styleguide** I've mashed up several different existing tools and morphed it into a "responsive styleguide", allowing you to change the resolution on the fly, inside your desktop, without having to manually resize the window.
* **Live reload** Actually need to add this still... coming soon!

Again, I really like Bootstrap and Swing actually borrows a lot from Bootstrap's ideas. But I've taken a slightly different approach on a few things and the best way to explain why I decided to build Swing the way I did, is by pointing out the main differences with Bootstrap. Forgive me, Bootstrap. :)

Now, that isn't to say that Swing is perfect. Not by a long shot, it actually needs a lot more work. However, I figured that by open-sourcing it, I'd get some feedback and hopefully some help, making it better. For one, I could probably have much better README content... I'll update this page soon with some more installation instructions, but for now just know that you should be good to go as long as you have: Node.js, npm, grunt and of course, Sass.

@kramretak


## To Do
* Add live reload
* Move glyphicons back into library
* Merge in components from previous iteration (slide on small screen vs modal on larger)