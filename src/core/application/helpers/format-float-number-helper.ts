// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class FormatFloatNumberHelper {
	static toPersist(value: number) {
		return value * 100;
	}

	static format(value: number) {
		return value / 100;
	}
}
