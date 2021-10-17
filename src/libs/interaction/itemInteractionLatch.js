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
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 8;

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
				tr.x + privateConstants.MARGIN + pd[index].width <=
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdj = tr.x + privateConstants.MARGIN;
				toYAdj = tr.y + privateConstants.MARGIN;

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
			trdEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				tr.x + privateConstants.MARGIN + pd[index].width <=
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdjEdge = tr.x + privateConstants.MARGIN;
				toYAdjEdge = pt.y;

				minTrdEdge = trdEdge;
				latchEdgeIndex = i;
			}
		}

		if (bld < minBld && bld < minTrd && pt.y >= bl.y && bld <= THRESHOLD) {
			if (
				bl.x + privateConstants.MARGIN + pd[index].width <
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdj = bl.x + privateConstants.MARGIN;
				toYAdj = bl.y + privateConstants.MARGIN;

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
			bldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				pt.x + pd[index].width <
				privateConstants.WIDTH - privateConstants.MARGIN
			) {
				toXAdjEdge = pt.x;
				toYAdjEdge = bl.y + privateConstants.MARGIN;

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
			distance: Math.min(minTrd, minBld),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
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
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 10;

	const len = pd.length;
	const pt = { x: toX + pd[index].width, y: toY };
	let tl, br, bl, tld, brd, tldEdge, brdEdge;
	let minTld = Number.MAX_SAFE_INTEGER;
	let minBrd = Number.MAX_SAFE_INTEGER;
	let minTldEdge = Number.MAX_SAFE_INTEGER;
	let minBrdEdge = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj, toXAdjEdge, toYAdjEdge;
	let latchCornerIndex, latchEdgeIndex;

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
				tl.x - privateConstants.MARGIN - pd[index].width >=
				privateConstants.MARGIN
			) {
				toXAdj = tl.x - privateConstants.MARGIN - pd[index].width;
				toYAdj = tl.y + privateConstants.MARGIN;

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
			tldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				tl.x - privateConstants.MARGIN - pd[index].width >=
				privateConstants.MARGIN
			) {
				toXAdjEdge = tl.x - privateConstants.MARGIN - pd[index].width;
				toYAdjEdge = pt.y;

				minTldEdge = tldEdge;
				latchEdgeIndex = i;
			}
		}

		if (brd < minTld && brd < minBrd && pt.y >= br.y && brd <= THRESHOLD) {
			if (
				br.x - privateConstants.MARGIN - pd[index].width >=
				privateConstants.MARGIN
			) {
				toXAdj = br.x - privateConstants.MARGIN - pd[index].width;
				toYAdj = br.y + privateConstants.MARGIN;

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
			brdEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (pt.x - pd[index].width >= privateConstants.MARGIN) {
				toXAdjEdge = pt.x - pd[index].width;
				toYAdjEdge = br.y + privateConstants.MARGIN;

				minBrdEdge = brdEdge;
				latchEdgeIndex = i;
			}
		}
	}

	return {
		cornerLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdj, toY: toYAdj },
			distance: Math.min(minTld, minBrd),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
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
	latchEdgeThreshold
) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;
	const LATCH_EDGE_THRESHOLD =
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 10;

	const len = pd.length;
	const pt = { x: toX, y: toY + pd[index].height };
	let tl, br, tr, tld, brd, tldEdge, brdEdge;
	let minTld = Number.MAX_SAFE_INTEGER;
	let minBrd = Number.MAX_SAFE_INTEGER;
	let minTldEdge = Number.MAX_SAFE_INTEGER;
	let minBrdEdge = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj, toXAdjEdge, toYAdjEdge;
	let latchCornerIndex, latchEdgeIndex;

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
				tl.x + privateConstants.MARGIN + pd[index].width <=
					privateConstants.WIDTH - privateConstants.MARGIN &&
				tl.y - privateConstants.MARGIN - pd[index].height >=
					privateConstants.MARGIN
			) {
				toXAdj = tl.x + privateConstants.MARGIN;
				toYAdj = tl.y - privateConstants.MARGIN - pd[index].height;

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
			tldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				pt.x + pd[index].width <=
					privateConstants.WIDTH - privateConstants.MARGIN &&
				tl.y - privateConstants.MARGIN - pd[index].height >=
					privateConstants.MARGIN
			) {
				toXAdjEdge = pt.x;
				toYAdjEdge = tl.y - privateConstants.MARGIN - pd[index].height;

				minTldEdge = tldEdge;
				latchEdgeIndex = i;
			}
		}

		if (brd < minTld && brd < minBrd && pt.x >= br.x && brd <= THRESHOLD) {
			if (
				br.x + privateConstants.MARGIN + pd[index].width <=
					privateConstants.WIDTH - privateConstants.MARGIN &&
				br.y - privateConstants.MARGIN - pd[index].height >=
					privateConstants.MARGIN
			) {
				toXAdj = br.x + privateConstants.MARGIN;
				toYAdj = br.y - privateConstants.MARGIN - pd[index].height;

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
			brdEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				br.x + privateConstants.MARGIN + pd[index].width <=
					privateConstants.WIDTH - privateConstants.MARGIN &&
				pt.y - pd[index].height >= privateConstants.MARGIN
			) {
				toXAdjEdge = br.x + privateConstants.MARGIN;
				toYAdjEdge = pt.y - pd[index].height;

				minBrdEdge = brdEdge;
				latchEdgeIndex = i;
			}
		}
	}

	return {
		cornerLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdj, toY: toYAdj },
			distance: Math.min(minTld, minBrd),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
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
	latchEdgeThreshold
) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;
	const LATCH_EDGE_THRESHOLD =
		latchEdgeThreshold || privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 10;

	const len = pd.length;
	const pt = { x: toX + pd[index].width, y: toY + pd[index].height };
	let tr, bl, tl, trd, bld, trdEdge, bldEdge;
	let minTrd = Number.MAX_SAFE_INTEGER;
	let minBld = Number.MAX_SAFE_INTEGER;
	let minTrdEdge = Number.MAX_SAFE_INTEGER;
	let minBldEdge = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj, toXAdjEdge, toYAdjEdge;
	let latchCornerIndex, latchEdgeIndex;

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
				tr.y - privateConstants.MARGIN - pd[index].height >=
					privateConstants.MARGIN &&
				tr.x - privateConstants.MARGIN - pd[index].width >=
					privateConstants.MARGIN
			) {
				toXAdj = tr.x - privateConstants.MARGIN - pd[index].width;
				toYAdj = tr.y - privateConstants.MARGIN - pd[index].height;

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
			trd <= LATCH_EDGE_THRESHOLD
		) {
			if (
				tr.y - privateConstants.MARGIN - pd[index].height >=
					privateConstants.MARGIN &&
				pt.x - pd[index].width >= privateConstants.MARGIN
			) {
				toXAdjEdge = pt.x - pd[index].width;
				toYAdjEdge = tr.y - privateConstants.MARGIN - pd[index].height;

				minTrdEdge = trdEdge;
				latchEdgeIndex = i;
			}
		}

		if (bld < minTrd && bld < minBld && pt.x <= bl.x && bld <= THRESHOLD) {
			if (
				bl.x - privateConstants.MARGIN - pd[index].width >=
					privateConstants.MARGIN &&
				bl.y - privateConstants.MARGIN - pd[index].height >=
					privateConstants.MARGIN
			) {
				toXAdj = bl.x - privateConstants.MARGIN - pd[index].width;
				toYAdj = bl.y - privateConstants.MARGIN - pd[index].height;

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
			bldEdge <= LATCH_EDGE_THRESHOLD
		) {
			if (
				bl.x - privateConstants.MARGIN - pd[index].width >=
					privateConstants.MARGIN &&
				pt.y - pd[index].height >= privateConstants.MARGIN
			) {
				toXAdjEdge = bl.x - privateConstants.MARGIN - pd[index].width;
				toYAdjEdge = pt.y - pd[index].height;

				minBldEdge = bldEdge;
				latchEdgeIndex = i;
			}
		}
	}

	return {
		cornerLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdj, toY: toYAdj },
			distance: Math.min(minTrd, minBld),
			latchCornerIndex,
		},
		edgeLatch: {
			to: { toX, toY },
			toAdj: { toX: toXAdjEdge, toY: toYAdjEdge },
			distance: Math.min(minTrdEdge, minBldEdge),
			latchEdgeIndex,
		},
	};
};
