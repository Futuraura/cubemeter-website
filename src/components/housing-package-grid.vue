<script lang="ts" setup>
import HouseImage from "../assets/img/herobg.png?url";
import HouseEditorialImage from "../assets/img/herobg-editorial.png?url";

const housingPackages = [
	{ name: "Астра", slug: "astra", price: 100, image: HouseImage },
	{ name: "Делюкс", slug: "deluxe", price: 140, image: HouseEditorialImage },
	{ name: "Евро", slug: "euro", price: 90, image: HouseImage },
	{ name: "Комфорт", slug: "komfort", price: 120, image: HouseEditorialImage },
	{ name: "Сканди", slug: "scandi", price: 130, image: HouseImage },
	{ name: "Барнхаус", slug: "barnhaus", price: 160, image: HouseEditorialImage },
	{ name: "Модерн", slug: "modern", price: 150, image: HouseImage },
	{ name: "Шале", slug: "chalet", price: 135, image: HouseEditorialImage },
	{ name: "Лофт", slug: "loft", price: 110, image: HouseImage },
	{ name: "Классик", slug: "classic", price: 100, image: HouseEditorialImage },
	{ name: "Верона", slug: "verona", price: 145, image: HouseImage },
	{ name: "Терем", slug: "terem", price: 125, image: HouseEditorialImage },
];
</script>

<template>
	<div class="housing-package-grid">
		<a
			v-for="housingPackage in housingPackages"
			:key="housingPackage.slug"
			:href="`/package/${housingPackage.slug}`"
			class="package-card"
		>
			<img :src="housingPackage.image" :alt="`Проект дома ${housingPackage.name}`" loading="lazy" />
			<h2>{{ housingPackage.name }}</h2>
			<p>{{ housingPackage.price.toLocaleString("ru-RU") }} АРы</p>
		</a>
	</div>
</template>

<style lang="scss" scoped>
.housing-package-grid {
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
	grid-auto-rows: auto;
	gap: 12px;

	.package-card {
		display: block;
		box-sizing: border-box;
		min-width: 0;
		padding: 12px;

		border-radius: 16px;
		background: #fff;
		color: #151515;
		font-family: var(--object-sans);
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		user-select: none;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease;

		&:hover {
			transform: translateY(-3px);
			box-shadow: 0 8px 18px rgba(0, 0, 0, 0.16);
		}

		&:focus-visible {
			outline: 2px solid #fff;
			outline-offset: 3px;
		}

		img {
			display: block;
			width: 100%;
			aspect-ratio: 320 / 360;
			object-fit: cover;
			box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
			border-radius: 12px;
		}

		h2 {
			margin: 12px 0 6px;
			font-size: 18px;
			font-weight: 500;
			overflow-wrap: anywhere;
		}

		p {
			margin: 0 0 4px;
			color: #777;
			font-size: 14px;
		}
	}
}

@media (prefers-reduced-motion: reduce) {
	.housing-package-grid .package-card {
		transition: none;

		&:hover {
			transform: none;
		}
	}
}

@media (max-width: 960px) {
	.housing-package-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

@media (max-width: 600px) {
	.housing-package-grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (max-width: 380px) {
	.housing-package-grid {
		grid-template-columns: 1fr;
	}
}
</style>
