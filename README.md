# LimberGridView

# [Try it out!](https://sharma-subendra-kr.github.io/LimberGridView/)
# [View this example code plugged in using React](https://github.com/sharma-subendra-kr/limber-grid-view-github-page)
# [For api Reference and Documentation please read the Wiki Page.](https://github.com/sharma-subendra-kr/LimberGridView/wiki)

## LimberGridView 1.0.0-beta.2 is finally here!

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids. Written in raw JavaScript, it can be plugged into most frameworks, plus it has a plugin for React applications. It gives users the most optimal arrangements using its highly efficient and fine-tuned algorithm.

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved.

This file is part of LimberGridView.

LimberGridView is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

LimberGridView is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with LimberGridView.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

### This is free software (Free as in freedom not the price). If you like to use this library on a non free software, you can get a proprietary license. To get a proprietary license contact _reach.subendra.kr@gmx.com_.

## The is a beta release. This version is unstable.
* **You might encounter unusual behaviour. Items overlapping while resizing or moving is fixed but due to race condition you might encounter it sometimes, this is not a high priority bug right now as there are other very high priority optimizations pending.**

* **The algorithm to position affected items will be updated in patches, there is a lot of room for improvement. This will not affect any APIs.**

* **Non affected items are arranged most of the times which is not a great user experience, these are floating point errors, this is a high priority bug and will most probably be fixed in the next release. This may seem trivial but trust me its not. So the next release might take some time as I'm taking few months off this project.**

###### Features ######
* **renderPlugin and removePlugin, these callbacks help you to render and remove React JSX inside any item. (These might help in some other framework as well. I haven't used other frameworks and I'm not interested to learn all the latest and greatest framework everytime it comes out. Support will be provided only for the most popular frameworks and for frameworks that are not popular, support will be provided on request)**

### If you want to donate to this project so I that can test on various other touch devices you can contact _reach.subendra.kr@gmx.com_.

###### Features to watch out for in the next releases. ######
* **Built in Intersection Observer**
* **Undo and Redo**
* **Improved Stability**

Although I know most of the bugs which are not in the issues page, if you find a bug or an error, you can report it by sending an email to _reach.subendra.kr@gmx.com_.

I'm writing the documentation and README page while I'm 5% awake, so please forgive me for the grammar.
