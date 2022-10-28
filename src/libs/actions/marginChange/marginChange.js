/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2022 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

*/

import {
	decreaseMargin as _decreaseMargin,
	increaseMargin as _increaseMargin,
} from "./marginChangeUtils";
import { setPrivateConstantByName } from "../../../store/constants/privateConstants";
import {
	setPositionData,
	getModifiedPositionData,
	setModifiedPositionData,
	getCallbacks,
} from "../../../store/variables/essentials";
import getUndoRedo from "../../../store/variables/undoRedo";
import { render } from "../../renderers/renderers";

export const decreaseMargin = (context) => {
	try {
		const NEW_MARGIN = _decreaseMargin(context);
		setPrivateConstantByName(context, "MARGIN", NEW_MARGIN);
		const mpd = getModifiedPositionData(context);
		setPositionData(context, mpd);
		getUndoRedo(context).push({ pd: mpd, margin: NEW_MARGIN });
		render(context, false);
	} catch (error) {
		getCallbacks(context).getLogMessage({ type: "error", message: error });
		setModifiedPositionData(context, []);
		throw error;
	}
};

export const increaseMargin = (context) => {
	try {
		const NEW_MARGIN = _increaseMargin(context);
		setPrivateConstantByName(context, "MARGIN", NEW_MARGIN);
		const mpd = getModifiedPositionData(context);
		setPositionData(context, mpd);
		getUndoRedo(context).push({ pd: mpd, margin: NEW_MARGIN });
		render(context, false);
	} catch (error) {
		getCallbacks(context).getLogMessage({ type: "error", message: error });
		setModifiedPositionData(context, []);
		throw error;
	}
};
