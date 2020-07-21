import * as React from "react";

interface IProps {
	height?: number;
	width?: number;
}

export const WatermarkComponent: React.FC<IProps> = (props: IProps) => {
	return (
		<svg viewBox="0 0 232 62" fill="none" {...props} width={130} height={40}>
			<path
				d="M12.465 43V17.406h7.875c2.25 0 4.26.51 6.03 1.53 1.78 1.007 3.17 2.449 4.165 4.324.996 1.863 1.494 3.984 1.494 6.363v1.178c0 2.379-.492 4.494-1.476 6.346-.973 1.851-2.35 3.287-4.131 4.306-1.781 1.02-3.791 1.535-6.03 1.547h-7.927zm5.273-21.322v17.086h2.55c2.062 0 3.638-.674 4.728-2.022 1.09-1.347 1.646-3.275 1.67-5.783v-1.354c0-2.601-.54-4.57-1.618-5.906-1.078-1.347-2.654-2.021-4.728-2.021h-2.602zM46.566 43c-.234-.457-.404-1.025-.51-1.705-1.23 1.371-2.83 2.057-4.798 2.057-1.864 0-3.41-.54-4.64-1.618-1.22-1.078-1.829-2.437-1.829-4.078 0-2.015.744-3.562 2.233-4.64 1.5-1.078 3.662-1.623 6.486-1.635h2.338v-1.09c0-.879-.229-1.582-.686-2.11-.445-.527-1.154-.79-2.127-.79-.855 0-1.53.205-2.021.615-.48.41-.721.973-.721 1.687h-5.08c0-1.101.34-2.12 1.02-3.058.68-.938 1.64-1.67 2.882-2.198 1.242-.539 2.637-.808 4.184-.808 2.344 0 4.201.592 5.572 1.775 1.383 1.172 2.074 2.825 2.074 4.957v8.244c.012 1.805.264 3.17.756 4.096V43h-5.133zm-4.2-3.533a4.44 4.44 0 002.074-.492c.632-.34 1.101-.791 1.406-1.354v-3.27h-1.899c-2.543 0-3.896.88-4.06 2.637l-.018.3c0 .632.223 1.153.668 1.564.445.41 1.055.615 1.828.615zM59.521 23.98l.158 2.197c1.36-1.7 3.181-2.55 5.467-2.55 2.015 0 3.515.593 4.5 1.776.984 1.184 1.488 2.953 1.511 5.309V43h-5.08V30.836c0-1.078-.234-1.857-.703-2.338-.469-.492-1.248-.738-2.338-.738-1.43 0-2.502.61-3.217 1.828V43h-5.08V23.98h4.782zM80.386 43h-5.098V23.98h5.098V43zM74.99 19.059c0-.762.252-1.39.756-1.881.516-.492 1.213-.739 2.092-.739.867 0 1.559.247 2.074.739.516.492.773 1.119.773 1.88 0 .774-.263 1.407-.79 1.899-.516.492-1.202.738-2.057.738-.856 0-1.547-.246-2.074-.738-.516-.492-.774-1.125-.774-1.898zm18.352 24.293c-2.79 0-5.063-.856-6.82-2.567-1.747-1.71-2.62-3.99-2.62-6.838v-.492c0-1.91.37-3.615 1.108-5.115.738-1.512 1.781-2.672 3.129-3.48 1.359-.82 2.906-1.231 4.64-1.231 2.602 0 4.647.82 6.135 2.46 1.5 1.642 2.25 3.968 2.25 6.98v2.074H89.053c.164 1.242.656 2.238 1.476 2.988.832.75 1.881 1.125 3.147 1.125 1.957 0 3.486-.71 4.588-2.127l2.496 2.795c-.762 1.078-1.793 1.922-3.094 2.531-1.3.598-2.742.897-4.324.897zm-.58-15.61c-1.008 0-1.828.34-2.461 1.02-.621.68-1.02 1.652-1.195 2.918h7.066v-.405c-.024-1.125-.328-1.992-.914-2.601-.586-.621-1.418-.932-2.496-.932zM109.426 43h-5.098V16h5.098v27zm26.771-6.715c0-.996-.351-1.758-1.054-2.285-.704-.54-1.969-1.102-3.797-1.688-1.828-.597-3.276-1.183-4.342-1.757-2.906-1.57-4.359-3.686-4.359-6.346 0-1.383.386-2.613 1.16-3.691.785-1.09 1.904-1.94 3.357-2.55 1.465-.609 3.106-.913 4.922-.913 1.828 0 3.457.334 4.887 1.002 1.429.656 2.537 1.588 3.322 2.795.797 1.207 1.195 2.578 1.195 4.113h-5.273c0-1.172-.369-2.08-1.108-2.725-.738-.656-1.775-.984-3.111-.984-1.289 0-2.291.275-3.006.826-.715.54-1.072 1.254-1.072 2.145 0 .832.416 1.529 1.248 2.091.844.563 2.08 1.09 3.709 1.582 3 .903 5.186 2.022 6.557 3.358 1.371 1.336 2.056 3 2.056 4.992 0 2.215-.838 3.955-2.513 5.22-1.676 1.255-3.932 1.882-6.768 1.882-1.969 0-3.762-.358-5.379-1.073-1.617-.726-2.853-1.717-3.709-2.97-.844-1.254-1.265-2.707-1.265-4.36h5.291c0 2.824 1.687 4.236 5.062 4.236 1.254 0 2.232-.251 2.936-.755.703-.516 1.054-1.23 1.054-2.145zm15.451-.914L149.82 37.2V43h-5.08V16h5.08v14.959l.985-1.266 4.869-5.713h6.099l-6.873 7.928L162.371 43h-5.836l-4.887-7.629zM169.332 43h-5.098V16h5.098v27zm11.303-7.19l3.515-11.83h5.45l-7.647 21.973-.422 1.002c-1.136 2.485-3.011 3.727-5.625 3.727a7.998 7.998 0 01-2.25-.334v-3.85l.774.018c.961 0 1.675-.147 2.144-.44.481-.293.856-.78 1.125-1.459l.598-1.564-6.662-19.072h5.467l3.533 11.83zM202.344 43c-.235-.457-.405-1.025-.51-1.705-1.23 1.371-2.83 2.057-4.799 2.057-1.863 0-3.41-.54-4.64-1.618-1.219-1.078-1.829-2.437-1.829-4.078 0-2.015.745-3.562 2.233-4.64 1.5-1.078 3.662-1.623 6.486-1.635h2.338v-1.09c0-.879-.228-1.582-.685-2.11-.446-.527-1.155-.79-2.127-.79-.856 0-1.53.205-2.022.615-.48.41-.721.973-.721 1.687h-5.08c0-1.101.34-2.12 1.02-3.058.68-.938 1.64-1.67 2.883-2.198 1.242-.539 2.636-.808 4.183-.808 2.344 0 4.201.592 5.572 1.775 1.383 1.172 2.075 2.825 2.075 4.957v8.244c.011 1.805.263 3.17.756 4.096V43h-5.133zm-4.201-3.533c.75 0 1.441-.164 2.074-.492.633-.34 1.101-.791 1.406-1.354v-3.27h-1.898c-2.543 0-3.897.88-4.061 2.637l-.018.3c0 .632.223 1.153.668 1.564.446.41 1.055.615 1.829.615zm23.168-10.723a13.82 13.82 0 00-1.829-.14c-1.921 0-3.181.65-3.779 1.95V43h-5.08V23.98h4.799l.14 2.268c1.02-1.746 2.432-2.62 4.237-2.62.562 0 1.09.077 1.582.23l-.07 4.886z"
				fill="#C4C4C4"
				fillOpacity={0.7}
			/>
		</svg>
	);
};