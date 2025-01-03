import { expect, test } from 'vitest';

import TemporalControl from './index.ts';
import { Map } from 'maplibre-gl';

test('unittest', async () => {
	const temporalControl = new TemporalControl([], {});
	expect(temporalControl).toBeDefined();

	const map = new Map({ container: document.createElement('div') });
	expect(map.hasControl(temporalControl)).toBe(false);
	map.addControl(temporalControl);
	expect(map.hasControl(temporalControl)).toBe(true);
	map.removeControl(temporalControl);
	expect(map.hasControl(temporalControl)).toBe(false);
});
