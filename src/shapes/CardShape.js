import {shape, string, number} from 'prop-types';

export const CardShape = shape({
    id: number.isRequired,
    images: string.isRequired,
    title: string.isRequired,
    description: string
});