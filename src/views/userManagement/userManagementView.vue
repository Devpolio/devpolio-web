<script setup lang="ts">
import Sidebar from "@/components/common/sidebar/sidebar.vue";
import * as S from "./style";
import { computed, onMounted, ref, watch } from "vue";
import userRepository from "@/repository/user/user.repository";
import { showToast } from "@/libs/toast/swal";
import { UserListResponse } from "@/types/user/user.type";

const userList = ref<UserListResponse[]>([]);
const searchValue = ref<string>("");
const name = ref<string>("");
const email = ref<string>("");
const buttonData = ref([
  { id: "all", label: "전체", isAtv: true },
  { id: "id", label: "유저 번호", isAtv: false },
  { id: "nameOrEmail", label: "이름 또는 이메일", isAtv: false },
]);

const activeButtonId = computed(() => {
  return buttonData.value.find((btn) => btn.isAtv)?.id;
});

const handleClickButton = (id: string) => {
  buttonData.value = buttonData.value.map((item) => ({
    ...item,
    isAtv: id === item.id,
  }));
};

const handleKeyDownSearch = () => {
  if (!searchValue.value) return;

  try {
    if (activeButtonId.value === "id") {
      const id = Number(searchValue.value);

      if (isNaN(id)) {
        showToast("error", "아이디는 숫자여야 합니다.");
        return;
      }

      userRepository
        .getUserFilter(id)
        .then((data) => (userList.value = data))
        .catch(() => showToast("error", "유저가 없습니다."));
    } else {
      searchValue.value.includes("@")
        ? (email.value = searchValue.value)
        : (name.value = searchValue.value);

      userRepository
        .getUserSearch(name.value, email.value)
        .then((data) => (userList.value = data))
        .catch(() => showToast("error", "유저가 없습니다."));
    }
  } catch {
    showToast("error", "사용자를 조회하는데 오류가 발생했습니다");
  }
};

const fetchUserList = () => {
  userRepository
    .getUserList()
    .then((res) => {
      userList.value = res;
    })
    .catch(() => {
      showToast("error", "회원 목록을 불러오는 데 실패했습니다.");
    });
};

watch(activeButtonId, (newVal) => {
  if (newVal === "all") {
    fetchUserList();
  }
});

onMounted(() => {
  fetchUserList();
});
</script>

<template>
  <S.Container>
    <Sidebar />
    <S.Wrap>
      <S.Main>
        <S.Title>회원 관리</S.Title>
        <S.Box>
          <S.TopWrap>
            <S.ButtonWrap>
              <S.Button
                v-for="btn in buttonData"
                :key="btn.id"
                :isAtv="btn.isAtv"
                @click="() => handleClickButton(btn.id)">
                {{ btn.label }}
              </S.Button>
            </S.ButtonWrap>
            <S.Search
              v-if="activeButtonId !== 'all'"
              v-model="searchValue"
              :placeholder="
                activeButtonId === 'id'
                  ? '유저 번호를 입력하세요'
                  : '이름 또는 이메일을 입력하세요'
              "
              @keydown.enter="handleKeyDownSearch"></S.Search>
          </S.TopWrap>
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
        </S.Box>
      </S.Main>
    </S.Wrap>
  </S.Container>
</template>
