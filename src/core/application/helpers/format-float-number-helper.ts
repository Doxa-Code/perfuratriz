// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class FormatFloatNumberHelper {
	static toPersist(value: number, decimals = 100) {
		return Math.round(value * decimals);
	}

	static format(value: number, decimals = 100) {
		return value / decimals;
	}
}
