<script setup lang="ts">
import { IconProps } from "@/types/icon/icon.type";
import { DevFolioColor } from "@/design/color/sementic";

const { color = "labelNormal" } = defineProps<IconProps>();
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.99997 18.8334C11.0945 18.8347 12.1785 18.6198 13.1898 18.2009C14.201 17.782 15.1195 17.1675 15.8925 16.3925C16.6674 15.6195 17.282 14.701 17.7008 13.6898C18.1197 12.6786 18.3346 11.5946 18.3333 10.5C18.3346 9.40548 18.1197 8.32146 17.7008 7.31023C17.282 6.29901 16.6674 5.38051 15.8925 4.60753C15.1195 3.83259 14.201 3.21803 13.1898 2.79916C12.1785 2.38028 11.0945 2.16534 9.99997 2.16669C8.90542 2.16534 7.82139 2.38028 6.81017 2.79916C5.79895 3.21803 4.88045 3.83259 4.10747 4.60753C3.33253 5.38051 2.71797 6.29901 2.2991 7.31023C1.88022 8.32146 1.66528 9.40548 1.66663 10.5C1.66528 11.5946 1.88022 12.6786 2.2991 13.6898C2.71797 14.701 3.33253 15.6195 4.10747 16.3925C4.88045 17.1675 5.79895 17.782 6.81017 18.2009C7.82139 18.6198 8.90542 18.8347 9.99997 18.8334Z"
      :stroke="DevFolioColor[color as keyof typeof DevFolioColor] || color"
      stroke-width="2"
      stroke-linejoin="round" />
    <path
      d="M6.66663 10.5L9.16663 13L14.1666 8"
      :stroke="DevFolioColor[color as keyof typeof DevFolioColor] || color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>
