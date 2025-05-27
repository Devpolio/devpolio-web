<script lang="ts" setup>
import * as S from "./style";
</script>

<template>
  <S.Container>
    <S.Wrap>
      <S.Title>로그인</S.Title>
      <S.Info>
        <S.InputWrap>
          <S.InputBox>
            <S.InputTitle>이메일</S.InputTitle>
            <S.Input placeholder="이메일을 입력해주세요"></S.Input>
          </S.InputBox>
          <S.InputBox>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.Input placeholder="비밀번호를 입력해주세요"></S.Input>
          </S.InputBox>
        </S.InputWrap>
        <S.ButtonWrap>
          <S.Button>로그인</S.Button>
          <S.TextWrap>
            <S.Text>아직 계정이 없다면?</S.Text>
            <S.Link>회원가입</S.Link>
          </S.TextWrap>
        </S.ButtonWrap>
      </S.Info>
    </S.Wrap>
  </S.Container>
</template>
