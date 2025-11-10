import fs from "node:fs";
import path from "node:path";

const AUDIO_EXTENSIONS = new Set([".mp3", ".wav", ".ogg", ".m4a", ".flac", ".aac"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".ogg", ".mov", ".m4v"]);

export interface MediaAssets {
	audio: string[];
	video: string[];
}

function getMediaDirectory(id: string): string {
	return path.resolve(process.cwd(), "public", "media", "modulations", id);
}

export function getMediaAssets(id: string): MediaAssets {
	const directory = getMediaDirectory(id);

	if (!fs.existsSync(directory)) {
		return { audio: [], video: [] };
	}

	const entries = fs.readdirSync(directory, { withFileTypes: true });

	const audio: string[] = [];
	const video: string[] = [];

	for (const entry of entries) {
		if (!entry.isFile()) {
			continue;
		}

		const ext = path.extname(entry.name).toLowerCase();
		const webPath = `/media/modulations/${id}/${entry.name}`;

		if (AUDIO_EXTENSIONS.has(ext)) {
			audio.push(webPath);
		} else if (VIDEO_EXTENSIONS.has(ext)) {
			video.push(webPath);
		}
	}

	return { audio, video };
}

