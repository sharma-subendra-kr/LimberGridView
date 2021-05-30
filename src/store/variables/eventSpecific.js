/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2021 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

export const getItemInteractionVars = function (context) {
	return context.store.variables.eventSpecific.itemInteraction;
};

export const setItemInteractionVarsByName = function (context, name, value) {
	context.store.variables.eventSpecific.itemInteraction[name] = value;
};

export const getDeskInteractionVars = function (context) {
	return context.store.variables.eventSpecific.deskInteraction;
};

export const setDeskInteractionVarsByName = function (context, name, value) {
	context.store.variables.eventSpecific.deskInteraction[name] = value;
};
