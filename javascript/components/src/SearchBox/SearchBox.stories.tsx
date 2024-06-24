/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { StoryFn } from '@storybook/react'

import type { SearchBoxProps } from './SearchBox.js'
import { SearchBox } from './SearchBox.js'

const meta = {
	title: '@essex:components/SearchBox',
	component: SearchBox,
	args: {
		label: 'Label',
		placeholder: 'placeholder',
	},
}

export default meta

export const Primary = {
	name: 'SearchBox',
}
