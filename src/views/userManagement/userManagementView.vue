<script setup lang="ts">
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import * as S from "./style";
import { onMounted, ref } from "vue";
import userRepository from "@/repository/user/user.repository";
import { showToast } from "@/libs/toast/swal";
import { UserListResponse } from "@/types/user/user.type";

const userList = ref<UserListResponse[]>([]);

onMounted(() => {
  userRepository
    .getUserList()
    .then((res) => {
      userList.value = res;
    })
    .catch((error) => {
      showToast("error", "회원 목록을 불러오는 데 실패했습니다.");
      console.error(error);
    });
});
</script>

<template>
  <S.Container>
    <Sidebar />
    <S.Wrap>
      <S.Main>
        <S.Title>회원 관리</S.Title>
        <S.Table>
          <S.THead>
            <S.Th>순번</S.Th>
            <S.Th>유저 번호</S.Th>
            <S.Th>이름</S.Th>
            <S.Th>이메일</S.Th>
            <S.Th>역할</S.Th>
          </S.THead>
          <S.TBody v-for="(user, idx) in userList" :key="user.id">
            <S.Td>{{ idx + 1 }}</S.Td>
            <S.Td>{{ user.id }}</S.Td>
            <S.Td>{{ user.name }}</S.Td>
            <S.Td>{{ user.email }}</S.Td>
            <S.Td>{{
              user.roles.map((r) => r.replace("ROLE_", "")).join(", ")
            }}</S.Td>
          </S.TBody>
        </S.Table>
      </S.Main>
    </S.Wrap>
  </S.Container>
</template>
