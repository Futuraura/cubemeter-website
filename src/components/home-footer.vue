<script lang="ts" setup>
import Logo from "../assets/svg/cubemeter.svg?component";
</script>

<template>
	<footer class="site-footer">
		<a class="footer-brand" href="/" aria-label="Кубометр — главная">
			<Logo class="logo" aria-hidden="true" />
			<span>Кубометр</span>
		</a>
		<nav aria-label="Правовая информация">
			<a href="/terms-of-service">Условия обслуживания</a>
			<a href="/privacy-policy">Политика конфиденциальности</a>
			<a href="/gdpr">GDPR</a>
			<a href="/sitemap">Карта сайта</a>
		</nav>
	</footer>
</template>

<style lang="scss" scoped>
.site-footer {
	box-sizing: border-box;
	min-height: 56px;
	margin: 0 12px 12px;
	padding: 12px 16px;
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 12px;
	backdrop-filter: blur(12px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	font-family: var(--object-sans);

	.footer-brand {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: #fff;
		font-size: 16px;
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
		transition: color 140ms ease;

		&:hover {
			text-decoration: underline;
			text-underline-offset: 0.2em;
		}

		.logo {
			width: auto;
			height: 22px;
			filter: grayscale(1) brightness(0) invert(1);
		}
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 20px;
		flex-wrap: wrap;

		a {
			display: inline-block;
			color: rgba(255, 255, 255, 0.72);
			font-size: 14px;
			font-weight: 350;
			text-decoration: none;
			transition: color 140ms ease;

			&:hover {
				color: #fff;
				text-decoration: underline;
				text-underline-offset: 0.2em;
			}

			&:focus-visible {
				outline: 2px solid rgba(255, 255, 255, 0.8);
				outline-offset: 4px;
			}
		}
	}
}

@media (prefers-reduced-motion: reduce) {
	.site-footer nav a {
		transition: none;
	}
}

@media (max-width: 600px) {
	.site-footer {
		align-items: flex-start;
		flex-direction: column;
		gap: 10px;

		nav {
			justify-content: flex-start;
			gap: 8px 16px;
		}
	}
}
</style>
