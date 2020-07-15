import * as React from "react";
import { createUseStyles } from "react-jss";
import { styles } from "./index.css";

const useStyles = createUseStyles(styles);

interface IProps {
	minValue: number;
	maxValue: number;
	step: number;
	current: {
		low: number;
		high: number;
	};
	onChangeCapture?: (lowValue: number, highValue: number) => void;
}

interface IThumbsState {
	boundaries: { [key: string]: { value: number } };
	selected: string | undefined;
}

export const SliderComponent: React.FC<IProps> = React.memo(
	({ minValue, maxValue, step, current: { low, high }, onChangeCapture }: IProps) => {
		const classes = useStyles();

		const lowHandleRef = React.useRef<HTMLDivElement>(null);
		const highHandleRef = React.useRef<HTMLDivElement>(null);
		const containerRef = React.useRef<HTMLDivElement>(null);
		const [mouseDown, setMouseDown] = React.useState<boolean>(false);
		const [thumbsState, setThumbsState] = React.useState<IThumbsState>({
			selected: undefined,
			boundaries: {
				low: { value: low },
				high: { value: high },
			},
		});

		React.useEffect(() => {
			const onMouseUpHandle = (e: MouseEvent): void => {
				if (e.button !== 2 && mouseDown) {
					console.log("calling for up change");
					setMouseDown(false);
					setThumbsState({
						...thumbsState,
						selected: undefined,
					});

					if (onChangeCapture) {
						const hasChanged =
							thumbsState.boundaries["low"].value !== low ||
							thumbsState.boundaries["high"].value !== high;

						hasChanged &&
							setTimeout(() => {
								onChangeCapture(
									thumbsState.boundaries["low"].value,
									thumbsState.boundaries["high"].value,
								);
							}, 100);
					}
				}
			};
			const onMouseDownHandle = (e: MouseEvent): void => {
				if (lowHandleRef.current?.contains(e.target as Node | null)) {
					setThumbsState({
						...thumbsState,
						selected: "low",
					});
				}
				if (highHandleRef.current?.contains(e.target as Node | null)) {
					setThumbsState({
						...thumbsState,
						selected: "high",
					});
				}
				if (
					lowHandleRef.current?.contains(e.target as Node | null) ||
					highHandleRef.current?.contains(e.target as Node | null)
				) {
					console.log("calling for down change");
					setMouseDown(true);
				}
			};
			const onMouseMoveHandle = (e: MouseEvent): void => {
				const rect = containerRef.current?.getBoundingClientRect();
				if (!mouseDown || !rect || !thumbsState.selected) {
					return;
				}
				console.log("calling for move change");
				const [start, end] = [rect.left, rect.right];
				const valueRange = maxValue - minValue;
				const pixelRange = end - start;

				const isSafe = start <= e.x && e.x <= end;
				const isLowHandle = thumbsState.selected === "low";
				const otherHandleValue = isLowHandle
					? thumbsState.boundaries["high"].value
					: thumbsState.boundaries["low"].value;

				const pixelPercent = (e.x - start) / pixelRange;
				const value = pixelPercent * valueRange - Math.abs(minValue);

				const tickRemainder = value / step - Math.floor(value / step);
				const isNextTick = tickRemainder >= 0.5;

				const tickedValue = isNextTick ? Math.floor(value / step) + 1 : Math.floor(value / step);

				const isOverlapping = isLowHandle
					? otherHandleValue <= tickedValue
					: tickedValue <= otherHandleValue;

				isSafe && !isOverlapping
					? setThumbsState({
							...thumbsState,
							boundaries: {
								...thumbsState.boundaries,
								[thumbsState.selected]: { value: tickedValue },
							},
					  })
					: null;
			};

			document.addEventListener("mouseup", onMouseUpHandle);
			document.addEventListener("mousedown", onMouseDownHandle);
			document.addEventListener("mousemove", onMouseMoveHandle);

			return () => {
				document.removeEventListener("mouseup", onMouseUpHandle);
				document.removeEventListener("mousedown", onMouseDownHandle);
				document.removeEventListener("mousemove", onMouseMoveHandle);
			};
		}, [
			thumbsState,
			mouseDown,
			lowHandleRef,
			highHandleRef,
			containerRef,
			onChangeCapture,
			maxValue,
			minValue,
			step,
			low,
			high,
		]);

		//#region Generation of positioning styles

		const genThumbStyle = (handleId: string): React.CSSProperties | undefined => {
			const data = thumbsState.boundaries[handleId];
			if (data) {
				const fullRange = maxValue - minValue;
				const isPositive = data.value >= 0;
				const value = isPositive
					? data.value + Math.abs(minValue)
					: Math.abs(minValue) - Math.abs(data.value);
				const percent = (value / fullRange) * 100;
				return {
					left: `${percent}%`,
				};
			} else {
				return undefined;
			}
		};

		const genTrackStyle = (): React.CSSProperties | undefined => {
			const percentRange: number | undefined = Object.keys(thumbsState.boundaries).reduce(
				(acc, key) => {
					const data = thumbsState.boundaries[key];
					const fullRange = maxValue - minValue;
					const isPositive = data.value >= 0;
					const value = isPositive
						? data.value + Math.abs(minValue)
						: Math.abs(minValue) - Math.abs(data.value);
					const percent = value / fullRange;

					if (acc === undefined) {
						acc = percent;
					} else {
						if (acc > percent) {
							acc -= percent;
						}
						if (acc < percent) {
							acc = percent - acc;
						}
					}

					return acc;
				},
				undefined as number | undefined,
			);

			if (percentRange) {
				return {
					width: `calc(${percentRange} * 240px)`,
					...genThumbStyle("low"),
				};
			} else {
				return undefined;
			}
		};

		//#endregion

		//#region  Generation of tick markers

		const genTicks = (): React.ReactNode => {
			const fullRange = maxValue - minValue;
			const tickCount = fullRange / step / 4;
			const retval = [];
			for (let i = 0; i < tickCount; i++) {
				retval.push({ key: `tick-${i}`, tag: i + 1, left: `${i * (100 / tickCount)}%` });
			}
			return (
				<>
					{retval.map(({ key, tag, left }) => (
						<span key={key} className={classes.tick} style={{ left }} />
					))}
				</>
			);
		};

		//#endregion

		return (
			<div className={classes.spec}>
				<div ref={containerRef} className={classes.container}>
					<div className={classes.rail} />
					<div className={classes.track} style={genTrackStyle()} />
					{genTicks()}
					<div
						ref={lowHandleRef}
						className={
							mouseDown && thumbsState.selected === "low"
								? classes.thumbActive
								: classes.thumbInactive
						}
						style={genThumbStyle("low")}
					/>
					<div
						ref={highHandleRef}
						className={
							mouseDown && thumbsState.selected === "high"
								? classes.thumbActive
								: classes.thumbInactive
						}
						style={genThumbStyle("high")}
					/>
				</div>
			</div>
		);
	},
);

SliderComponent.displayName = "SliderComponent";