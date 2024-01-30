# LimberGridView

# [Try it out!](https://sharma-subendra-kr.github.io/LimberGridView/)
# [View this example code plugged in using React](https://github.com/sharma-subendra-kr/limber-grid-view-github-page/blob/master/src/pages/home/common/components/lgvCustomizedView/lgvCustomizedView.tsx)
# [For API reference and documentation, please refer to this page.](https://sharma-subendra-kr.github.io/LimberGridView/docs/latest)

### I have stopped updating this public repository in favor of a private repository for the time being. For the latest updates and releases please visit my [website](https://limber.in).

## Installation

```npm install @sharma-subendra-kr/limber-grid-view```

## Instantiate
```
// Import CSS as per your directory structure
import "../node_modules/@sharma-subendra-kr/limber-grid-view/dist/index.css";

import LimberGridView from "@sharma-subendra-kr/limber-grid-view";

/*
	el is an element with fixed height and width where LimberGridView is rendered
	
	positionData is an array with position data in format 
	[{x1: number, x2: number, y1: number, y2: number}, ....]
	OR
	[{x: number, y: number, width: number, height: number}, ....]
	OR
	[{}, {}, {}, ....] // here squares are rendered
	
	Please read the wiki for details about all the callbacks
*/
const limberGridView = new LimberGridView({
	el: el.current,
	itemMouseDownMoveCheck: itemMouseDownMoveCheck,
	callbacks: {
		renderContent: renderContent,
		renderComplete: renderComplete,
		resizeComplete: resizeComplete,
		moveComplete: moveComplete,
		addComplete: addComplete,
		removeComplete: removeComplete,
		cutSpaceComplete: cutSpaceComplete,
		renderPlugin: renderPlugin,
		removePlugin: removePlugin,
		getArrangeTime: getArrangeTime,
		getLogMessage: getLogMessage,
	},
	publicConstants: {
		showBottomLeftResizeGuide: true,
		autoScrollForMouse: true,
		deskInteractionMode: "CUTSPACE",
		latchMovedItem: true,
	},
	positionData: positionData,
});
```

## Current version LimberGridView 1.0.0-beta.14.

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids. Written in vanilla JavaScript, it can be plugged into most frameworks, plus it has a plugin for React applications. It gives users the most optimal arrangements using its highly efficient and fine-tuned algorithm.

## This is a beta release. This version might be unstable.
Although many issues were identified and resolved in this current release, you might sometimes encounter unusual behavior.

### Improvements in the arrange algorithm are made in patches. I try to make sure it doesn't affect any APIs.

## Features:
* Built-in Intersection Observed
* Built-in Resize Observer
* Undo-Redo
* Touch support for tablets
* Mobile view
* Plugins for React. LimberGridView has "renderPlugin" and "removePlugin", these are callbacks, that pass the element which is the item itself. ReactDOM.render and ReactDOM.unmountComponentAtNode should be called in "renderPlugin" and "removePlugin" respectively.

### LimberGridView is free software (Free as in freedom, not the price). If you like to use this library on non-free software, you can get a proprietary license. To get a proprietary license, [pre-order now](https://limber.in/LimberGridView/buy).

### To get tips on how to use LimberGridView, head over to this [link](https://limber.in/LimberGridView/howToUse).

To see how LimberGridView works, head over to this [link](https://limber.in/LimberGridView/howItWorks).

### Contact
If you encounter any problems, you can contact me by emailing me to the email address mentioned on any file on the license header.

### Contributing
Due to problems that may arise while licensing the commercial license, contributions are not welcome.

## License
Copyright © 2018-2022, Subendra Kumar Sharma. All rights reserved.

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
