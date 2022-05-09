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

import getPublicConstants from "../../store/constants/publicConstants";
import { getCallbacks } from "../../store/variables/essentials";

export const logger = (...args) => {
	const context = args[0];
	const publicConstants = getPublicConstants(context);
	if (publicConstants.EMIT_DEBUG_LOGS) {
		args.shift();
		getCallbacks(context).getDebugLog(args);
	}
};
