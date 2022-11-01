import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from '../Stack';
import { Col, Row } from '../Grid';

import { Slider, SliderSize } from './';

export default {
    title: 'Slider',
    component: Slider,
    argTypes: {
        size: {
            options: [
                SliderSize.Flex,
                SliderSize.Large,
                SliderSize.Medium,
                SliderSize.Small,
            ],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Slider>;

const Slider_Story: ComponentStory<typeof Slider> = (args) => {
    const [transientSlidingValueA, setTransientSlidingValueA] =
        useState<number>(20);
    const [transientSlidingValueB, setTransientSlidingValueB] =
        useState<number>(20);

    const handleChangeA = (val: number): void => {
        setTransientSlidingValueA(val);
    };

    const handleChangeB = (val: number): void => {
        setTransientSlidingValueB(val);
    };

    return (
        <Stack align="stretch" direction="vertical" fullWidth gap="xl">
            <Slider
                {...args}
                value={transientSlidingValueA}
                onChange={handleChangeA}
            />
            <Stack direction="horizontal" gap="xl" justify="center" fullWidth>
                <div>{transientSlidingValueA}</div>
            </Stack>
            <Row style={{ marginTop: 100 }}>
                <Col span={6} push={3}>
                    <Slider
                        {...args}
                        value={transientSlidingValueA}
                        onChange={handleChangeB}
                    />
                </Col>
            </Row>
            <Stack direction="horizontal" gap="xl" justify="center" fullWidth>
                <div>{transientSlidingValueB}</div>
            </Stack>
        </Stack>
    );
};

const Range_Slider_Story: ComponentStory<typeof Slider> = (args) => {
    const [transientSlidingValues, setTransientSlidingValues] = useState<
        number[]
    >([40, 80]);

    const handleChange = (vals: number[]): void => {
        setTransientSlidingValues(vals);
    };

    return (
        <Stack
            align="stretch"
            direction="vertical"
            fullWidth
            gap="xl"
            justify="center"
        >
            <Slider
                {...args}
                value={transientSlidingValues}
                onChange={handleChange}
            />
            <Stack direction="horizontal" gap="xl" justify="center" fullWidth>
                <div>{transientSlidingValues[0]}</div>
                <div>{transientSlidingValues[1]}</div>
            </Stack>
        </Stack>
    );
};

const sliderArgs: Object = {
    allowDisabledFocus: false,
    ariaLabel: 'Slider',
    autoFocus: false,
    classNames: 'my-slider',
    configContextProps: {
        noDisabledContext: false,
        noSizeContext: false,
    },
    disabled: false,
    formItemInput: false,
    hideMax: false,
    hideMin: false,
    hideValue: false,
    id: 'mySliderId',
    max: 100,
    maxLabel: null,
    min: 1,
    minLabel: null,
    name: 'mySlider',
    onChange: () => {
        console.log('changed');
    },
    showLabels: true,
    showMarkers: false,
    size: SliderSize.Medium,
    step: 1,
    'data-test-id': 'test-id',
    valueLabel: [null, null],
};

export const StandardSlider = Slider_Story.bind({});
StandardSlider.args = {
    ...sliderArgs,
    autoFocus: true,
    showLabels: true,
    value: 20,
};

export const RangeSlider = Range_Slider_Story.bind({});
RangeSlider.args = {
    ...sliderArgs,
    min: 0,
    showLabels: true,
    showMarkers: true,
    step: 20,
    value: [40, 80],
};
