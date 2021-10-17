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

import getPrivateConstants from "../../store/constants/privateConstants";
import { getPositionData } from "../../store/variables/essentials";
import { getDistanceBetnPts } from "../geometry/geometry";
import { isPointInsideOrTouchRectWithMargin } from "../utils/items";

export const latchTopLeft = (context, toX, toY, index, latchEdgeThreshold) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;
	const LATCH_EDGE_THRESHOLD =
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 5;
	const CANCEL_LATCH_EDGE_THRESHOLD =
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 4;

	const item = { ...pd[index] };
	const len = pd.length;
	const pt = { x: toX, y: toY };
	let inside;
	let tr, bl, br, trd, bld, trdEdge, bldEdge;
	let minTrd = Number.MAX_SAFE_INTEGER;
	let minBld = Number.MAX_SAFE_INTEGER;
	let minTrdEdge = Number.MAX_SAFE_INTEGER;
	let minBldEdge = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj, toXAdjEdge, toYAdjEdge;
	let latchCornerIndex, latchEdgeIndex;
	let chX, chY, chXEdge, chYEdge;

	for (let i = 0; i < len; i++) {
		if (isPointInsideOrTouchRectWithMargin(pd[i], pt)) {
			inside = i;
		}

		if (i === index) {
			continue;
		}

		tr = { x: pd[i].mX2, y: pd[i].mY1 };
		bl = { x: pd[i].mX1, y: pd[i].mY2 };
		br = { x: pd[i].mX2, y: pd[i].mY2 };

		trd = getDistanceBetnPts(tr, pt);
		bld = getDistanceBetnPts(bl, pt);
		trdEdge = pt.x - tr.x;
		bldEdge = pt.y - bl.y;

		if (trd < minTrd && trd < minBld && pt.x >= tr.x && trd <= THRESHOLD) {
			if (
				tr.x + privateConstants.MARGIN + item.width <=
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdj = tr.x + privateConstants.MARGIN;
				toYAdj = tr.y + privateConstants.MARGIN;

				chX = toXAdj;
				chY = toYAdj;

				minTrd = trd;
				latchCornerIndex = i;
			}
		}

		if (
			trdEdge < minTrdEdge &&
			trdEdge < minBldEdge &&
			pt.x >= tr.x &&
			pt.y >= tr.y &&
			pt.y <= br.y &&
			pt.y - tr.y > CANCEL_LATCH_EDGE_THRESHOLD &&
			trdEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				tr.x + privateConstants.MARGIN + item.width <=
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdjEdge = tr.x + privateConstants.MARGIN;
				toYAdjEdge = pt.y;

				chXEdge = toXAdjEdge;
				chYEdge = toYAdjEdge;

				minTrdEdge = trdEdge;
				latchEdgeIndex = i;
			}
		}

		if (bld < minBld && bld < minTrd && pt.y >= bl.y && bld <= THRESHOLD) {
			if (
				bl.x + privateConstants.MARGIN + item.width <
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdj = bl.x + privateConstants.MARGIN;
				toYAdj = bl.y + privateConstants.MARGIN;

				chX = toXAdj;
				chY = toYAdj;

				minBld = bld;
				latchCornerIndex = i;
			}
		}

		if (
			bldEdge < minBldEdge &&
			bldEdge < minTrdEdge &&
			pt.y >= bl.y &&
			pt.x >= bl.x &&
			pt.x <= br.x &&
			pt.x - bl.x > CANCEL_LATCH_EDGE_THRESHOLD &&
			bldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				pt.x + item.width <
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdjEdge = pt.x;
				toYAdjEdge = bl.y + privateConstants.MARGIN;

				chXEdge = toXAdjEdge;
				chYEdge = toYAdjEdge;

				minBldEdge = bldEdge;
				latchEdgeIndex = i;
			}
		}
	}

	return {
		overlappedItemIndex: inside,
		cornerLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdj, toY: toYAdj },
			ch: { x: chX, y: chY },
			distance: Math.min(minTrd, minBld),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
			ch: { x: chXEdge, y: chYEdge },
			distance: Math.min(minTrdEdge, minBldEdge),
			latchEdgeIndex,
		},
	};
};

export const latchTopRight = (context, toX, toY, index, latchEdgeThreshold) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;
	const LATCH_EDGE_THRESHOLD =
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 5;
	const CANCEL_LATCH_EDGE_THRESHOLD =
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 4;

	const item = { ...pd[index] };
	const len = pd.length;
	const pt = { x: toX + item.width, y: toY };
	let tl, br, bl, tld, brd, tldEdge, brdEdge;
	let minTld = Number.MAX_SAFE_INTEGER;
	let minBrd = Number.MAX_SAFE_INTEGER;
	let minTldEdge = Number.MAX_SAFE_INTEGER;
	let minBrdEdge = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj, toXAdjEdge, toYAdjEdge;
	let latchCornerIndex, latchEdgeIndex;
	let chX, chY, chXEdge, chYEdge;

	for (let i = 0; i < len; i++) {
		if (i === index) {
			continue;
		}

		tl = { x: pd[i].mX1, y: pd[i].mY1 };
		br = { x: pd[i].mX2, y: pd[i].mY2 };
		bl = { x: pd[i].mX1, y: pd[i].mY2 };

		tld = getDistanceBetnPts(tl, pt);
		brd = getDistanceBetnPts(br, pt);
		tldEdge = tl.x - pt.x;
		brdEdge = pt.y - br.y;

		if (tld < minTld && tld < minBrd && pt.x <= tl.x && tld <= THRESHOLD) {
			if (
				tl.x - privateConstants.MARGIN - item.width >=
				privateConstants.MARGIN
			) {
				toXAdj = tl.x - privateConstants.MARGIN - item.width;
				toYAdj = tl.y + privateConstants.MARGIN;

				chX = tl.x - privateConstants.MARGIN;
				chY = tl.y - privateConstants.MARGIN;

				minTld = tld;
				latchCornerIndex = i;
			}
		}

		if (
			tldEdge < minTldEdge &&
			tldEdge < minBrdEdge &&
			pt.x <= tl.x &&
			pt.y >= tl.y &&
			pt.y <= bl.y &&
			pt.y - tl.y > CANCEL_LATCH_EDGE_THRESHOLD &&
			tldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				tl.x - privateConstants.MARGIN - item.width >=
				privateConstants.MARGIN
			) {
				toXAdjEdge = tl.x - privateConstants.MARGIN - item.width;
				toYAdjEdge = pt.y;

				chXEdge = tl.x - privateConstants.MARGIN;
				chYEdge = toYAdjEdge;

				minTldEdge = tldEdge;
				latchEdgeIndex = i;
			}
		}

		if (brd < minTld && brd < minBrd && pt.y >= br.y && brd <= THRESHOLD) {
			if (
				br.x - privateConstants.MARGIN - item.width >=
				privateConstants.MARGIN
			) {
				toXAdj = br.x - privateConstants.MARGIN - item.width;
				toYAdj = br.y + privateConstants.MARGIN;

				chX = br.x - privateConstants.MARGIN;
				chY = toYAdj;

				minBrd = brd;
				latchCornerIndex = i;
			}
		}

		if (
			brdEdge < minTldEdge &&
			brdEdge < minBrdEdge &&
			pt.y >= br.y &&
			pt.x <= br.x &&
			pt.x >= bl.x &&
			bl.x - pt.x > CANCEL_LATCH_EDGE_THRESHOLD &&
			brdEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (pt.x - item.width >= privateConstants.MARGIN) {
				toXAdjEdge = pt.x - item.width;
				toYAdjEdge = br.y + privateConstants.MARGIN;

				chXEdge = pt.x;
				chYEdge = toYAdjEdge;

				minBrdEdge = brdEdge;
				latchEdgeIndex = i;
			}
		}
	}

	return {
		cornerLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdj, toY: toYAdj },
			ch: { x: chX, y: chY },
			distance: Math.min(minTld, minBrd),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
			ch: { x: chXEdge, y: chYEdge },
			distance: Math.min(minTldEdge, minBrdEdge),
			latchEdgeIndex,
		},
	};
};

export const latchBottomLeft = (
	context,
	toX,
	toY,
	index,
	width,
	height,
	latchEdgeThreshold
) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;
	const LATCH_EDGE_THRESHOLD =
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 5;
	const CANCEL_LATCH_EDGE_THRESHOLD =
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 4;

	const item = { ...pd[index] };
	item.width = width || item.width;
	item.height = height || item.height;
	const len = pd.length;
	const pt = { x: toX, y: toY + item.height };
	let tl, br, tr, tld, brd, tldEdge, brdEdge;
	let minTld = Number.MAX_SAFE_INTEGER;
	let minBrd = Number.MAX_SAFE_INTEGER;
	let minTldEdge = Number.MAX_SAFE_INTEGER;
	let minBrdEdge = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj, toXAdjEdge, toYAdjEdge;
	let latchCornerIndex, latchEdgeIndex;
	let chX, chY, chXEdge, chYEdge;

	for (let i = 0; i < len; i++) {
		if (i === index) {
			continue;
		}

		tl = { x: pd[i].mX1, y: pd[i].mY1 };
		br = { x: pd[i].mX2, y: pd[i].mY2 };
		tr = { x: pd[i].mX2, y: pd[i].mY1 };

		tld = getDistanceBetnPts(tl, pt);
		brd = getDistanceBetnPts(br, pt);

		tldEdge = tl.y - pt.y;
		brdEdge = pt.x - br.x;

		if (tld < minTld && tld < minBrd && pt.y <= tl.y && tld <= THRESHOLD) {
			if (
				tl.x + privateConstants.MARGIN + item.width <=
					privateConstants.WIDTH - privateConstants.MARGIN &&
				tl.y - privateConstants.MARGIN - item.height >= privateConstants.MARGIN
			) {
				toXAdj = tl.x + privateConstants.MARGIN;
				toYAdj = tl.y - privateConstants.MARGIN - item.height;

				chX = toXAdj;
				chY = tl.y - privateConstants.MARGIN;

				minTld = tld;
				latchCornerIndex = i;
			}
		}

		if (
			tldEdge < minTldEdge &&
			tldEdge < minBrdEdge &&
			pt.y <= tl.y &&
			pt.x >= tl.x &&
			pt.x <= tr.x &&
			pt.x - tl.x > CANCEL_LATCH_EDGE_THRESHOLD &&
			tldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				pt.x + item.width <= privateConstants.WIDTH - privateConstants.MARGIN &&
				tl.y - privateConstants.MARGIN - item.height >= privateConstants.MARGIN
			) {
				toXAdjEdge = pt.x;
				toYAdjEdge = tl.y - privateConstants.MARGIN - item.height;

				chXEdge = toXAdjEdge;
				chYEdge = tl.y - privateConstants.MARGIN;

				minTldEdge = tldEdge;
				latchEdgeIndex = i;
			}
		}

		if (brd < minTld && brd < minBrd && pt.x >= br.x && brd <= THRESHOLD) {
			if (
				br.x + privateConstants.MARGIN + item.width <=
					privateConstants.WIDTH - privateConstants.MARGIN &&
				br.y - privateConstants.MARGIN - item.height >= privateConstants.MARGIN
			) {
				toXAdj = br.x + privateConstants.MARGIN;
				toYAdj = br.y - privateConstants.MARGIN - item.height;

				chX = toXAdj;
				chY = br.y - privateConstants.MARGIN;

				minBrd = brd;
				latchCornerIndex = i;
			}
		}

		if (
			brdEdge < minTldEdge &&
			brdEdge < minBrdEdge &&
			pt.x >= br.x &&
			pt.y >= tr.y &&
			pt.y <= br.y &&
			br.y - pt.y > CANCEL_LATCH_EDGE_THRESHOLD &&
			brdEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				br.x + privateConstants.MARGIN + item.width <=
					privateConstants.WIDTH - privateConstants.MARGIN &&
				pt.y - item.height >= privateConstants.MARGIN
			) {
				toXAdjEdge = br.x + privateConstants.MARGIN;
				toYAdjEdge = pt.y - item.height;

				chXEdge = toXAdjEdge;
				chYEdge = pt.y;

				minBrdEdge = brdEdge;
				latchEdgeIndex = i;
			}
		}
	}

	return {
		cornerLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdj, toY: toYAdj },
			ch: { x: chX, y: chY },
			distance: Math.min(minTld, minBrd),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
			ch: { x: chXEdge, y: chYEdge },
			distance: Math.min(minTldEdge, minBrdEdge),
			latchEdgeIndex,
		},
	};
};

export const latchBottomRight = (
	context,
	toX,
	toY,
	index,
	width,
	height,
	latchEdgeThreshold
) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;
	const LATCH_EDGE_THRESHOLD =
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 5;
	const CANCEL_LATCH_EDGE_THRESHOLD =
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 4;

	const item = { ...pd[index] };
	item.width = width || item.width;
	item.height = height || item.height;
	const len = pd.length;
	const pt = { x: toX + item.width, y: toY + item.height };
	let tr, bl, tl, trd, bld, trdEdge, bldEdge;
	let minTrd = Number.MAX_SAFE_INTEGER;
	let minBld = Number.MAX_SAFE_INTEGER;
	let minTrdEdge = Number.MAX_SAFE_INTEGER;
	let minBldEdge = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj, toXAdjEdge, toYAdjEdge;
	let latchCornerIndex, latchEdgeIndex;
	let chX, chY, chXEdge, chYEdge;

	for (let i = 0; i < len; i++) {
		if (i === index) {
			continue;
		}

		tr = { x: pd[i].mX2, y: pd[i].mY1 };
		bl = { x: pd[i].mX1, y: pd[i].mY2 };
		tl = { x: pd[i].mX1, y: pd[i].mY1 };

		trd = getDistanceBetnPts(tr, pt);
		bld = getDistanceBetnPts(bl, pt);
		trdEdge = tr.y - pt.y;
		bldEdge = bl.x - pt.x;

		if (trd < minTrd && trd < minBld && pt.y <= tr.y && trd <= THRESHOLD) {
			if (
				tr.y - privateConstants.MARGIN - item.height >=
					privateConstants.MARGIN &&
				tr.x - privateConstants.MARGIN - item.width >= privateConstants.MARGIN
			) {
				toXAdj = tr.x - privateConstants.MARGIN - item.width;
				toYAdj = tr.y - privateConstants.MARGIN - item.height;

				chX = tr.x - privateConstants.MARGIN;
				chY = tr.y - privateConstants.MARGIN;

				minTrd = trd;
				latchCornerIndex = i;
			}
		}

		if (
			trdEdge < minTrdEdge &&
			trdEdge < minBldEdge &&
			pt.y <= tr.y &&
			pt.x >= tl.x &&
			pt.x <= tr.x &&
			tr.x - pt.x > CANCEL_LATCH_EDGE_THRESHOLD &&
			trdEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				tr.y - privateConstants.MARGIN - item.height >=
					privateConstants.MARGIN &&
				pt.x - item.width >= privateConstants.MARGIN
			) {
				toXAdjEdge = pt.x - item.width;
				toYAdjEdge = tr.y - privateConstants.MARGIN - item.height;

				chXEdge = pt.x;
				chYEdge = tr.y - privateConstants.MARGIN;

				minTrdEdge = trdEdge;
				latchEdgeIndex = i;
			}
		}

		if (bld < minTrd && bld < minBld && pt.x <= bl.x && bld <= THRESHOLD) {
			if (
				bl.x - privateConstants.MARGIN - item.width >=
					privateConstants.MARGIN &&
				bl.y - privateConstants.MARGIN - item.height >= privateConstants.MARGIN
			) {
				toXAdj = bl.x - privateConstants.MARGIN - item.width;
				toYAdj = bl.y - privateConstants.MARGIN - item.height;

				chX = bl.x - privateConstants.MARGIN;
				chY = bl.y - privateConstants.MARGIN;

				minBld = bld;
				latchCornerIndex = i;
			}
		}

		if (
			bldEdge < minTrdEdge &&
			bldEdge < minBldEdge &&
			pt.x <= bl.x &&
			pt.y >= tl.y &&
			pt.y <= bl.y &&
			bl.y - pt.y > CANCEL_LATCH_EDGE_THRESHOLD &&
			bldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				bl.x - privateConstants.MARGIN - item.width >=
					privateConstants.MARGIN &&
				pt.y - item.height >= privateConstants.MARGIN
			) {
				toXAdjEdge = bl.x - privateConstants.MARGIN - item.width;
				toYAdjEdge = pt.y - item.height;

				chXEdge = bl.x - privateConstants.MARGIN;
				chYEdge = pt.y;

				minBldEdge = bldEdge;
				latchEdgeIndex = i;
			}
		}
	}

	return {
		cornerLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdj, toY: toYAdj },
			ch: { x: chX, y: chY },
			distance: Math.min(minTrd, minBld),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
			ch: { x: chXEdge, y: chYEdge },
			distance: Math.min(minTrdEdge, minBldEdge),
			latchEdgeIndex,
		},
	};
};

export const resizeSizeAdjustToCorners = (
	context,
	x,
	y,
	width,
	height,
	index,
	forBottomRight
) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	// const DISTANCE_THRESHOLD = privateConstants.WIDTH / 4;
	const DISTANCE_THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 2;
	const AXIS_DISTANCE_THRESHOLD =
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 10;

	const len = pd.length;
	const tlpt = { x: x, y: y };
	const trpt = { x: x + width, y: y };
	const brpt = { x: x + width, y: y + height };
	const blpt = { x: x, y: y + height };

	let tl,
		bl,
		br,
		tr,
		blptTobr,
		brptTobl,
		trptTobr,
		brptTotr,
		blptTotl,
		tlptTobl;
	let ldistance = Number.MAX_SAFE_INTEGER;
	let rdistance = Number.MAX_SAFE_INTEGER;
	let tdistance = Number.MAX_SAFE_INTEGER;
	let bdistance = Number.MAX_SAFE_INTEGER;
	let isToAdjPresent = false;
	let toAdjIndex;
	let hToAdjDirection;
	let wToAdjDirection;
	let hLatchPoint;
	let wLatchPoint;
	let latchPoint;

	for (let i = 0; i < len; i++) {
		if (i === index) {
			continue;
		}

		tl = { x: pd[i].x1, y: pd[i].y1 };
		bl = { x: pd[i].x1, y: pd[i].y2 };
		br = { x: pd[i].x2, y: pd[i].y2 };
		tr = { x: pd[i].x2, y: pd[i].y1 };

		brptTobl = getDistanceBetnPts(bl, brpt);
		blptTobr = getDistanceBetnPts(br, blpt);

		trptTobr = getDistanceBetnPts(br, trpt);
		brptTotr = getDistanceBetnPts(tr, brpt);

		blptTotl = getDistanceBetnPts(tl, blpt);
		tlptTobl = getDistanceBetnPts(bl, tlpt);

		// affected bottom to adjacent bottom
		if (
			brptTobl < rdistance &&
			brptTobl < ldistance &&
			brpt.x < bl.x &&
			Math.abs(brpt.y - bl.y) <= AXIS_DISTANCE_THRESHOLD &&
			brpt.x + privateConstants.MARGIN <= privateConstants.WIDTH
		) {
			height = bl.y - trpt.y;

			if (forBottomRight && bl.x - brpt.x <= AXIS_DISTANCE_THRESHOLD) {
				width = bl.x - privateConstants.MARGIN * 2 - blpt.x;
			}

			rdistance = brptTobl;
			isToAdjPresent = true;
			toAdjIndex = i;
			hToAdjDirection = "right";
			hLatchPoint = bl;
		}

		if (
			blptTobr < ldistance &&
			blptTobr < rdistance &&
			blpt.x > br.x &&
			Math.abs(blpt.y - br.y) <= AXIS_DISTANCE_THRESHOLD &&
			brpt.x + privateConstants.MARGIN <= privateConstants.WIDTH
		) {
			height = br.y - tlpt.y;

			if (!forBottomRight && blpt.x - br.x <= AXIS_DISTANCE_THRESHOLD) {
				x = br.x + privateConstants.MARGIN * 2;
				width = brpt.x - x;
			}

			ldistance = blptTobr;
			isToAdjPresent = true;
			toAdjIndex = i;
			hToAdjDirection = "left";
			hLatchPoint = br;
		}

		// affected top to adjacent bottom
		if (
			trptTobr < tdistance &&
			trptTobr < bdistance &&
			trptTobr <= DISTANCE_THRESHOLD &&
			Math.abs(trpt.x - br.x) <= AXIS_DISTANCE_THRESHOLD &&
			forBottomRight
		) {
			width = br.x - tlpt.x;

			tdistance = trptTobr;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "top";
			wLatchPoint = br;
		}

		if (
			tlptTobl < tdistance &&
			tlptTobl < bdistance &&
			tlptTobl <= DISTANCE_THRESHOLD &&
			Math.abs(tlpt.x - bl.x) <= AXIS_DISTANCE_THRESHOLD &&
			!forBottomRight
		) {
			width = trpt.x - bl.x;
			x = bl.x;

			tdistance = tlptTobl;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "top";
			wLatchPoint = bl;
		}

		// affected bottom to adjacent top
		if (
			brptTotr < bdistance &&
			brptTotr < tdistance &&
			brptTotr <= DISTANCE_THRESHOLD &&
			Math.abs(brpt.x - tr.x) <= AXIS_DISTANCE_THRESHOLD &&
			forBottomRight
		) {
			width = tr.x - blpt.x;

			if (
				forBottomRight &&
				tr.y > brpt.y &&
				tr.y - brpt.y <= AXIS_DISTANCE_THRESHOLD
			) {
				height = tr.y - privateConstants.MARGIN * 2 - trpt.y;
			}

			bdistance = brptTotr;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "bottom";
			wLatchPoint = tr;
		}

		if (
			blptTotl < bdistance &&
			blptTotl < tdistance &&
			blptTotl <= DISTANCE_THRESHOLD &&
			Math.abs(blpt.x - tl.x) <= AXIS_DISTANCE_THRESHOLD &&
			!forBottomRight
		) {
			width = brpt.x - tl.x;
			x = tl.x;

			if (
				!forBottomRight &&
				tl.y > blpt.y &&
				tl.y - blpt.y <= AXIS_DISTANCE_THRESHOLD
			) {
				height = tl.y - privateConstants.MARGIN * 2 - tlpt.y;
			}

			bdistance = blptTotl;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "bottom";
			wLatchPoint = tl;
		}
	}

	if (hLatchPoint && wLatchPoint) {
		latchPoint = {
			x: wLatchPoint.x,
			y: hLatchPoint.y,
		};
	} else if (hLatchPoint) {
		latchPoint = hLatchPoint;
	} else if (wLatchPoint) {
		latchPoint = wLatchPoint;
	}

	return {
		x: x,
		y: y,
		height,
		width,
		isToAdjPresent,
		toAdjIndex,
		hToAdjDirection,
		wToAdjDirection,
		latchPoint,
	};
};
