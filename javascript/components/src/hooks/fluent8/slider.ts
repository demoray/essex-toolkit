/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type {
	ISliderProps,
	ISliderStyleProps,
	ISliderStyles,
	IStyleFunctionOrObject,
} from '@fluentui/react'
import merge from 'lodash-es/merge.js'
import { useMemo } from 'react'

import {
	SMALL_FONT_SIZE,
	SMALL_INPUT_HEIGHT,
	SMALL_THUMB_SIZE,
} from './constants.js'
import type { Size } from './types.js'

export function useSliderProps(
	props: Partial<ISliderProps>,
	size: Size = 'medium',
): Partial<ISliderProps> {
	const styles = useStyles(props?.styles, size)
	return useMemo(() => merge({ styles }, props), [styles, props])
}

function useStyles(
	styles?: IStyleFunctionOrObject<ISliderStyleProps, ISliderStyles>,
	size: Size = 'medium',
) {
	const sizedBase = useMemo(() => {
		if (size === 'small') {
			return {
				root: {},
				titleLabel: {
					fontSize: SMALL_FONT_SIZE,
				},
				container: {
					flex: 1,
				},
				valueLabel: {
					fontSize: SMALL_FONT_SIZE,
					marginLeft: SMALL_THUMB_SIZE / 2 + 2,
					marginRight: 0,
				},
				thumb: {
					// make sure thumb stays centered at smaller diameter
					top: -(SMALL_THUMB_SIZE / 2) + 1,
					width: SMALL_THUMB_SIZE,
					height: SMALL_THUMB_SIZE,
					borderWidth: 1,
				},
				lineContainer: {
					height: 2,
					borderRadius: 2,
				},
				slideBox: {
					height: SMALL_INPUT_HEIGHT,
					paddingLeft: SMALL_THUMB_SIZE / 2,
					paddingRight: 0,
				},
			}
		}
	}, [size])
	return useMemo(() => merge(sizedBase, styles), [styles, sizedBase])
}
