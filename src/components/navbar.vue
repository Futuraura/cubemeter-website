<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import BarsIcon from "~icons/fa7-solid/bars?width=1em&height=1em";
import CloseIcon from "~icons/fa7-solid/xmark?width=1em&height=1em";
import Logo from "../assets/svg/cubemeter.svg?component";

const isMenuOpen = ref(false);
const menuToggleButton = ref<HTMLButtonElement | null>(null);
const menuCloseButton = ref<HTMLButtonElement | null>(null);
let previousBodyOverflow = "";

const closeMenuOnDesktop = () => {
	if (window.innerWidth > 1120) {
		isMenuOpen.value = false;
	}
};

const closeMenu = () => {
	isMenuOpen.value = false;
};

watch(isMenuOpen, async (isOpen) => {
	if (isOpen) {
		previousBodyOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		await nextTick();
		menuCloseButton.value?.focus();
	} else {
		document.body.style.overflow = previousBodyOverflow;
		if (window.innerWidth <= 1120) {
			menuToggleButton.value?.focus();
		}
	}
});

onMounted(() => window.addEventListener("resize", closeMenuOnDesktop));

onBeforeUnmount(() => {
	window.removeEventListener("resize", closeMenuOnDesktop);
	document.body.style.overflow = previousBodyOverflow;
});
</script>

<template>
	<div class="wrapper">
		<div class="navbar" :class="{ 'menu-open': isMenuOpen }" @keydown.esc="closeMenu">
			<a href="/">
				<div class="left-logo">
					<Logo class="logo" />
					<p>Кубометр</p>
				</div></a
			>
			<button
				class="menu-toggle"
				type="button"
				ref="menuToggleButton"
				:aria-expanded="isMenuOpen"
				aria-controls="primary-navigation"
				:aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
				@click="isMenuOpen = !isMenuOpen"
			>
				<CloseIcon v-if="isMenuOpen" />
				<BarsIcon v-else />
			</button>
			<nav
				id="primary-navigation"
				class="right-links"
				:class="{ 'is-open': isMenuOpen }"
				aria-label="Основная навигация"
			>
				<div class="mobile-menu-header">
					<span>Меню</span>
					<button class="menu-close" type="button" ref="menuCloseButton" aria-label="Закрыть меню" @click="closeMenu">
						<CloseIcon />
					</button>
				</div>
				<a href="/packages" @click="closeMenu">Готовые пакеты</a>
				<a href="/houses" @click="closeMenu">Дома на продажу</a>
				<a href="/portfolio" @click="closeMenu">Портфолио</a>
				<a href="/custom-project" @click="closeMenu">Индивидуальный проект</a>
				<div class="nav-actions">
					<select class="nav-button secondary" aria-label="Язык" name="language">
						<option value="ru">RU</option>
						<option value="en">EN</option>
					</select>
					<a class="nav-button primary" href="/login" @click="closeMenu">Войти</a>
				</div>
			</nav>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	position: sticky;
	top: 0;
	z-index: 100;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0;
	padding: 12px 12px 0;

	.navbar {
		box-sizing: border-box;
		padding: 16px 20px;

		border: 2px solid rgba(255, 255, 255, 0.12);
		border-radius: 12px;
		background: rgba(12, 12, 14, 0.68);
		background-blend-mode: normal, overlay;
		backdrop-filter: blur(12px);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: 100%;

		.menu-toggle {
			display: none;
		}

		a {
			text-decoration: none;

			&:hover {
				text-decoration: underline;
				text-decoration-color: #fff;
			}

			.left-logo {
				font-family: var(--object-sans);
				font-size: 24px;

				display: flex;
				align-items: center;
				gap: 8px;

				user-select: none;

				.logo {
					width: 2rem;
					height: 2rem;
				}

				p {
					margin: 0;
					color: #fff;
					font-weight: 700;
				}
			}
		}

		.right-links {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: 12px;
			align-items: center;
			flex-wrap: nowrap;

			margin-left: auto;

			.nav-actions {
				display: flex;
				align-items: center;
				gap: 12px;
				flex-shrink: 0;
			}

			.mobile-menu-header {
				display: none;
			}

			a:not(.nav-button) {
				display: inline-block;
				white-space: nowrap;
				padding: 8px 12px;
				color: rgba(255, 255, 255, 0.72);
				font-family: var(--object-sans);
				font-size: 16px;
				font-weight: 350;
				text-decoration: none;
				transition: color 140ms ease;

				&:hover {
					color: #fff;
				}

				&:focus-visible {
					outline: 2px solid rgba(255, 255, 255, 0.8);
					outline-offset: 4px;
				}
			}

			.nav-button {
				display: flex;
				padding: 6px 14px;
				justify-content: center;
				align-items: center;

				font-family: var(--object-sans);
				font-size: 16px;
				font-weight: 350;

				border-radius: 4px;
				border: 2px solid #fff;
				backdrop-filter: blur(10px);
				transition: all 0.1s;
				cursor: pointer;
				text-decoration: none;

				&:hover {
					text-decoration: none;
				}

				&.primary {
					color: #000;
					background: #fff;

					&:hover {
						background: rgba(255, 255, 255, 0.85);
					}
				}

				&.secondary {
					appearance: none;
					-webkit-appearance: none;
					background-image: none;
					color: #fff;
					text-align: center;
					min-width: 52px;
					padding-right: 14px;
					background: rgba(255, 255, 255, 0.2);

					&:hover {
						background: rgba(255, 255, 255, 0.35);
					}

					&:focus-visible {
						background: rgba(255, 255, 255, 0.35);
						outline: 0;
					}

					option {
						color: #fff;
						background: #161616;
					}
				}
			}
		}
	}

	@media (max-width: 1120px) {
		.navbar {
			flex-wrap: wrap;
			justify-content: space-between;

			&.menu-open {
				background: transparent;
				border-color: transparent;
				backdrop-filter: none;
			}
		}

		.navbar .menu-toggle {
			box-sizing: border-box;
			width: 44px;
			height: 44px;
			margin-left: auto;
			padding: 0;
			border: 1px solid rgba(255, 255, 255, 0.4);
			border-radius: 4px;
			background: rgba(255, 255, 255, 0.08);
			color: #fff;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			display: flex;

			&:hover {
				background: rgba(255, 255, 255, 0.16);
			}

			&:focus-visible {
				outline: 2px solid #fff;
				outline-offset: 3px;
			}

			svg {
				font-size: 18px;
			}
		}

		.navbar .right-links {
			display: none;
			position: fixed;
			inset: 0;
			z-index: 200;
			box-sizing: border-box;
			width: 100vw;
			height: 100dvh;
			max-height: 100dvh;
			margin: 0;
			padding: 24px clamp(20px, 7vw, 64px);
			background: #0c0c0e;
			flex-direction: column;
			align-items: stretch;
			justify-content: flex-start;
			gap: 8px;
			overflow-y: auto;

			&.is-open {
				display: flex;
			}

			.mobile-menu-header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 12px;
				color: #fff;
				font-family: var(--object-sans);
				font-size: 20px;
				font-weight: 500;
			}

			.menu-close {
				box-sizing: border-box;
				width: 44px;
				height: 44px;
				padding: 0;
				border: 1px solid rgba(255, 255, 255, 0.4);
				border-radius: 4px;
				background: rgba(255, 255, 255, 0.08);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;

				&:focus-visible {
					outline: 2px solid #fff;
					outline-offset: 3px;
				}

				svg {
					font-size: 18px;
				}
			}

			a:not(.nav-button) {
				box-sizing: border-box;
				width: 100%;
				padding: 14px 4px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.12);
				font-size: 20px;
			}

			.nav-actions {
				display: flex;
				width: 100%;
				margin-top: auto;
				padding-top: 20px;
				flex-direction: column;
				align-items: stretch;
				gap: 12px;
				border-top: 1px solid rgba(255, 255, 255, 0.12);
			}

			.nav-button {
				box-sizing: border-box;
				width: 100%;
				min-height: 44px;
				padding: 8px 12px;
				font-size: 16px;
			}
		}
	}
}

@media (prefers-reduced-motion: reduce) {
	.right-links a {
		transition: none;
	}
}
</style>
