<script setup lang="ts">
import { IconProps } from "@/types/icon/icon.type";
import { DevFolioColor } from "@/design/color/sementic";

const { color = "labelNormal" } = defineProps<IconProps>();
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 5V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V5H4C3.73478 5 3.48043 5.10536 3.29289 5.29289C3.10536 5.48043 3 5.73478 3 6C3 6.26522 3.10536 6.51957 3.29289 6.70711C3.48043 6.89464 3.73478 7 4 7H5V18C5 18.7956 5.31607 19.5587 5.87868 20.1213C6.44129 20.6839 7.20435 21 8 21H16C16.7956 21 17.5587 20.6839 18.1213 20.1213C18.6839 19.5587 19 18.7956 19 18V7H20C20.2652 7 20.5196 6.89464 20.7071 6.70711C20.8946 6.51957 21 6.26522 21 6C21 5.73478 20.8946 5.48043 20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.2652 7.10536 18.5196 7.29289 18.7071C7.48043 18.8946 7.73478 19 8 19H16C16.2652 19 16.5196 18.8946 16.7071 18.7071C16.8946 18.5196 17 18.2652 17 18V7Z"
      :fill="DevFolioColor[color as keyof typeof DevFolioColor] || color" />
    <path d="M9 9H11V17H9V9ZM13 9H15V17H13V9Z" :fill="DevFolioColor[color as keyof typeof DevFolioColor] || color" />
  </svg>
</template>
