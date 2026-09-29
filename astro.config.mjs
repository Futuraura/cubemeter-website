// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import vue from "@astrojs/vue";
import svgLoader from "vite-svg-loader";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [vue()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: "PP Object Sans",
			cssVariable: "--object-sans",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Thin.otf"],
						weight: 140,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Light.otf"],
						weight: 215,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Regular.otf"],
						weight: 315,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Medium.otf"],
						weight: 430,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Semibold.otf"],
						weight: 500,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Bold.otf"],
						weight: 570,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Heavy.otf"],
						weight: 730,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Black.otf"],
						weight: 900,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Thin.otf"],
						weight: 140,
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-LightSlanted.otf"],
						weight: 215,
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-Slanted.otf"],
						weight: 315,
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-MediumSlanted.otf"],
						weight: 430,
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-SemiboldSlanted.otf"],
						weight: 500,
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-BoldSlanted.otf"],
						weight: 570,
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-HeavySlanted.otf"],
						weight: 730,
						style: "italic",
					},
					{
						src: ["./src/assets/fonts/pangrampangram/PPObjectSans-BlackSlanted.otf"],
						weight: 900,
						style: "italic",
					},
				],
			},
			fallbacks: ["Fixel"],
		},
		{
			provider: fontProviders.local(),
			name: "Fixel",
			cssVariable: "--fixel",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/macpaw/Fixel.ttf"],
						weight: "100 900",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/macpaw/Fixel-Italic.ttf"],
						weight: "100 900",
						style: "italic",
					},
				],
			},
			fallbacks: ["Work Sans"],
		},
		{
			provider: fontProviders.bunny(),
			name: "Work Sans",
			cssVariable: "--work-sans",
		},
	],

	vite: {
		server: {
			host: "0.0.0.0",
			allowedHosts: ["a8be-109-204-187-112.ngrok-free.app"],
		},
		plugins: [
			svgLoader(),
			Icons({
				compiler: "vue3",
			}),
		],
	},
});
