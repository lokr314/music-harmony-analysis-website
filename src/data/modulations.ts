import rawModulations from "../../all_tonal_modulations_with_modulation_chord_starting_from_c_major_or_c_minor_from_json_with_new_children.json";

export type KeyEntry = [number, string];

export interface Modulation {
	start_keyset: KeyEntry[];
	end_keyset: KeyEntry[];
	distance: number;
	pcset: number[];
	unambiguous_pcset: boolean;
	base_modulation: boolean;
	base_modulation_number: number | null;
	containing: number[];
	transitive_containing: number[];
	children: number[];
}

type RawModulations = Record<string, Modulation>;

const modulations = rawModulations as RawModulations;

export function getAllModulations(): RawModulations {
	return modulations;
}

export function getModulationEntries(): [string, Modulation][] {
	return Object.entries(modulations).sort(([a], [b]) => Number(a) - Number(b));
}

export function getModulationById(id: string): Modulation | undefined {
	return modulations[id];
}

